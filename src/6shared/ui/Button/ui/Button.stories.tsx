import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
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
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const Outlined: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
};
export const OutlinedSizeL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
};
export const OutlinedSizeXl: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
};
export const OutlinedDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const BackgroundTheme: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
  },
};
export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};
export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
};
export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};
export const SquareSizeXl: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};
export const Disabled: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
};
