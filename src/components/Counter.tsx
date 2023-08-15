import { useState } from 'react';
import classes from './Counter.module.scss';

const Increment = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
};
export default Increment;
