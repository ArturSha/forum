import { StoreProvider, type StateSchema } from '1app/providers/StoreProvider';
import { loginReducer } from '4features/AuthByUsername/model/slice/loginSlice';
import { type ReducersMapObject, type DeepPartial } from '@reduxjs/toolkit';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
};

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  ) =>
  (StoryComponent: any) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
  };
