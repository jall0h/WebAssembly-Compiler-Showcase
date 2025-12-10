import wabt from "wabt";
import "./App.css";
import { Compiler } from "./compiler/compiler";
import { useRef, useState } from "react";
import ErrorModal from "./components/ErrorModal";
import { functionImports } from "./importedFunctions";
import { examplePrograms, type programs } from "./programs";

function App() {
  const [watBox, setWatBox] = useState<string>("");
  const [code, setCode] = useState<string>(
    `Select a program from the dropdown`
  );
  const [output, setOutput] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const compileCode = async (code: string) => {
    const compiler = new Compiler();
    const c = await compiler
      .compile(code)
      .then((c: string) => {
        setWatBox(c);
        setShowErrorModal(false);
        return c;
      })
      .catch((err) => {
        setWatBox("");
        setShowErrorModal(true);
        setErrorMessage(`Compilation Error: ${err.message}`);
        return `;; Compilation Error: ${err.message}`;
      });

    return c;
  };
  async function execute(watCode: string) {
    const wabtModule = await wabt();

    //Function imports
    const mod = wabtModule.parseWat("imports.wat", functionImports);
    mod.validate();
    const binaryOutput = mod.toBinary({}).buffer;
    console.log("WASM Binary:", binaryOutput);

    //Example Program
    const program = wabtModule.parseWat("program.wat", watCode);
    program.validate();
    const programBinary = program.toBinary({}).buffer;
    console.log("Program WASM Binary:", programBinary);

    /**
     * Outputs given number to terminal
     *
     * @param num - The number to ouput
     */
    const outputNumber = (num: number) => {
      console.log(String(num));
      currentOutput.push(String(num));
      setOutput([...currentOutput]);
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

    const memory = new WebAssembly.Memory({ initial: 10, maximum: 65536 });
    const currentOutput: string[] = [];
    const importObject = {
      process: {
        //Outputs strings to console
        print_string: (offset: number, length: number) => {
          const arr = new Uint8Array(memory.buffer, offset, length);
          const string = new TextDecoder("utf8").decode(arr);
          console.log(string);
          currentOutput.push(string);
          setOutput([...currentOutput]);
          console.log(output);
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

    await WebAssembly.instantiate(binaryOutput, {
      ...importObject,
      js: { mem: memory },
    }).then(async (wasmModule) => {
      console.log(wasmModule);
      const exported_functions = wasmModule.instance.exports;
      await WebAssembly.instantiate(programBinary, {
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
  }

  return (
    <>
      <nav className="mb-20">
        <h1 className="text-3xl font-bold underline">A-FUN Compiler</h1>
      </nav>
      <div className="w-full h-250">
        <textarea
          className="border w-full h-full"
          value={output
            .map((x) => {
              if (x === "\n\x00") {
                return "\n";
              } else return x;
            })
            .join("")}
        />
      </div>
      <div className="flex gap-4 container mx-auto h-150">
        <div className="w-full h-full">
          <span>
            <select
              defaultValue={"Select a program"}
              onChange={(e) => {
                setCode(e.target.value);
              }}
            >
              <option disabled>Select a program</option>
              {examplePrograms.map(({ name, program }) => {
                return <option value={program}>{name}</option>;
              })}
            </select>
          </span>
          <textarea value={code} className="border h-full w-full" />
        </div>
        <button
          onClick={() => {
            compileCode(code || "");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Compile
        </button>
        <button
          onClick={() => {
            compileCode(code || "").then((code) => {
              execute(code);
            });
            console.log("output", output);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Execute
        </button>
        <div className="w-full h-full">
          <textarea className="border w-full h-full" value={watBox} />
        </div>
      </div>

      {errorMessage && showErrorModal && (
        <ErrorModal errorMessage={errorMessage} />
      )}
    </>
  );
}

export default App;
// async function compile() {
//   const wabtModule = await wabt();

//   const wat = `(module
//   (func (export "add") (param i32 i32) (result i32)
//     local.get 0
//     local.get 1
//     i32.add)
// )`;
//   const mod = wabtModule.parseWat("example.wat", wat);
//   mod.validate();
//   const binaryOutput = mod.toBinary({ log: true });
//   console.log("WASM Binary:", binaryOutput);
// }

//LEFT TO DO
//Refactor
// Style
// Deploy
//Add to Portfolio
