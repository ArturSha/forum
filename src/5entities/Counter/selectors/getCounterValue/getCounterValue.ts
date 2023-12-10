import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { type CounterSchema } from '@/5entities/Counter/model/types/counterSchema';
export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value
);
