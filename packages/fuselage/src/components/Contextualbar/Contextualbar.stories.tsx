import type { StoryFn, Meta } from '@storybook/react-vite';
import type { ComponentType } from 'react';
import { action } from 'storybook/actions';

import Box from '../Box/index.js';
import Button, { IconButton } from '../Button/index.js';
import { ButtonGroup } from '../ButtonGroup/index.js';
import { Icon } from '../Icon/index.js';
import { InputBox } from '../InputBox/index.js';

import Contextualbar from './Contextualbar.js';
import ContextualbarAction from './ContextualbarAction.js';
import ContextualbarActions from './ContextualbarActions.js';
import ContextualbarButton from './ContextualbarButton.js';
import ContextualbarContent from './ContextualbarContent.js';
import ContextualbarEmptyContent from './ContextualbarEmptyContent.js';
import ContextualbarFooter from './ContextualbarFooter.js';
import ContextualbarHeader from './ContextualbarHeader.js';
import ContextualbarSection from './ContextualbarSection.js';
import ContextualbarSkeleton from './ContextualbarSkeleton.js';
import ContextualbarTitle from './ContextualbarTitle.js';

export default {
  title: 'Containers/Contextualbar',
  component: Contextualbar,
  subcomponents: {
    ContextualbarAction: ContextualbarAction as ComponentType<any>,
    ContextualbarActions: ContextualbarActions as ComponentType<any>,
    ContextualbarButton: ContextualbarButton as ComponentType<any>,
    ContextualbarContent: ContextualbarContent as ComponentType<any>,
    ContextualbarEmptyContent: ContextualbarEmptyContent as ComponentType<any>,
    ContextualbarFooter: ContextualbarFooter as ComponentType<any>,
    ContextualbarHeader: ContextualbarHeader as ComponentType<any>,
    ContextualbarSection: ContextualbarSection as ComponentType<any>,
    ContextualbarSkeleton: ContextualbarSkeleton as ComponentType<any>,
    ContextualbarTitle: ContextualbarTitle as ComponentType<any>,
  },
  decorators: [
    (storyFn) => (
      <Box width='x400' elevation='2'>
        {storyFn()}
      </Box>
    ),
  ],
} satisfies Meta<typeof Contextualbar>;

export const Default: StoryFn<typeof Contextualbar> = () => (
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

export const Skeleton: StoryFn<typeof Contextualbar> = () => (
  <ContextualbarSkeleton position='static' height='x540' />
);

export const Empty: StoryFn<typeof Contextualbar> = () => (
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
