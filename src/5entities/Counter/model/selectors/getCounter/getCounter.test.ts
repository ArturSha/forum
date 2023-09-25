import { type DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { type StateSchema } from '1app/providers/StoreProvider';

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
