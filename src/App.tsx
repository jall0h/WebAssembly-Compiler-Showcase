import wabt from "wabt";
import { Compiler } from "./compiler/compiler";
import { useState } from "react";
import ErrorModal from "./components/ErrorModal";
import { functionImports } from "./importedFunctions";
import { examplePrograms } from "./programs";

function App() {
  const [watBox, setWatBox] = useState<string>("");
  const [code, setCode] = useState<string>(
    `Select a program from the dropdown`,
  );
  const [output, setOutput] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
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
    // console.log("WASM Binary:", binaryOutput);

    //Example Program
    const program = wabtModule.parseWat("program.wat", watCode);
    program.validate();
    const programBinary = program.toBinary({}).buffer;
    // console.log("Program WASM Binary:", programBinary);

    /**
     * Outputs given number to terminal
     *
     * @param num - The number to ouput
     */
    const outputNumber = (num: number) => {
      // console.log(String(num));
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
        // console.log(String.fromCharCode(charCode));
        currentOutput.push(String.fromCharCode(charCode));
        setOutput([...currentOutput]);
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
          currentOutput.push(string);
          setOutput([...currentOutput]);
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
    }).then(async (wasmModule: any) => {
      const exported_functions = wasmModule.instance.exports;
      await WebAssembly.instantiate(programBinary, {
        ...importObject,
        functions: exported_functions,
        js: { mem: memory },
      }).then(async (module: any) => {
        const instance = module.instance.exports;
        if (instance.main) {
          const main = instance.main as CallableFunction;
          main();
        }
      });
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-blue-600">
            A-FUN Compiler
          </h1>
        </div>
      </nav>
      {errorMessage && showErrorModal && (
        <ErrorModal errorMessage={errorMessage} />
      )}
      <main className="container mx-auto px-6 py-10 space-y-10">
        <div className="flex items-center gap-6">
          {/* Label */}
          <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Example Programs:
          </label>

          {/* Dropdown */}
          <select
            defaultValue={"Select a program"}
            onChange={(e) => setCode(e.target.value)}
            className="border rounded-lg px-4 py-2 bg-white shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option disabled>Select a program</option>

            {examplePrograms.map(({ name, program }) => (
              <option key={name} value={program}>
                {name}
              </option>
            ))}
          </select>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => compileCode(code || "")}
              className="bg-blue-600 hover:bg-blue-700 transition 
                 text-white font-medium px-6 py-2 rounded-lg shadow-sm"
            >
              Compile
            </button>

            <button
              onClick={() => {
                compileCode(code || "").then((compiled) => {
                  execute(compiled);
                });
              }}
              className="bg-green-600 hover:bg-green-700 transition 
                 text-white font-medium px-6 py-2 rounded-lg shadow-sm"
            >
              Execute
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[80vh]">
          <div className="bg-white rounded-xl shadow-sm border p-4 flex flex-col">
            <h2 className="font-semibold text-gray-700 mb-2">Source Code</h2>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 border rounded-lg p-3 font-mono text-sm resize-none 
                         focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-4 flex flex-col">
            <h2 className="font-semibold text-gray-700 mb-2">
              Compiled WAT Output
            </h2>

            <textarea
              value={watBox}
              readOnly
              className="flex-1 border rounded-lg p-3 font-mono text-sm resize-none 
                         bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h2 className="font-semibold text-gray-700 mb-2">Output Console</h2>

          <textarea
            className="w-full h-screen border rounded-lg p-6 
               font-mono text-lg leading-[1.3]
               bg-black text-green-400 
               resize-none overflow-auto
               focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={output.map((x) => (x === "\n\x00" ? "\n" : x)).join("")}
            readOnly
          />
        </div>
      </main>
    </div>
  );
}

export default App;
