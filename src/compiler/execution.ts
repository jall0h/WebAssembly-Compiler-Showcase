import { Compiler } from "./compiler";
import wabt from "wabt";
/**
 * Outputs given number to terminal
 *
 * @param num - The number to ouput
 */
const outputNumber = (num: number) => {
  console.log(String(num));
};

/**
 * Outputs character if valid charcode otherwise outputs a the number
 *
 * @param charCode - The ASCII Value of a Character
 */
const outputChar = (charCode: number) => {
  if (charCode <= 255) {
    console.log(String.fromCharCode(charCode));
  } else {
    outputNumber(charCode);
  }
};

/**
 * Imports functions and executes program
 *
 * @param fileName - The file name of the program
 */
const execute = async (fileName: string, memory: WebAssembly.Memory) => {
  // Input and Output functions to import to WebAssembly Environment// WebAssembly Memory
  const importObject = {
    process: {
      //Outputs strings to console
      print_string: (offset: number, length: number) => {
        const arr = new Uint8Array(memory.buffer, offset, length);
        const string = new TextDecoder("utf8").decode(arr);
        console.log(string);
      },
      //Outputs integers to console
      print_int: (num: number) => {
        outputNumber(num);
      },
      //Outputs integers to consoles
      print_float: (num: number) => {
        outputNumber(num);
      },
      print_char: (charCode: number) => {
        outputChar(charCode);
      },
    },
  };
  const wasm = fs.readFileSync(`./src/wasm/${fileName}.wasm`);
  const function_imports = fs.readFileSync(`./src/wasm/functions.wasm`); // File that contains function imports
  await WebAssembly.instantiate(function_imports, {
    ...importObject,
    js: { mem: memory },
  }).then(async (wasmModule) => {
    const exported_functions = wasmModule.instance.exports;
    await WebAssembly.instantiate(wasm, {
      ...importObject,
      functions: exported_functions,
      js: { mem: memory },
    }).then(async (module) => {
      const instance = module.instance.exports;
      if (instance.main) {
        const main = instance.main as CallableFunction;
        main();
      }
    });
  });
};

// Get Wabt Module
async function compile() {
  const wabtModule = await wabt();

  const wat = `(module
    (func (export "add") (param i32 i32) (result i32)
      local.get 0
      local.get 1
      i32.add)
  )`;
  const mod = wabtModule.parseWat("example.wat", wat);
  mod.validate();
  const binaryOutput = mod.toBinary({});
  console.log("WASM Binary:", binaryOutput);
}

// Get WAT (text format) file and convert to WASM file (binary format)
const generateWasm = async (file: string) => {
  try {
    console.log("Generating WAT");
    const compiler = new Compiler();
    await compiler.compile(file);
    if (!fs.existsSync(`./src/wat/${file}.wat`)) {
      throw new Error("WAT file not created");
    }
    const cmd: string = `wat2wasm ./src/wat/${file}.wat -o ./src/wasm/${file}.wasm`;
    console.log("Executing WAT2WASM:", cmd);
    await executeCommand(cmd);
    if (!fs.existsSync(`./src/wasm/${file}.wasm`)) {
      throw new Error("WASM file not created");
    }
  } catch (error) {
    console.log(error);
  }
};

// Execute Program with new memory import
const run = async (fileName: string) => {
  const memory = new WebAssembly.Memory({ initial: 10, maximum: 65536 });
  await execute(fileName, memory);
};
