import { StoreProvider, type StateSchema } from '1app/providers/StoreProvider';
import { loginReducer } from '4features/AuthByUsername/model/slice/loginSlice';
import { articleDetailsReducer } from '5entities/Article/model/slice/articleDetailsSlice';
import { profileReducer } from '5entities/Profile';
import { type ReducersList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
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
