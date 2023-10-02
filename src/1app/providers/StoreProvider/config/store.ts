import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { type StateSchema } from './StateSchema';
import { counterReducer } from '5entities/Counter';
import { userReducer } from '5entities/User';
import { loginReducer } from '4features/AuthByUsername';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };
  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
