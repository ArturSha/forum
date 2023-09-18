import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '1app/providers/ThemeProvider';
import '1app/styles/index.scss'; // не работает

const meta = {
  title: '6shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
};

export const Outlined: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
};
export const OutlinedDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
