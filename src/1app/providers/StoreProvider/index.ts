import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, type AppDispatch } from './config/store';
import type {
  StateSchema,
  ReduxStoreWithManager,
  ThunkConfig,
} from './config/StateSchema';

export { StoreProvider, createReduxStore };

export {
  type ReduxStoreWithManager,
  type StateSchema,
  type AppDispatch,
  type ThunkConfig,
};
