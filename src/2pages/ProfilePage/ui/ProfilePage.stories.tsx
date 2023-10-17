import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '1app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '6shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '5entities/Country';
import { Currency } from '5entities/Currency';
import avatar from '6shared/assets/test/storybook.jpg';

const meta = {
  title: '2pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          username: 'admin',
          age: 22,
          country: Country.Belarus,
          lastname: 'test',
          first: 'test',
          city: 'Minsk',
          currency: Currency.RUB,
          avatar,
        },
      },
    }),
  ],
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: {
          username: 'admin',
          age: 22,
          country: Country.Belarus,
          lastname: 'test',
          first: 'test',
          city: 'Minsk',
          currency: Currency.RUB,
          avatar,
        },
      },
    }),
  ],
};
