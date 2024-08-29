import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';

import { Bubble } from './Bubble';

export default {
  title: 'Data Display/Bubble',
  component: Bubble,
} satisfies Meta<typeof Bubble>;

const Template: StoryFn<typeof Bubble> = (args) => <Bubble {...args} />;

export const IconAndLabel = Template.bind({});
IconAndLabel.args = {
  children: 'New messages',
  onClick: action('click'),
  icon: 'arrow-down',
};

export const Dismissable = Template.bind({});
Dismissable.args = {
  children: 'New messages',
  icon: 'arrow-down',
  onClick: action('click'),
  onDismiss: action('dismiss'),
};

export const LabelOnly = Template.bind({});
LabelOnly.args = {
  children: 'See new messages',
  onClick: action('click'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'See new messages',
  secondary: true,
  onClick: action('click'),
};

export const SecondaryDismissable = Template.bind({});
SecondaryDismissable.args = {
  children: 'New messages',
  secondary: true,
  onDismiss: action('dismiss'),
};
SecondaryDismissable.parameters = {
  docs: {
    description: {
      story: 'Example with only a dismiss action - the label is not clickable.',
    },
  },
};

export const WithoutAction = Template.bind({});
WithoutAction.args = {
  children: '22 Nov 2023',
  secondary: true,
};

export const WithLargeText = Template.bind({});
WithLargeText.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum libero viverra nulla varius, a consequat ante malesuada. Fusce bibendum, lacus sed fermentum sagittis, urna erat viverra lacus, eu pellentesque neque est nec nisl. Morbi in lobortis dui, ac consectetur mi.',
  secondary: true,
  onClick: action('click'),
};

export const Small = Template.bind({});
Small.args = {
  children: '22 Nov 2023',
  secondary: true,
  small: true,
};
