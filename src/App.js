import React, { useState } from 'react';
import './App.css';

function Key({ label, onClick }) {
  return (
    <button className="Button" onClick={onClick}>
      {label}
    </button>
  );
}

function Display({ value }) {
  return (
    <div className="Disp">
      {value}
    </div>
  );
}

function App() {
  const [displayValue, setDisplayValue] = useState("0");

  const handleClick = (label) => {
    setDisplayValue(prev => prev === "0" ? label.toString() : prev + label);
  };

  const showFullName = () => {
    setDisplayValue("Santos, Mark Yasher P.");
  };

  const calculateResult = () => {
    try {
      // Evaluate the expression
      const result = eval(displayValue.replace('x', '*'));
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  return (
    <div className="App">
      <h2>Calculator of Mark Yasher P. Santos - IT3A</h2>
      <div className="Calc">
        <Display value={displayValue} />
        <div className="ButtonsContainer">
          <Key label={1} onClick={() => handleClick(1)} />
          <Key label={2} onClick={() => handleClick(2)} />
          <Key label={3} onClick={() => handleClick(3)} />
          <Key label="+" onClick={() => handleClick('+')} />
          <Key label={4} onClick={() => handleClick(4)} />
          <Key label={5} onClick={() => handleClick(5)} />
          <Key label={6} onClick={() => handleClick(6)} />
          <Key label="-" onClick={() => handleClick('-')} />
          <Key label={7} onClick={() => handleClick(7)} />
          <Key label={8} onClick={() => handleClick(8)} />
          <Key label={9} onClick={() => handleClick(9)} />
          <Key label="x" onClick={() => handleClick('x')} />
          <Key label={0} onClick={() => handleClick(0)} />
          <Key label="C" onClick={() => setDisplayValue("0")} />
          <Key label="=" onClick={calculateResult} />
          <Key label="/" onClick={() => handleClick('/')} />
        </div>
        <Key label="SANTOS" onClick={showFullName} />
      </div>
    </div>
  );
}

export default App;