import { Button } from '@/6shared/ui/Button/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../selectors/getCounterValue/getCounterValue';

/* eslint-disable i18next/no-literal-string */
export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <Button onClick={increment} data-testid='increment-btn'>
        increment
      </Button>
      <Button onClick={decrement} data-testid='decrement-btn'>
        decrement
      </Button>
    </div>
  );
};
