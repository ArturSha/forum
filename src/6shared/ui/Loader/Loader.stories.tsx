import type { Meta, StoryObj } from '@storybook/react';
import '1app/styles/index.scss'; // не работает
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '1app/providers/ThemeProvider';
import Loader from './Loader';
const meta = {
  title: '6shared/Loader',
  component: Loader,

  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'text' },
};

export const Secondary: Story = {
  args: { children: 'text' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
