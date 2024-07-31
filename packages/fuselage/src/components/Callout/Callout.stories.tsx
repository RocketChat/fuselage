import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Callout from './Callout';

export default {
  title: 'Feedback/Callout',
  component: Callout,
} satisfies ComponentMeta<typeof Callout>;

const Template: ComponentStory<typeof Callout> = (args) => (
  <Callout {...args}>
    {args.children || 'This is a generic description.'}
  </Callout>
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
Success.parameters = {
  docs: {
    description: {
      story:
        'Communicates that an important aspect of the system is working as expected.',
    },
  },
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  title: 'This is a warning message',
};
Warning.parameters = {
  docs: {
    description: {
      story:
        'Communicates that an important aspect of the system needs attention.',
    },
  },
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  title: 'This is a danger message',
};
Danger.parameters = {
  docs: {
    description: {
      story:
        'Communicates that an important aspect of the system is not working as expected and requires urgent action.',
    },
  },
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  title: 'This is a message with custom icon',
  icon: 'hash',
};
