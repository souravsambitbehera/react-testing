import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const hanldeDecrementButton = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <p>The count value is.. {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={hanldeDecrementButton}>Decrement</button>
    </div>
  );
};

export default Counter;
