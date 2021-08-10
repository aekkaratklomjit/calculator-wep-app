import React, { useState } from "react";
import "./App.css"

function App() {
  const [input, setInput] = useState("");
  const numberButton = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".",'%'].forEach((item) => {
    numberButton.push(
      <button
        className="digits"
        onClick={(e) => {setInput(input + e.target.value);}}
        value={item}
        key={item}>
        {item}
      </button>
    );
  });
  const operationsButton = [];
  ['+','-','*','/'].forEach((item) => {
    operationsButton.push(
      <button
        className="operations"
        onClick={(e) => {setInput(input + e.target.value);}}
        value={item}
        key={item}>
        {item}
      </button>
    );
  });

  return (
    <div className="App">
      <div className="display">{input}</div>
      <div className="flex">
        <div>
          <button className="special" onClick={() => setInput(input.substr(0, input.length - 1))}>
          Clear
          </button>
          <button className="special" onClick={() => setInput("")} value="">AC</button>
          {numberButton}
        </div>
        <div>
          {operationsButton}
          <button
          className="operations"
          value="="
          onClick={(e) => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            } catch (e) {
              console.log(e);
            }
          }}>=</button>      
        </div>
      </div>
    </div>
  );
}

export default App
