import { StoreProvider, type StateSchema } from '1app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => (StoryComponent: any) => {
    return (
      <StoreProvider initialState={state}>
        <StoryComponent />
      </StoreProvider>
    );
  };
