import type { Meta, StoryObj } from '@storybook/react';

import NavBarLink from './NavBarLink';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Layout/NavBarLink',
  component: NavBarLink,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    as: "/home",
    href: "/screen/home/Home",
    size: "", // Provide a value for 'size'
    colorBase: "", // Provide a value for 'colorBase'
    colorClick: "", // Provide a value for 'colorClick'
    children: "Button Name", // Provide a valid JSX element for 'children'
    className: "", // Provide a value for 'className'
  }
};