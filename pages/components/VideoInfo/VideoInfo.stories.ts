import type { Meta, StoryObj } from '@storybook/react';

import VideoInfo from './VideoInfo';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Art Page/VideoInfo',
  component: VideoInfo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    infos: {
      description:  "une description qui pourrait etre plus longue mais ca fait l'affaire",
      spec: {
        creator: "Date: 28 Juillet 1992",
        location: "Lieu: Drancy",
        date: "28 Juillet 1992",
        style: "Pastel et huile",
        price: "42M $"
      }
    }
  },
};