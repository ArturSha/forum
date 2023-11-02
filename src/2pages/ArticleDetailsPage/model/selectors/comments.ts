import { type StateSchema } from '1app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) =>
  state.articleDetailsComments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) =>
  state.articleDetailsComments?.error;
