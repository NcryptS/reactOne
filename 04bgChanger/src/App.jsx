import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="outerDiv" style={{ backgroundColor: color }}>
      <div className="nav">
        <button className="red" onClick={() => setColor("red")}>
          Red
        </button>
        <button className="green" onClick={() => setColor("green")}>
          Green
        </button>
        <button className="blue" onClick={() => setColor("blue")}>
          Blue
        </button>
        <button className="black" onClick={() => setColor("black")}>
          Black
        </button>
        <button className="cyan" onClick={() => setColor("cyan")}>
          Cyan
        </button>
        <button className="purple" onClick={() => setColor("purple")}>
          Purple
        </button>
        <button className="yellow" onClick={() => setColor("yellow")}>
          Yellow
        </button>
      </div>
    </div>
  );
}

export default App;
