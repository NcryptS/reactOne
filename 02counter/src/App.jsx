import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const reduceValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Understanding Hooks in React</h1>
      <p>Gonna keep the value of counter to be between 0 and 20</p>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Click me Add value: {counter}</button>
      <br />
      <button onClick={reduceValue}>Click me Remove value: {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
