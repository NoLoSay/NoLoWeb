import type { Meta, StoryObj } from '@storybook/react';

import APITester from './APITester';

const meta = {
  title: 'Test/APITester',
  component: APITester,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { apiRoute: 'https://localhost:3001/auth/google' },
};
