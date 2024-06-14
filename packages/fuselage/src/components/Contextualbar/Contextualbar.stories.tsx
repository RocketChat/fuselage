import { action } from '@storybook/addon-actions';
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
  ContextualbarSection,
  ContextualbarSkeleton,
  ContextualbarTitle,
} from '.';
import { Button, ButtonGroup, IconButton, Box, InputBox, Icon } from '..';

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
      <ContextualbarAction
        title='Back'
        name='arrow-back'
        onClick={action('click')}
      />
      <ContextualbarTitle>Contextualbar Title</ContextualbarTitle>
      <ContextualbarActions>
        <ContextualbarAction
          title='Title'
          name='new-window'
          onClick={action('click')}
        />
        <ContextualbarAction
          title='Add user'
          name='add-user'
          onClick={action('click')}
        />
        <ContextualbarAction
          title='Close'
          name='cross'
          onClick={action('click')}
        />
      </ContextualbarActions>
    </ContextualbarHeader>
    <ContextualbarSection>
      <InputBox
        type='text'
        placeholder='Search'
        addon={<Icon name='magnifier' size='x20' />}
      />
    </ContextualbarSection>
    <ContextualbarContent />
    <ContextualbarFooter>
      <ButtonGroup>
        <ContextualbarButton width='full' secondary>
          Cancel
        </ContextualbarButton>
        <Button width='full' primary>
          Save
        </Button>
        <IconButton title='More' icon='menu' secondary />
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
      <ContextualbarAction title='Back' name='arrow-back' />
      <ContextualbarTitle>Contextualbar Empty</ContextualbarTitle>
      <ContextualbarActions>
        <ContextualbarAction
          title='Title'
          name='new-window'
          onClick={action('click')}
        />
      </ContextualbarActions>
    </ContextualbarHeader>
    <ContextualbarEmptyContent />
    <ContextualbarFooter>Footer</ContextualbarFooter>
  </Contextualbar>
);
