import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
      <div
        className="h-screen w-full duration-200 bg-green-300"
        style={{ backgroundColor: color }}
      >
        <div className="justify-center fixed flex flex-wrap  bottom-12 inset-x-0 px-2">
          <div className="justify-center flex flex-wrap gap-3 bg-white  shadow-lg rounded-3xl px-3 py-2">
            <button
              onClick={() => setColor("Red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg
          "
              style={{ backgroundColor: "red" }}
            >
              RED
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg
          "
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              onClick={() => setColor("Blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg
          "
              style={{ backgroundColor: "Blue" }}
            >
              Blue
            </button>

            <button
              onClick={() => setColor("white")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg
          "
              style={{ backgroundColor: "white" }}
            >
              White
            </button>

            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg
          "
              style={{ backgroundColor: "purple" }}
            >
              Lovender
            </button>

            <button
              onClick={() => setColor("skyblue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg
          "
              style={{ backgroundColor: "skyblue" }}
            >
              Sky Blue
            </button>

            <button
              onClick={() => setColor("Black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg
          "
              style={{ backgroundColor: "Black" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
