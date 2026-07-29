import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { action } from 'storybook/actions';

import { Box } from '../Box';
import { Button, IconButton } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Icon } from '../Icon';
import { InputBox } from '../InputBox';

import Contextualbar from './Contextualbar';
import ContextualbarAction from './ContextualbarAction';
import ContextualbarActions from './ContextualbarActions';
import ContextualbarButton from './ContextualbarButton';
import ContextualbarContent from './ContextualbarContent';
import ContextualbarEmptyContent from './ContextualbarEmptyContent';
import ContextualbarFooter from './ContextualbarFooter';
import ContextualbarHeader from './ContextualbarHeader';
import ContextualbarSection from './ContextualbarSection';
import ContextualbarSkeleton from './ContextualbarSkeleton';
import ContextualbarTitle from './ContextualbarTitle';

export default {
  title: 'Containers/Contextualbar',
  component: Contextualbar,
  subcomponents: {
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
} satisfies Meta<typeof Contextualbar>;

type Story = StoryObj<typeof Contextualbar>;

export const Default: Story = {
  render: () => (
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
          endAddon={<Icon name='magnifier' size='x20' />}
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
  ),
};

export const Skeleton: Story = {
  render: () => <ContextualbarSkeleton position='static' height='x540' />,
};

export const Empty: Story = {
  render: () => (
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
  ),
};
