import type { Meta, StoryObj } from '@storybook/react';
import AppLink, { AppLinkTheme } from './AppLink';
import '1app/styles/index.scss'; // не работает
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '1app/providers/ThemeProvider';

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
