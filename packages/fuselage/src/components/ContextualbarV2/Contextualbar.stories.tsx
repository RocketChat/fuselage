import { action } from '@storybook/addon-actions';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

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
import { Button, ButtonGroup, IconButton, Box, InputBox, Icon } from '..';

export default {
  title: 'Containers/ContextualbarV2',
  component: ContextualbarV2,
  parameters: {
    docs: {
      description: {
        component: `The \`ContextualbarV2\` has the purpose to persist and input information about the scope of the related page.
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
} as ComponentMeta<typeof ContextualbarV2>;

export const Default: ComponentStory<typeof ContextualbarV2> = () => (
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

export const Skeleton: ComponentStory<typeof ContextualbarV2> = () => (
  <ContextualbarV2Skeleton position='static' height='x540' />
);

export const Empty: ComponentStory<typeof ContextualbarV2> = () => (
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
