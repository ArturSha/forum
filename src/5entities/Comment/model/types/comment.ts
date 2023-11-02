import { type User } from '5entities/User';

export interface Comment {
  id: string;
  user: User;
  text: string;
}
