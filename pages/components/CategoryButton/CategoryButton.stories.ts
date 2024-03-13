import type { Meta, StoryObj } from '@storybook/react';

import CategoryButton from './CategoryButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Profile/CategoryButton',
  component: CategoryButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    text: "Nom de la category",
    description: "description",
    altColor: false
  }
};

export const AltColor: Story = {
  args: {
    text: "Nom de la category",
    description: "description",
    altColor: true
  }
};