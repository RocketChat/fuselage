import {
  Title,
  Subtitle,
  Description,
  Primary as PrimaryStory,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button, ButtonGroup } from '../..';

export default {
  title: 'Inputs/ButtonGroup',
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

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>
);

const TemplateMultiple: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
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

export const Default: ComponentStory<typeof ButtonGroup> = Template.bind({});

export const Medium: ComponentStory<typeof ButtonGroup> = Template.bind({});
Medium.args = {
  medium: true,
};

export const Small: ComponentStory<typeof ButtonGroup> = Template.bind({});
Small.args = {
  small: true,
};

export const Wrap: ComponentStory<typeof ButtonGroup> = TemplateMultiple.bind(
  {}
);
Wrap.args = {
  wrap: true,
};

export const Stretch: ComponentStory<typeof ButtonGroup> = Template.bind({});
Stretch.args = {
  stretch: true,
};

export const Vertical: ComponentStory<typeof ButtonGroup> = Template.bind({});
Vertical.args = {
  vertical: true,
};

export const VerticalStretch: ComponentStory<typeof ButtonGroup> =
  Template.bind({});
VerticalStretch.args = {
  vertical: true,
  stretch: true,
};

export const AlignedAtStart: ComponentStory<typeof ButtonGroup> = Template.bind(
  {}
);
AlignedAtStart.args = {
  align: 'start',
};

export const AlignedAtCenter: ComponentStory<typeof ButtonGroup> =
  Template.bind({});
AlignedAtCenter.args = {
  align: 'center',
};

export const AlignedAtEnd: ComponentStory<typeof ButtonGroup> = Template.bind(
  {}
);
AlignedAtEnd.args = {
  align: 'end',
};
