import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from '5entities/Counter';
import { userReducer } from '5entities/User';
import { $api } from '6shared/api/api';
import { type CombinedState, type Reducer } from 'redux';
import { uiReducer } from '4features/UI';
import { type StateSchema, type ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { rtkApi } from '6shared/api/rtkApi';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    ui: uiReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(rtkApi.middleware),
  });

  // @ts-expect-error temporary
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
