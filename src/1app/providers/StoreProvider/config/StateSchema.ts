import { type CounterSchema } from '5entities/Counter';
import { type UserSchema } from '5entities/User';
import { type LoginSchema } from '4features/AuthByUsername';
import {
  type AnyAction,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject,
} from '@reduxjs/toolkit';
import { type CombinedState } from 'redux';
import { type AxiosInstance } from 'axios';
import { type ArticleDetailsSchema } from '5entities/Article';
import { type ArticleDetailsPageSchema } from '2pages/ArticleDetailsPage';
import { type AddCommentFormSchema } from '4features/addCommentForm';
import { type ArticlesPageSchema } from '2pages/ArticlesPage';
import { type UISchema } from '4features/UI';
import { type rtkApi } from '6shared/api/rtkApi';
import { type ProfileSchema } from '4features/editableProfileCard';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  ui: UISchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Асинхронные редюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true - вмонтирован, false - демонтирован
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
