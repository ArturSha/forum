import type { Meta, StoryObj } from '@storybook/react';
import '1app/styles/index.scss'; // не работает
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '1app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';
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
