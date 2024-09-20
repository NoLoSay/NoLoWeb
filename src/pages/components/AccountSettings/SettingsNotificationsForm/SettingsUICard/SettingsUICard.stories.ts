import type { Meta, StoryObj } from '@storybook/react'

import SettingsUICard from './SettingsUICard'

const meta = {
  title: 'Account Settings/SettingsUICard',
  component: SettingsUICard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Profile',
    description: 'Edit your profile information',
  },
}
