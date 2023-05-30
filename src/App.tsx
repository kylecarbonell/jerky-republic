import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Bar from "./Components/Bar";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <div className="Bar">
        <Bar />
      </div>
      <div id="Content">
        <Home />
      </div>
    </div>
  );
}

export default App;
