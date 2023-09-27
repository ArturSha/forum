import { type CounterSchema } from '5entities/Counter';
import { type UserSchema } from '5entities/User';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}
