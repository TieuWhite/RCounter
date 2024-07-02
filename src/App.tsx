import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let color = count > 0 ? "green" : count < 0 ? "red" : "black";

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <>
      <h1>Counter</h1>
      <h1 className="current-number" id="current-number" style={{ color }}>
        {count}
      </h1>
      <div className="buttons-container">
        <div className="buttons" onClick={decrease}>
          Decrease
        </div>
        <div className="buttons" onClick={reset}>
          Reset
        </div>
        <div className="buttons" onClick={increase}>
          Increase
        </div>
      </div>
    </>
  );
}

export default App;
