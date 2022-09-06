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

import { Callout } from '../..';
import { setStoryDescription } from '../../helpers/setStoryDescription';

export default {
  title: 'Feedback/Callout',
  component: Callout,
  parameters: {
    docs: {
      description: {
        component:
          "The `Callout` is used to get the user's attention explaining something important in the content of the current page.",
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
} as ComponentMeta<typeof Callout>;

const Template: ComponentStory<typeof Callout> = (args) => (
  <Callout {...args}>This is a generic description.</Callout>
);

export const Default = Template.bind({});
Default.args = {
  title: 'This is a generic title',
};

export const WithDescriptionOnly = Template.bind({});

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  title: 'This is a info message',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  title: 'This is a success message',
};
Success.parameters = setStoryDescription(
  'Communicates that an important aspect of the system is working as expected.'
);

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  title: 'This is a warning message',
};
Warning.parameters = setStoryDescription(
  'Communicates that an important aspect of the system needs attention.'
);

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  title: 'This is a danger message',
};
Danger.parameters = setStoryDescription(
  'Communicates that an important aspect of the system is not working as expected and requires urgent action.'
);
