import { type StateSchema } from '1app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Country } from '5entities/Country';
import { Currency } from '5entities/Currency';

describe('getProfileData.test', () => {
  test('should work with filled state', () => {
    const data = {
      username: 'admin',
      age: 22,
      country: Country.Belarus,
      lastname: 'test',
      first: 'test',
      city: 'Minsk',
      currency: Currency.RUB,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
