import type { Meta, StoryObj } from '@storybook/react';

import SideMenuButton from './SideMenuButton';

const meta = {
  title: 'Account Settings/SideMenuButton',
  component: SideMenuButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args:{
    title: "Nom de l'onglet",
    path: "",
  }
};