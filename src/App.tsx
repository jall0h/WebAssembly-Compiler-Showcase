import "./App.css";

function App() {
  const compileCode = (code: string) => {
    console.log(code);
  };
  return (
    <>
      <div className="flex gap-4">
        <div>
          <textarea
            className="border"
            value={`def hello(): String = "Hello World!\n";
                          def print_hello(x: String) : Void = print_string(x);
print_string(hello())`}
          />
        </div>
        <button
          onClick={() => {
            compileCode(document.querySelector("textarea")?.value || "");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Compile
        </button>
        <div>
          <textarea className="border" />
        </div>
      </div>
    </>
  );
}

export default App;
