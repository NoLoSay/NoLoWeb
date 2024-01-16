import type { Meta, StoryObj } from '@storybook/react';

import CategoryButton from '../../pages/components/CategoryButton/CategoryButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Component/CategoryButton',
  component: CategoryButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    text: "Nom de la category"
  }
};