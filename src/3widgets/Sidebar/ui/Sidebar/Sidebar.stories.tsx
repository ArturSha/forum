import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '1app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';
import '1app/styles/index.scss'; // не работает
import { StoreDecorator } from '6shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: '6widget/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: {
        authData: {},
      },
    }),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: {
        authData: {},
      },
    }),
  ],
};

export const NoAuth: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: {},
    }),
  ],
};
