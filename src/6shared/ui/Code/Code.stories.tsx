import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

const meta = {
  title: '6shared/Code',
  component: Code,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    text: '<div> some text </div> ,\n' + '<p> another text </p>',
  },
};
