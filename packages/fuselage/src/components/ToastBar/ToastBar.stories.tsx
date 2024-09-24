import { action } from '@storybook/addon-actions';
import type { StoryFn, Meta } from '@storybook/react';

import { ToastBar } from './ToastBar';

export default {
  title: 'Feedback/ToastBar',
  component: ToastBar,
} satisfies Meta<typeof ToastBar>;

const Template: StoryFn<typeof ToastBar> = (args) => (
  <ToastBar
    children='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco'
    {...args}
  />
);

export const Default = Template.bind({});

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
};

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  onClose: action('clicked'),
};

export const TinyText = Template.bind({});
TinyText.args = {
  children: 'Lorem ipsum dolor sit amet',
};
