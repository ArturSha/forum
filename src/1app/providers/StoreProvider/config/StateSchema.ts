import { type ArticlesPageSchema } from '2pages/ArticlesPage';
import { type ArticleDetailsCommentsSchema } from '2pages/ArticleDetailsPage';
import { type LoginSchema } from '4features/AuthByUsername';
import { type AddCommentFormSchema } from '4features/addCommentForm';
import { type ArticleDetailsSchema } from '5entities/Article';
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
import { type UISchema } from '4features/UI';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  ui: UISchema;

  // Асинхронные редюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
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
