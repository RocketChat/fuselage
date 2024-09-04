import type { StoryFn, Meta } from '@storybook/react';

import Button from '../Button';
import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Inputs/ButtonGroup',
  component: ButtonGroup,
} satisfies Meta<typeof ButtonGroup>;

const Template: StoryFn<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>
);

const TemplateMultiple: StoryFn<typeof ButtonGroup> = (args) => (
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

export const Default: StoryFn<typeof ButtonGroup> = Template.bind({});

export const Large: StoryFn<typeof ButtonGroup> = Template.bind({});
Large.args = {
  large: true,
};

export const Small: StoryFn<typeof ButtonGroup> = Template.bind({});
Small.args = {
  small: true,
};

export const Wrap: StoryFn<typeof ButtonGroup> = TemplateMultiple.bind({});
Wrap.args = {
  wrap: true,
};

export const Stretch: StoryFn<typeof ButtonGroup> = Template.bind({});
Stretch.args = {
  stretch: true,
};

export const Vertical: StoryFn<typeof ButtonGroup> = Template.bind({});
Vertical.args = {
  vertical: true,
};

export const VerticalLarge: StoryFn<typeof ButtonGroup> = Template.bind({});
VerticalLarge.args = {
  vertical: true,
  large: true,
};

export const VerticalSmall: StoryFn<typeof ButtonGroup> = Template.bind({});
VerticalSmall.args = {
  vertical: true,
  small: true,
};

export const VerticalStretch: StoryFn<typeof ButtonGroup> = Template.bind({});
VerticalStretch.args = {
  vertical: true,
  stretch: true,
};

export const AlignedAtStart: StoryFn<typeof ButtonGroup> = Template.bind({});
AlignedAtStart.args = {
  align: 'start',
};

export const AlignedAtCenter: StoryFn<typeof ButtonGroup> = Template.bind({});
AlignedAtCenter.args = {
  align: 'center',
};

export const AlignedAtEnd: StoryFn<typeof ButtonGroup> = Template.bind({});
AlignedAtEnd.args = {
  align: 'end',
};
