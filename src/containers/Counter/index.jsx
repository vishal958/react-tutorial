import React, { useState } from 'react';

const FirstComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    // setCounter(counter + 1); // Normal Syntax
    setCounter((prevValue) => {
      // callback syntax
      return prevValue + 1;
    });
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1> Counter Value : {counter}</h1>
      <button onClick={incrementCounter}>Incrementaqswder Counter</button>
      <button onClick={decrementCounter}>Decrement Counter</button>
    </div>
  );
};

export default FirstComponent;
