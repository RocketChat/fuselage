import { action } from '@storybook/addon-actions';
import { Title, Description, Primary } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
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
        </>
      ),
    },
  },
} as ComponentMeta<typeof CodeSnippet>;

export const Example: ComponentStory<typeof CodeSnippet> = () => (
  <CodeSnippet
    code='curl -L https://go.rocket.chat/i/docker-compose.yml -O'
    handleClick={() => {
      action('click');
    }}
  />
);
