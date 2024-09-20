import type { Meta, StoryObj } from '@storybook/react'

import SettingsProfileForm from './SettingsProfileForm'

const meta = {
  title: 'Account Settings/SettingsProfileForm',
  component: SettingsProfileForm,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
}
