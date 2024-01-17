import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { ProgressBar } from '../..';

export default {
  title: 'Data Display/ProgressBar',
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component:
          'The `ProgressBar` is used to inform the user the progress of an operation.',
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Stories title={''} />
          <ArgsTable />
        </>
      ),
    },
  },
} as Meta<typeof ProgressBar>;

const Template: StoryFn<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Default: StoryFn<typeof ProgressBar> = Template.bind({});
Default.args = {
  percentage: 30,
};

export const Success: StoryFn<typeof ProgressBar> = Template.bind({});
Success.args = {
  percentage: 100,
  variant: 'success',
};

export const Warning: StoryFn<typeof ProgressBar> = Template.bind({});
Warning.args = {
  percentage: 60,
  variant: 'warning',
};

export const Danger: StoryFn<typeof ProgressBar> = Template.bind({});
Danger.args = {
  percentage: 100,
  variant: 'danger',
};

export const Animated: StoryFn<typeof ProgressBar> = Template.bind({});
Animated.args = {
  percentage: 80,
  animated: true,
};

export const Error: StoryFn<typeof ProgressBar> = Template.bind({});
Error.args = {
  percentage: 21,
  error: 'Error Downloading File',
};

export const DefaultLight: StoryFn<typeof ProgressBar> = Template.bind({});
DefaultLight.args = {
  percentage: 70,
  light: true,
};

export const SuccessLight: StoryFn<typeof ProgressBar> = Template.bind({});
SuccessLight.args = {
  percentage: 100,
  variant: 'success',
  light: true,
};

export const WarningLight: StoryFn<typeof ProgressBar> = Template.bind({});
WarningLight.args = {
  percentage: 60,
  variant: 'warning',
  light: true,
};

export const DangerLight: StoryFn<typeof ProgressBar> = Template.bind({});
DangerLight.args = {
  percentage: 100,
  variant: 'danger',
  light: true,
};

export const ErrorLight: StoryFn<typeof ProgressBar> = Template.bind({});
ErrorLight.args = {
  percentage: 20,
  error: 'Error downloading file',
  light: true,
};
