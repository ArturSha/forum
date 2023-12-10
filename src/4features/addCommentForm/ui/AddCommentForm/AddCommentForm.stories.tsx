import type { Meta, StoryObj } from '@storybook/react';
import AddCommentForm from './AddCommentForm';
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator';
import { action } from '@storybook/addon-actions';

const meta = {
  title: '4features/AddCommentForm',
  component: AddCommentForm,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    onSendComment: action('onSendComment'),
  },
  decorators: [StoreDecorator({})],
};
