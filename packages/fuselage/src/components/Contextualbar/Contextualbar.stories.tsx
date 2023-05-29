import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import {
  Contextualbar,
  ContextualbarAction,
  ContextualbarActions,
  ContextualbarButton,
  ContextualbarContent,
  ContextualbarEmptyContent,
  ContextualbarFooter,
  ContextualbarHeader,
  ContextualbarSkeleton,
  ContextualbarTitle,
} from '.';
import { Button, ButtonGroup, IconButton, Box } from '..';

export default {
  title: 'Containers/Contextualbar',
  component: Contextualbar,
  parameters: {
    docs: {
      description: {
        component: `The \`Contextualbar\` has the purpose to persist and input information about the scope of the related page.
				`,
      },
    },
  },
  decorators: [
    (storyFn) => (
      <Box width='x400' elevation='2'>
        {storyFn()}
      </Box>
    ),
  ],
} as ComponentMeta<typeof Contextualbar>;

export const Default: ComponentStory<typeof Contextualbar> = () => (
  <Contextualbar position='static' height='x540'>
    <ContextualbarHeader>
      <ContextualbarAction name='chevron-right' />
      <ContextualbarAction title='Back' name='arrow-back' />
      <ContextualbarTitle>Contextualbar Title</ContextualbarTitle>
      <ContextualbarActions>
        <ContextualbarAction
          title='Title'
          name='new-window'
          onClick={() => {}}
        />
        <ContextualbarAction
          name='add-user'
          onClick={() => console.log('close')}
        />
      </ContextualbarActions>
    </ContextualbarHeader>
    <ContextualbarContent>Contextualbar Content</ContextualbarContent>
    <ContextualbarFooter>
      <ButtonGroup>
        <ContextualbarButton width='full' secondary>
          Cancel
        </ContextualbarButton>
        <Button width='full' primary>
          Save
        </Button>
        <IconButton icon='menu' />
      </ButtonGroup>
    </ContextualbarFooter>
  </Contextualbar>
);

export const Skeleton: ComponentStory<typeof Contextualbar> = () => (
  <ContextualbarSkeleton position='static' height='x540' />
);

export const Empty: ComponentStory<typeof Contextualbar> = () => (
  <Contextualbar position='static' height='x540'>
    <ContextualbarHeader>
      <ContextualbarAction name='chevron-right' />
      <ContextualbarTitle>Contextualbar Empty</ContextualbarTitle>
      <ContextualbarActions>
        <ContextualbarAction
          title='Title'
          name='new-window'
          onClick={() => {}}
        />
      </ContextualbarActions>
    </ContextualbarHeader>
    <ContextualbarEmptyContent />
    <ContextualbarFooter>Footer</ContextualbarFooter>
  </Contextualbar>
);
