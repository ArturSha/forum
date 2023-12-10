import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Country } from '@/5entities/Country';
import { Currency } from '@/5entities/Currency';
import avatar from '@/6shared/assets/test/storybook.jpg';

const meta = {
  title: '5entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
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
};
export const WithError: Story = {
  args: {
    error: 'true',
  },
};
export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
