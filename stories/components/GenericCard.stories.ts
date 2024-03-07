import type { Meta, StoryObj } from '@storybook/react';

import GenericCard from '../../pages/components/GenericCard/GenericCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/GenericCard',
  component: GenericCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithImage: Story = {
  args: {
    title: "Titre de la carte",
    text: "The Issues panel now warns you about the cookies that will be affected by the upcoming deprecation and phaseout of third-party cookies.", 
    imgPath: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2023/07/shutterstock_pricing_plan_demystified_cover.jpg?resize=1250,1120"
  }
};

export const WithoutImage: Story = {
  args: {
    title: "Titre de la carte",
    text: "The Issues panel now warns you about the cookies that will be affected by the upcoming deprecation and phaseout of third-party cookies.", 
  }
};
