import {
  type ReducersMapObject,
  configureStore,
  type CombinedState,
  type Reducer,
} from '@reduxjs/toolkit';
import { type StateSchema } from './StateSchema';
import { counterReducer } from '5entities/Counter';
import { userReducer } from '5entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from '6shared/api/api';
import { uiReducer } from '4features/UI';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    ui: uiReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
          },
        },
      }),
  });
  // @ts-expect-error temp.
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
