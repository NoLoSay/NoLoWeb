import type { Meta, StoryObj } from '@storybook/react';

import TitleCard from '../../pages/components/TitleCard/TitleCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/TitleCard',
  component: TitleCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: "test title",
    imgPath: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/fc/a9/b2/le-jardin-d-anne-de-bretagne.jpg?w=1200&h=-1&s=1"
  },
};