import { action } from '@storybook/addon-actions';
import type { StoryFn, Meta } from '@storybook/react';
import type { ComponentType } from 'react';

import {
  ContextualbarV2,
  ContextualbarV2Action,
  ContextualbarV2Actions,
  ContextualbarV2Button,
  ContextualbarV2Content,
  ContextualbarV2EmptyContent,
  ContextualbarV2Footer,
  ContextualbarV2Header,
  ContextualbarV2Section,
  ContextualbarV2Skeleton,
  ContextualbarV2Title,
} from '.';
import Box from '../Box';
import Button, { IconButton } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Icon } from '../Icon';
import InputBox from '../InputBox';

export default {
  title: 'Containers/ContextualbarV2',
  component: ContextualbarV2,
  subcomponents: {
    ContextualbarV2Action: ContextualbarV2Action as ComponentType<any>,
    ContextualbarV2Actions: ContextualbarV2Actions as ComponentType<any>,
    ContextualbarV2Button: ContextualbarV2Button as ComponentType<any>,
    ContextualbarV2Content: ContextualbarV2Content as ComponentType<any>,
    ContextualbarV2EmptyContent:
      ContextualbarV2EmptyContent as ComponentType<any>,
    ContextualbarV2Footer: ContextualbarV2Footer as ComponentType<any>,
    ContextualbarV2Header: ContextualbarV2Header as ComponentType<any>,
    ContextualbarV2Section: ContextualbarV2Section as ComponentType<any>,
    ContextualbarV2Skeleton: ContextualbarV2Skeleton as ComponentType<any>,
    ContextualbarV2Title: ContextualbarV2Title as ComponentType<any>,
  },
  decorators: [
    (storyFn) => (
      <Box width='x400' elevation='2'>
        {storyFn()}
      </Box>
    ),
  ],
} satisfies Meta<typeof ContextualbarV2>;

export const Default: StoryFn<typeof ContextualbarV2> = () => (
  <ContextualbarV2 position='static' height='x540'>
    <ContextualbarV2Header>
      <ContextualbarV2Action
        title='Back'
        name='arrow-back'
        onClick={action('click')}
      />
      <ContextualbarV2Title>ContextualbarV2 Title</ContextualbarV2Title>
      <ContextualbarV2Actions>
        <ContextualbarV2Action
          title='Title'
          name='new-window'
          onClick={action('click')}
        />
        <ContextualbarV2Action
          title='Add user'
          name='add-user'
          onClick={action('click')}
        />
        <ContextualbarV2Action
          title='Close'
          name='cross'
          onClick={action('click')}
        />
      </ContextualbarV2Actions>
    </ContextualbarV2Header>
    <ContextualbarV2Section>
      <InputBox
        type='text'
        placeholder='Search'
        addon={<Icon name='magnifier' size='x20' />}
      />
    </ContextualbarV2Section>
    <ContextualbarV2Content />
    <ContextualbarV2Footer>
      <ButtonGroup>
        <ContextualbarV2Button width='full' secondary>
          Cancel
        </ContextualbarV2Button>
        <Button width='full' primary>
          Save
        </Button>
        <IconButton title='More' icon='menu' secondary />
      </ButtonGroup>
    </ContextualbarV2Footer>
  </ContextualbarV2>
);

export const Skeleton: StoryFn<typeof ContextualbarV2> = () => (
  <ContextualbarV2Skeleton position='static' height='x540' />
);

export const Empty: StoryFn<typeof ContextualbarV2> = () => (
  <ContextualbarV2 position='static' height='x540'>
    <ContextualbarV2Header>
      <ContextualbarV2Action title='Back' name='arrow-back' />
      <ContextualbarV2Title>ContextualbarV2 Empty</ContextualbarV2Title>
      <ContextualbarV2Actions>
        <ContextualbarV2Action
          title='Title'
          name='new-window'
          onClick={action('click')}
        />
      </ContextualbarV2Actions>
    </ContextualbarV2Header>
    <ContextualbarV2EmptyContent />
    <ContextualbarV2Footer>Footer</ContextualbarV2Footer>
  </ContextualbarV2>
);
