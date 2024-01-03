import type { Meta, StoryObj } from '@storybook/react';
import { AppLinkTheme, AppLink } from './AppLink';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/6shared/const/theme';

const meta = {
  title: '6shared/AppLink',
  component: AppLink,
  args: { to: '/' },
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: ' text', theme: AppLinkTheme.PRIMARY },
};

export const Secondary: Story = {
  args: { children: ' text', theme: AppLinkTheme.SECONDARY },
};

export const DarkPrimary: Story = {
  args: { children: ' text', theme: AppLinkTheme.PRIMARY },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkSecondary: Story = {
  args: { children: ' text', theme: AppLinkTheme.SECONDARY },
  decorators: [ThemeDecorator(Theme.DARK)],
};
