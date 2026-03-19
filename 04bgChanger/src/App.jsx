import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");  // set the default background color to olive using useState.

  // onClick uses a callback function because onClick expects a function
  // " onClick = {setColor("red")} " can't be used because it expects a function and not a function call.

  // each button named 'color' with onclick that set the desired background color using 'setColor' useState function
  
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
