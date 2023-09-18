import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '1app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';

const meta = {
  title: '2pages/NotFoundPage',
  component: NotFoundPage,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
