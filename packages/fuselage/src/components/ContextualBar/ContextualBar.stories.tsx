import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ContextualBar from '.';

export default {
  title: 'ContextualBar/ContextualBar',
  component: ContextualBar,
  parameters: {
    docs: {
      description: {
        component: `The \`ContextualBar\` has the purpose to persist and input information about the scope of the related page.
				`,
      },
    },
  },
} as ComponentMeta<typeof ContextualBar>;

export const Default: ComponentStory<typeof ContextualBar> = () => (
  <ContextualBar
    size='x500'
    position='static'
    height='x500'
    border='2px solid black'
  >
    <ContextualBar.Header>
      <ContextualBar.Title>Titulo</ContextualBar.Title>
    </ContextualBar.Header>
  </ContextualBar>
);
