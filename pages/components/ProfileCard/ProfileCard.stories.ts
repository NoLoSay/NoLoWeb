import type { Meta, StoryObj } from '@storybook/react';

import ProfileCard from './ProfileCard';
import InfosJSON from "../../../stories/assets/testProfile.json"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Profile/ProfileCard',
  component: ProfileCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: InfosJSON
};
