import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Bar from "./Components/Bar";
import Home from "./Components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="Bar">
        <Bar />
      </div>
      <div className="Home">
        <Home />
      </div>
    </div>
  );
}

export default App;
