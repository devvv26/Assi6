import React, { useState, useEffect } from 'react';

const App = () => {
  // Set the initial counter value to 0 using useState
  const [counter, setCounter] = useState(0);

  // Update the document title whenever the counter value changes
  useEffect(() => {
    document.title = `Count: ${counter}`;
  }, [counter]); // The useEffect hook will run every time the counter changes

  // Functions to handle increment and decrement
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;
