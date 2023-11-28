import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '1app/providers/ThemeProvider';

const meta = {
  title: '6shared/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title lorem',
    text: 'Description',
  },
};
export const OnlyTitle: Story = {
  args: {
    title: 'Title lorem',
  },
};
export const OnlyText: Story = {
  args: {
    text: 'Description',
  },
};
export const PrimaryDark: Story = {
  args: {
    title: 'Title lorem',
    text: 'Description',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const Error: Story = {
  args: {
    title: 'Title lorem',
    text: 'Description',
    theme: TextTheme.ERROR,
  },
};
export const OnlyTitleDark: Story = {
  args: {
    title: 'Title lorem',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const OnlyTextDark: Story = {
  args: {
    text: 'Description',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const SizeL: Story = {
  args: {
    title: 'Title lorem',
    text: 'Description',
    size: TextSize.L,
  },
};
export const SizeM: Story = {
  args: {
    title: 'Title lorem',
    text: 'Description',
    size: TextSize.M,
  },
};
export const SizeS: Story = {
  args: {
    title: 'Title lorem',
    text: 'Description',
    size: TextSize.S,
  },
};
