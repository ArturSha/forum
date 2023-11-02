import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Text } from '../Text';

const meta = {
  title: '6shared/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: <Text title='test' text='text text' />,
  },
};
