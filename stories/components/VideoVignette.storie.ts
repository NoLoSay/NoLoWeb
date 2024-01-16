import type { Meta, StoryObj } from '@storybook/react';

import VideoVignette from '../../pages/components/VideoVignette/VideoVignette';

const meta = {
  title: 'Component/VideoVignette',
  component: VideoVignette,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithCertifiedVideos: Story = {
  args: {
    title: "Chateau des Duc de Nantes",
    description: " un super château tres beau en pierre du 16eme siecle",
    img: "/images/castle/chateau-large.png",
    certified: 22
  }
};

export const WithoutCertifiedVideos: Story = {
  args: {
    title: "Chateau des Duc de Nantes",
    description: " un super château tres beau en pierre du 16eme siecle",
    img: "/images/castle/chateau-large.png",
  }
};