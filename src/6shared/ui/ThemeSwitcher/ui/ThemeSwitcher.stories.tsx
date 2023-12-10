import type { Meta, StoryObj } from '@storybook/react';
import '@/1app/styles/index.scss'; // не работает
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Theme } from '@/6shared/const/theme';
const meta = {
  title: '6shared/ThemeSwitcher',
  component: ThemeSwitcher,

  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
