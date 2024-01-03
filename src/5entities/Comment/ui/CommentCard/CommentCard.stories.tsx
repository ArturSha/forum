import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { FeaturesFlagsDecorator } from '@/6shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

const meta = {
  title: '5entities/CommentCard',
  component: CommentCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalRedesigned: Story = {
  args: {
    comment: {
      id: '1',
      text: 'hello world!',
      user: { id: '1', username: 'Vasya' },
    },
  },
  decorators: [FeaturesFlagsDecorator({ isAppRedesigned: true })],
};

export const Normal: Story = {
  args: {
    comment: {
      id: '1',
      text: 'hello world!',
      user: { id: '1', username: 'Vasya' },
    },
  },
};
