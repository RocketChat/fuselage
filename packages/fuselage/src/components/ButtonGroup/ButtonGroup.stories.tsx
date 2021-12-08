import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button, ButtonGroup } from '../..';

export default {
  title: 'Buttons/ButtonGroup_new',
  component: ButtonGroup,
} as ComponentMeta<typeof Button>;

export const Default = () => (
  <ButtonGroup>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>
);

export const Wrap = () => (
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

export const Strech = () => (
  <ButtonGroup stretch>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>
);

export const Vertical = () => (
  <ButtonGroup vertical>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>
);

export const WithStretch = () => (
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

export const AlignedAtStart = GroupAlignment.bind({});
AlignedAtStart.args = {
  align: 'start',
};

export const AlignedAtCenter = GroupAlignment.bind({});
AlignedAtCenter.args = {
  align: 'center',
};

export const AlignedAtEnd = GroupAlignment.bind({});
AlignedAtEnd.args = {
  align: 'end',
};
