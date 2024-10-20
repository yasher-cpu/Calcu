import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');

  const handleButtonClick = (value) => {
    if (display === '0' || display === 'ERROR') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const handleClear = () => {
    setDisplay('0');
  };

  const handleShowName = () => {
    setDisplay('Mark Yasher P. Santos');
  };

  const handleCalculate = () => {
    try {
      const expression = display.replace(/÷/g, '/');
      setDisplay(eval(expression).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <h1 className='head'>Calculator of Mark Yasher P. Santos - IT3A</h1>
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('÷')}>÷</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}></button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <button className="name-button" onClick={handleShowName}>SANTOS</button>
    </div>
  );
}

export default App;
