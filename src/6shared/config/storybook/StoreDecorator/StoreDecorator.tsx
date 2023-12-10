import { StoreProvider, type StateSchema } from '@/1app/providers/StoreProvider';
import { articleDetailsPageReducer } from '@/2pages/ArticleDetailsPage/model/slices';
import { loginReducer } from '@/4features/AuthByUsername/model/slice/loginSlice';
import { addCommentFormReducer } from '@/4features/addCommentForm/model/slices/addCommentFormSlice';
import { profileReducer } from '@/4features/editableProfileCard/model/slice/profileSlice';
import { articleDetailsReducer } from '@/5entities/Article/model/slice/articleDetailsSlice';
import { type ReducersList } from '@/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
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
