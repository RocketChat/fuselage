import { action } from '@storybook/addon-actions';
import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { CodeSnippet } from '../..';

export default {
  title: 'Data Display/CodeSnippet',
  component: CodeSnippet,
  parameters: {
    docs: {
      description: {
        component: `The \`CodeSnippet\` is used to show code or commands and make easier to copy them. \n\n The default button text is \`Copy\` but you can use the \`buttonText\` prop to handle translations in your project. \n\n Please check the \`useClipBoard\` hook in \`fuselage-hooks\` package, to handle the copy behaviour.
				`,
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <ArgsTable />
          <Stories title={'Input component state'} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof CodeSnippet>;

const Template: ComponentStory<typeof CodeSnippet> = (args) => (
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
