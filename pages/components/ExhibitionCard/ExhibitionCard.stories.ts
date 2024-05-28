import type { Meta, StoryObj } from '@storybook/react';

import ExhibitionCard from './ExhibitionCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Exhibition/ExhibitionCard',
  component: ExhibitionCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    id: 1,
    name: "Expo de Test",
    shortDescription: "Il faut bien une permière a tout",
    longDescription: "On sait bien qu'elle sera rété mais bon on s'accroche quand meme",
    startDate: "2024-01-15T00:00:00.000Z",
    endDate: "2024-01-15T00:00:00.000Z",
    site: {
      id: 1,
      name: "Château d'Angers",
      shortDescription: "Un chateau trop bien",
      longDescription: "Je te jure! Tu as une superbe vue et je dis pas ca car c'est ma ville natale ! Non pas du tout !",
      telNumber: "+33 2 41 86 48 77",
      email: "",
      website: "",
      price: 9.5,
      picture: "",
      type: "MUSEUM",
      tags: [
        "DISABILITY_FRIENDLY",
        "DEAF_FRIENDLY"
      ],
      address: {
        id: 1,
        houseNumber: "2",
        street: " Prom. du Bout du Monde",
        zip: "49100",
        City: {
          id: 1,
          name: "Angers",
          zip: "49000",
          Department: {
            id: 1,
            name: "Maine et Loire",
            Country: {
              id: 1,
              name: "France"
            }
          }
        },
        otherDetails: "",
        longitude: 491,
        latitude: 491
      }
    },
    items: [
      {
        id: 1,
        name: "La tete d'un Epoutanflus",
        description: "Une relique datant de l'age epoustanflesque decouverte par Verstappen en attendant que ses concurents finissent la course...",
        picture: "",
        relatedPerson: {
          id: 1,
          name: "Max Verstappen"
        },
        itemType: ""
      },
      {
        id: 2,
        name: "La tete d'un Epoutanflus",
        description: "Une relique datant de l'age epoustanflesque decouverte par Verstappen en attendant que ses concurents finissent la course...",
        picture: "",
        relatedPerson: {
          id: 1,
          name: "Max Verstappen"
        },
        itemType: ""
      }
    ]
  }
};