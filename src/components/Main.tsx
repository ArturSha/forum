import { useState } from 'react';

const Decrement = () => {
  const [count, setCount] = useState(0);
  const handleDecrement = () => {
    setCount((count) => count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Decrement;
