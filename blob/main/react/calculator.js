// app.js
import React from "react";
import Calculator from "./calculator";

function App() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Calculator</h2>
      <Calculator />
    </div>
  );
}

export default App;

// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//  app.css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(to right, #008cff, #00c6ff);
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculator {
  background: #f0cb7d;
  padding: 20px;
  border-radius: 15px;
  width: 260px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.display {
  width: 100%;
  height: 50px;
  font-size: 22px;
  text-align: right;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ddd;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  padding: 15px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: #f4eaca;
}

.operator {
  background: #ffd166;
}

.equal {
  grid-column: span 2;
  background: #06d6a0;
  color: rgb(9, 177, 51);
}

.clear {
  background: #ef476f;
  color: white;
}

// calculator.js
import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div style={styles.container}>
      <input type="text" value={input} readOnly style={styles.input} />

      <div style={styles.buttons}>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={clearInput}>C</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "250px",
    margin: "50px auto",
    padding: "20px",
    border: "2px solid #333",
    borderRadius: "10px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: "40px",
    fontSize: "20px",
    marginBottom: "10px",
    textAlign: "right",
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  },
};

export default Calculator;

