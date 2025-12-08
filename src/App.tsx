import wabt from "wabt";
import "./App.css";
import { Compiler } from "./compiler/compiler";
import { useRef, useState } from "react";
import ErrorModal from "./components/ErrorModal";

function App() {
  const [watBox, setWatBox] = useState<string>("");
  const [code, setCode] = useState<string>(`print_string("Hello, World!");`);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const compileCode = async (code: string) => {
    const compiler = new Compiler();
    const c = await compiler
      .compile(code)
      .then((c) => {
        setWatBox(c);
        setShowErrorModal(false);
      })
      .catch((err) => {
        setWatBox("");
        setShowErrorModal(true);
        setErrorMessage(`Compilation Error: ${err.message}`);
        return `;; Compilation Error: ${err.message}`;
      });
  };

  return (
    <>
      <nav className="mb-20">
        <h1 className="text-3xl font-bold underline">A-FUN Compiler</h1>
      </nav>
      <div className="flex gap-4 container mx-auto h-150">
        <div className="w-full h-full">
          <span>
            <select></select>
          </span>
          <textarea className="border h-full w-full" />
        </div>
        <button
          onClick={() => {
            compileCode(document.querySelector("textarea")?.value || "");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Compile
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

//Steps i need to take
// 1. Get the source code from the textarea
// 2. Produce the WAT format code
// 3. Use Wabt to convert to WASM

// TODO
// Actually create wasm thing
// Style page to look nicer
// pre-laod the example programs in a select list for the text area
// Add project to CV
