import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: '6shared/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Укажите значение',
    options: [
      { value: '123', content: 'Первый пункт' },
      { value: '1234', content: 'Второй пункт' },
    ],
  },
};
