import { type LoginSchema } from '4features/AuthByUsername';
import { type CounterSchema } from '5entities/Counter';
import { type ProfileSchema } from '5entities/Profile';
import { type UserSchema } from '5entities/User';
import {
  type ReducersMapObject,
  type EnhancedStore,
  type AnyAction,
  type Reducer,
  type CombinedState,
} from '@reduxjs/toolkit';
import { type AxiosInstance } from 'axios';
import { type NavigateOptions, type To } from 'react-router-dom';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Асинхронные редюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
