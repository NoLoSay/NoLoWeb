import type { Meta, StoryObj } from '@storybook/react';

import ArtCard from './ArtCard';
import withInfos from "../../../stories/assets/testArtCard.json"
import noVideo from "../../../stories/assets/noVideo.json"
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Art Page/ArtCard',
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