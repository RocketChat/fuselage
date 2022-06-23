import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ContextualBar from '.';
import { Button, ButtonGroup } from '..';

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
    size='x400'
    position='static'
    height='x500'
    border='2px solid red'
  >
    <ContextualBar.Header>
      <ContextualBar.Button>
        <ContextualBar.Icon name='chevron-right' />
      </ContextualBar.Button>
      <ContextualBar.Back onClick={() => console.log('back')} />
      <ContextualBar.Title>Title</ContextualBar.Title>
      <ContextualBar.Actions>
        <ContextualBar.Action
          title='Title'
          name={'new-window'}
          onClick={() => {}}
        />
        <ContextualBar.Action
          title='Title'
          name={'new-window'}
          onClick={() => {}}
        />
        <ContextualBar.Close onClick={() => console.log('close')} />
      </ContextualBar.Actions>
    </ContextualBar.Header>
    <ContextualBar.Content>Teste</ContextualBar.Content>
    <ContextualBar.Footer>
      <ButtonGroup stretch>
        <Button secondary>Cancel</Button>
        <Button primary>Save</Button>
      </ButtonGroup>
    </ContextualBar.Footer>
  </ContextualBar>
);

export const Skeleton: ComponentStory<typeof ContextualBar> = () => (
  <ContextualBar.Skeleton
    size='x400'
    position='static'
    height='x500'
    border='2px solid red'
  />
);
