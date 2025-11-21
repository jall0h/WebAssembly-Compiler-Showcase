import "./App.css";

function App() {
  const compileCode = () => {
    console.log("Compiling code...");
  };
  return (
    <>
      <div className="flex gap-4">
        <div>
          <textarea className="border" />
        </div>
        <button
          onClick={() => {
            compileCode();
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
