import { action } from '@storybook/addon-actions';
import type { StoryFn, Meta } from '@storybook/react';

import CodeSnippet from './CodeSnippet';

export default {
  title: 'Data Display/CodeSnippet',
  component: CodeSnippet,
} satisfies Meta<typeof CodeSnippet>;

const Template: StoryFn<typeof CodeSnippet> = (args) => (
  <CodeSnippet {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'curl -L https://go.rocket.chat/i/docker-compose.yml -O',
};

export const CopyButton = Template.bind({});
CopyButton.args = {
  children: 'curl -L https://go.rocket.chat/i/docker-compose.yml -O',
  onClick: action('click'),
};

export const CustomButtonName = Template.bind({});
CustomButtonName.args = {
  children: 'curl -L https://go.rocket.chat/i/docker-compose.yml -O',
  onClick: action('click'),
  buttonText: 'Custom name',
};

export const LoadingCode = Template.bind({});
LoadingCode.args = {
  children: '',
  onClick: action('click'),
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  children: 'curl -L https://go.rocket.chat/i/docker-compose.yml -O',
  onClick: action('click'),
  buttonText: 'Disabled Button',
  buttonDisabled: true,
};
