import { type ThunkConfig } from '1app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { type Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
  Profile,
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  ThunkConfig<string>
>('profile/fetchProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.get<Profile>('/profile');
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});
