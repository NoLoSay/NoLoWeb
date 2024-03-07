import type { Meta, StoryObj } from '@storybook/react';

import AnimatedNavbar from '../../pages/components/AnimatedNavbar/AnimatedNavbar';

const meta = {
  title: 'Common/AnimatedNavbar',
  component: AnimatedNavbar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Homepage: Story = {
  args: {
    InApp: false
  }
};

export const InApp: Story = {
  args: {
    InApp: true
  }
};