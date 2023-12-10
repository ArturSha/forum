import { type ThunkConfig } from '@/1app/providers/StoreProvider';
import { userActions, type User } from '@/5entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/6shared/const/localstorage';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.post<User>('/login', authData);
    if (!response.data) {
      throw new Error();
    }
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));
    // if (extra.navigate) {
    //   extra.navigate('/about');
    // }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});
