// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';

// import { CommentList } from './CommentList';

// export default {
//     title: 'shared/CommentList',
//     component: CommentList,
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
// } as ComponentMeta<typeof CommentList>;

// const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

// export const Normal = Template.bind({});
// Normal.args = {};
import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';

const meta = {
  title: '5entities/CommentList',
  component: CommentList,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
