import React, { useState, useEffect } from 'react';

function App() {
  // Step 1: Initialize the counter state
  const [counter, setCounter] = useState(0);

  // Step 2: Use the useEffect hook to update the document's title
  useEffect(() => {
    document.title = `Count: ${counter}`; // Update the title based on counter value
  }, [counter]); // Dependency array ensures title updates when counter changes

  // Step 3: Handle increment and decrement logic
  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <h1>React Counter</h1>
      <p>Current count: {counter}</p>
      {/* Step 4: Buttons to change counter value */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
