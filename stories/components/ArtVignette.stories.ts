import type { Meta, StoryObj } from '@storybook/react';

import ArtVignette from '../../pages/components/ArtVignette/ArtVignette';

const meta = {
  title: 'Page Location/ArtVignette',
  component: ArtVignette,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: "Chateau des Duc de Nantes",
    description: "Un super château tres beau en pierre du 16eme siecle",
    img: "/images/castle/chateau-large.png",
  }
};