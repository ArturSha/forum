import { type Currency } from '@/5entities/Currency/model/types/currency';
import { type Country } from '@/5entities/Country/model/types/country';

export interface Profile {
  id?: string;
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}
