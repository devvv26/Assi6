import React, { useState, useEffect } from 'react';

const App = () => {
  // State to manage the counter value, initialized to 0
  const [counter, setCounter] = useState(0);

  // Update the document title whenever the counter changes
  useEffect(() => {
    document.title = `Count: ${counter}`;
  }, [counter]); // This runs whenever the 'counter' value changes

  // Functions to increment and decrement the counter
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
