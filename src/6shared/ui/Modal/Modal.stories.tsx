import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '1app/providers/ThemeProvider';

const meta = {
  title: '6shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'lorem',
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'lorem',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
