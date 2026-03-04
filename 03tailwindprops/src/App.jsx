import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card.jsx";
import NewCard from "./components/newCard.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card name="NcryptS" subject="Mountains" />

      <NewCard name="NcryptS" subject="MS Image" />
    </>
  );
}

export default App;
