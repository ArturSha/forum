import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '1app/providers/ThemeProvider';
import { Navbar } from './Navbar';
import '1app/styles/index.scss'; // не работает
import { StoreDecorator } from '6shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: '6widget/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
export const AuthNavbar: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: { authData: { id: '1', username: 'admin' } },
    }),
  ],
};
