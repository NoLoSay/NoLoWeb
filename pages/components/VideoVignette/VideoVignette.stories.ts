import type { Meta, StoryObj } from '@storybook/react';

import VideoVignette from './VideoVignette';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Art Page/VideoVignette',
  component: VideoVignette,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithCertified: Story = {
  args: {
    title: "Portrait Henry IV",
    description: "Un portrait du fameux roi de France datant du 16eme siecle",
    img: "/images/castle/chateau-large.png",
    certified: 22
  },
};

export const WithoutCertified: Story = {
  args: {
    title: "Portrait Henry IV",
    description: "Un portrait du fameux roi de France datant du 16eme siecle",
    img: "/images/castle/chateau-large.png",
  },
};