import type { Meta, StoryObj } from '@storybook/react';

import ArtCard from '../../pages/components/ArtCard/ArtCard';
import withInfos from "./assets/testArtCard.json"
import noVideo from "./assets/noVideo.json"
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Component/ArtCard',
  component: ArtCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithVideo: Story = {
  args: {
    infos: withInfos
  }
};

export const WithoutVideo: Story = {
  args: {
    infos: noVideo
  }
};