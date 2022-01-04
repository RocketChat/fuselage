import {
  Title,
  Subtitle,
  Description,
  Primary as PrimaryStory,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button, ButtonGroup } from '../..';

export default {
  title: 'Buttons/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component:
          'A container for grouping buttons that semantically share a common action context.',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <PrimaryStory />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title={''} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof ButtonGroup>;

export const Default = () => (
  <ButtonGroup>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>
);

export const Wrap: ComponentStory<typeof ButtonGroup> = () => (
  <ButtonGroup wrap>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
    <Button>Button 4</Button>
    <Button>Button 5</Button>
    <Button>Button 6</Button>
    <Button>Button 7</Button>
    <Button>Button 8</Button>
    <Button>Button 9</Button>
    <Button>Button 10</Button>
    <Button>Button 11</Button>
    <Button>Button 12</Button>
    <Button>Button 13</Button>
    <Button>Button 14</Button>
    <Button>Button 15</Button>
    <Button>Button 16</Button>
    <Button>Button 17</Button>
    <Button>Button 18</Button>
    <Button>Button 19</Button>
    <Button>Button 20</Button>
  </ButtonGroup>
);

export const Strech: ComponentStory<typeof ButtonGroup> = () => (
  <ButtonGroup stretch>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>
);

export const Vertical: ComponentStory<typeof ButtonGroup> = () => (
  <ButtonGroup vertical>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>
);

export const WithStretch: ComponentStory<typeof ButtonGroup> = () => (
  <ButtonGroup vertical stretch>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>
);

const GroupAlignment: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>
);

GroupAlignment.storyName = 'Alignment';

export const AlignedAtStart: ComponentStory<typeof ButtonGroup> =
  GroupAlignment.bind({});
AlignedAtStart.args = {
  align: 'start',
};

export const AlignedAtCenter: ComponentStory<typeof ButtonGroup> =
  GroupAlignment.bind({});
AlignedAtCenter.args = {
  align: 'center',
};

export const AlignedAtEnd: ComponentStory<typeof ButtonGroup> =
  GroupAlignment.bind({});
AlignedAtEnd.args = {
  align: 'end',
};
