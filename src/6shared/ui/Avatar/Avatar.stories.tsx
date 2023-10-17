import type { Meta, StoryObj } from '@storybook/react';
import '1app/styles/index.scss'; // не работает
import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg';

const meta = {
  title: '6shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { size: 150, src: AvatarImg },
};
export const Small: Story = {
  args: { size: 50, src: AvatarImg },
};
