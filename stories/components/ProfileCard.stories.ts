import type { Meta, StoryObj } from '@storybook/react';

import ProfileCard from '../../pages/components/ProfileCard/ProfileCard';
import InfosJSON from "./assets/testProfile.json"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Component/ProfileCard',
  component: ProfileCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    infos: InfosJSON
  }
};
