import React, { useState, useEffect } from 'react';

function App() {
  // State for counter
  const [counter, setCounter] = useState(0);

  // useEffect to update document title
  useEffect(() => {
    document.title = `Count: ${counter}`;
  }, [counter]);

  // Increment and Decrement functions
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div className="App">
      <h1>React Counter</h1>
      <p>Current count: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
