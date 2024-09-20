import type { Meta, StoryObj } from '@storybook/react'

import AccountSelector from './AccountSelector'

const meta = {
  title: 'Profile/AccountSelector',
  component: AccountSelector,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const accountsList: string[] = ['mail1@gmail.com', 'mail2@hotmail.fr', 'mail3@Aol.us']

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    accountsList: accountsList,
  },
}
