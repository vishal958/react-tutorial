import React, { useState } from 'react';

const Counter = ({ name, countervalue }) => {
  const [counter, setCounter] = useState(0);
  const [inputvalue, setInputvalue] = useState(countervalue || 1);

  const incrementCounter = (e) => {
    // setCounter(counter + 1); // Normal Syntax
    setCounter((prevValue) => {
      // callback syntax
      return prevValue + inputvalue;
    });
  };
  const decrementCounter = (e) => {
    setCounter(counter - inputvalue);
  };
  const changeInputvalue = (e) => {
    console.log(e.target);
    setInputvalue(Number(e.target.value));
  };

  return (
    <div>
      <h1> Counter Value : {counter}</h1>
      <input type="number" value={inputvalue} onChange={changeInputvalue} />
      <button onClick={incrementCounter}>Increment Counter</button>
      <button onClick={decrementCounter}>Decrement Counter</button>
    </div>
  );
};

export default Counter;
