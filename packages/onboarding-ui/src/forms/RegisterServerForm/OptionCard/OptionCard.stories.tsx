import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import OptionCard from '.';

type Args = ComponentProps<typeof OptionCard>;

export default {
  title: 'forms/RegisterServerForm/OptionCard',
  component: OptionCard,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<Args>;

export const Unselected: Story<Args> = (args) => (
  <OptionCard {...args}>
    <OptionCard.Block>
      <OptionCard.Title>Title</OptionCard.Title>
    </OptionCard.Block>
    <OptionCard.Block>
      <OptionCard.Description>Description</OptionCard.Description>
    </OptionCard.Block>
    <OptionCard.Block>
      <OptionCard.Subtitle>Subtitle</OptionCard.Subtitle>
      <OptionCard.List>
        <OptionCard.ListItem icon='check'>Item 1</OptionCard.ListItem>
        <OptionCard.ListItem icon='check'>Item 1</OptionCard.ListItem>
        <OptionCard.ListItem icon='check'>Item 1</OptionCard.ListItem>
      </OptionCard.List>
    </OptionCard.Block>
  </OptionCard>
);
Unselected.args = {
  selected: false,
};

export const Selected: Story<Args> = (args) => (
  <OptionCard {...args}>
    <OptionCard.Block>
      <OptionCard.Title>Title</OptionCard.Title>
    </OptionCard.Block>
    <OptionCard.Block>
      <OptionCard.Description>Description</OptionCard.Description>
    </OptionCard.Block>
    <OptionCard.Block>
      <OptionCard.Subtitle>Subtitle</OptionCard.Subtitle>
      <OptionCard.List>
        <OptionCard.ListItem icon='check'>Item 1</OptionCard.ListItem>
        <OptionCard.ListItem icon='check'>Item 1</OptionCard.ListItem>
        <OptionCard.ListItem icon='check'>Item 1</OptionCard.ListItem>
      </OptionCard.List>
    </OptionCard.Block>
  </OptionCard>
);
Selected.args = {
  selected: true,
};
