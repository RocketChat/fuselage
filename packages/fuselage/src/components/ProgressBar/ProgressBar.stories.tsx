import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ProgressBar } from '../..';

export default {
  title: 'Misc/ProgressBar_new',
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
          <ArgsTable />
          <Stories title={''} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Default: ComponentStory<typeof ProgressBar> = Template.bind({});
Default.args = {
  percentage: 30,
};

export const Success: ComponentStory<typeof ProgressBar> = Template.bind({});
Success.args = {
  percentage: 100,
};

export const Error: ComponentStory<typeof ProgressBar> = Template.bind({});
Error.args = {
  percentage: 51,
  error: 'Error Downloading File',
};
