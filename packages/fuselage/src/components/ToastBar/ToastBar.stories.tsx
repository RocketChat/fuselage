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

import { ToastBar } from '..';

export default {
  title: 'Feedback/ToastBar',
  component: ToastBar,
  parameters: {
    docs: {
      description: {
        component: 'Shows alerts in a toast component.',
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
} as ComponentMeta<typeof ToastBar>;

const Template: ComponentStory<typeof ToastBar> = (args) => (
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

export const Small = Template.bind({});
Small.args = {
  children: 'Lorem ipsum dolor sit amet',
};

export const SuccessWithCloseButton = Template.bind({});
SuccessWithCloseButton.args = {
  children: 'Lorem ipsum dolor sit amet',
  variant: 'success',
  onClose: () => {},
};

export const ErrorWithCloseButton = Template.bind({});
ErrorWithCloseButton.args = {
  children: 'Lorem ipsum dolor sit amet',
  variant: 'error',
  onClose: () => {},
};

export const DefaultWithCloseButton = Template.bind({});
DefaultWithCloseButton.args = {
  children: 'Lorem ipsum dolor sit amet',
  onClose: () => {},
};
