import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { action } from 'storybook/actions';

import { Box } from '../Box';
import { Button, IconButton } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Icon } from '../Icon';
import { InputBox } from '../InputBox';

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

export default {
  title: 'Containers/ContextualbarV2',
  component: ContextualbarV2,
  subcomponents: {
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
  },
  decorators: [
    (storyFn) => (
      <Box width='x400' elevation='2'>
        {storyFn()}
      </Box>
    ),
  ],
  argTypes: {
    width: {
      control: 'text',
      description: 'Width of the contextual bar.',
      table: { category: 'Layout' },
    },
    height: {
      control: 'text',
      description: 'Height of the contextual bar.',
      table: { category: 'Layout' },
    },
    position: {
      control: 'select',
      options: ['static', 'relative', 'absolute', 'sticky', 'fixed'],
      description: 'CSS position of the contextual bar.',
      table: { category: 'Layout' },
    },
    backgroundColor: {
      control: 'text',
      description:
        'Background color of the contextual bar. Defaults to `room`.',
      table: { category: 'Style', defaultValue: { summary: 'room' } },
    },
    children: {
      control: false,
      description:
        'Header, sections, content and footer of the contextual bar.',
      table: { category: 'Content' },
    },
  },
} satisfies Meta<typeof ContextualbarV2>;

type Story = StoryObj<typeof ContextualbarV2>;

export const Default: Story = {
  render: () => (
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
          endAddon={<Icon name='magnifier' size='x20' />}
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
  ),
};

export const Skeleton: Story = {
  render: () => <ContextualbarV2Skeleton position='static' height='x540' />,
};

export const Empty: Story = {
  render: () => (
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
  ),
};

export const WithLongTitle: Story = {
  render: () => (
    <ContextualbarV2 position='static' height='x540'>
      <ContextualbarV2Header>
        <ContextualbarV2Action
          title='Back'
          name='arrow-back'
          onClick={action('click')}
        />
        <ContextualbarV2Title>
          ContextualbarV2 Long Title ContextualbarV2 Long Title ContextualbarV2
          Long Title ContextualbarV2 Long Title ContextualbarV2 Long Title
          ContextualbarV2 Long Title ContextualbarV2 Long Title ContextualbarV2
          Long Title ContextualbarV2 Long Title
        </ContextualbarV2Title>
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
          endAddon={<Icon name='magnifier' size='x20' />}
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
  ),
};
