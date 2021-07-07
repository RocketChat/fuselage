import type { Story, Meta } from '@storybook/react';

import OptionCard from '.';
// import BackgroundLayer from '../../../../dist/cjs/common/BackgroundLayer';

export default {
  title: 'forms/RegisterServerForm/OptionCard',
  component: OptionCard,
  parameters: {
    layout: 'fullscreen',
  },
  // decorators: [
  //   (Story) => (
  //     <BackgroundLayer>
  //       <Story />
  //     </BackgroundLayer>
  //   ),
  // ],
} as Meta;

const onClick = () => undefined;

export const _OptionCard: Story = () => (
  <OptionCard onClick={onClick}>
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
_OptionCard.storyName = 'OptionCard';

export const _OptionCardSelected: Story = () => (
  <OptionCard selected onClick={onClick}>
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
_OptionCardSelected.storyName = 'OptionCard Selected';
