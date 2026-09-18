import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { ButtonGroup } from '../ButtonGroup';
import { avatarUrl } from '../Message/helpers';

import IconButtonWithBadge from './IconButtonWithBadge';

export default {
  title: 'Inputs/IconButtonWithBadge',
  component: IconButtonWithBadge,
  parameters: {
    docs: {
      description: {
        component:
          'An icon button carrying a badge in its corner, for what is waiting behind the button.\n\n' +
          '**Rules**\n' +
          "- Don't combine mini/tiny icon buttons with large/medium badges.\n" +
          '- The badge is hidden from assistive technology: say what it counts in the button’s `aria-label`, since that replaces the button’s contents rather than adding to them.\n' +
          '- A badge with no children is the dot — something happened, with no count behind it.',
      },
    },
  },
  args: {
    'icon': 'balloon',
    'aria-label': 'balloon, 2 unread messages',
    'small': true,
    'badge': <Badge variant='danger'>2</Badge>,
  },
} satisfies Meta<typeof IconButtonWithBadge>;

type Story = StoryObj<typeof IconButtonWithBadge>;

export const Default: Story = {};

export const WithoutBadge: Story = {
  args: {
    'aria-label': 'balloon',
    'badge': undefined,
  },
};

export const Dot: Story = {
  args: {
    'aria-label': 'balloon, unread messages',
    'badge': <Badge variant='danger' small />,
  },
};

export const Variants: Story = {
  render: (args) => (
    <ButtonGroup>
      <IconButtonWithBadge {...args} badge={<Badge>2</Badge>} />
      <IconButtonWithBadge
        {...args}
        badge={<Badge variant='primary'>2</Badge>}
      />
      <IconButtonWithBadge
        {...args}
        badge={<Badge variant='warning'>2</Badge>}
      />
      <IconButtonWithBadge
        {...args}
        badge={<Badge variant='danger'>2</Badge>}
      />
    </ButtonGroup>
  ),
};

export const WithAvatar: Story = {
  args: {
    icon: <Avatar size='x28' url={avatarUrl} />,
  },
};
