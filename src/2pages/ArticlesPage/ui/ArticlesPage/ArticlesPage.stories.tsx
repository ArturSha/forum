import type { Meta, StoryObj } from '@storybook/react';
import ArticlesPage from './ArticlesPage';

const meta = {
  title: '2pages/ArticlesPage',
  component: ArticlesPage,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TestTest: Story = {};
