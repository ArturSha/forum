import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';
import { StoreDecorator } from '6shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: '4features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { username: 'admin', password: '123' },
    }),
  ],
};
export const WithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { username: 'admin', password: '123', error: 'ERROR' },
    }),
  ],
};
export const Loading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { isLoading: true },
    }),
  ],
};
