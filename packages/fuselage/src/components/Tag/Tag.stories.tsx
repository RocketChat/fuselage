import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { action } from 'storybook/actions';

import { Box } from '../Box';
import { ButtonGroup } from '../ButtonGroup';
import { Icon } from '../Icon';

import Tag from './Tag';

export default {
  title: 'Data Display/Tag',
  component: Tag,
  argTypes: {
    children: {
      control: 'text',
      description: 'Tag label content.',
    },
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'danger',
        'warning',
        'secondary-danger',
        'secondary-warning',
        'secondary-info',
        'featured',
      ],
      description: 'Color kind applied to the tag.',
    },
    medium: {
      control: 'boolean',
      description: 'Medium size scale.',
      table: { category: 'Size' },
    },
    large: {
      control: 'boolean',
      description: 'Large size scale.',
      table: { category: 'Size' },
    },
    disabled: {
      control: 'boolean',
      description: 'Renders the disabled visual style.',
      table: { category: 'State' },
    },
    icon: {
      control: false,
      description: 'Element rendered before the tag label.',
      table: { category: 'Content' },
    },
    href: {
      control: 'text',
      description: 'Renders the tag as a link to this address.',
      table: { category: 'Polymorphism' },
    },
    onClick: {
      control: false,
      description:
        'Called when the tag is clicked; also marks it as clickable.',
      table: { category: 'Events' },
    },
  },
} satisfies Meta<typeof Tag>;

type Story = StoryObj<typeof Tag>;

const render: Story['render'] = (args) => (
  <Box display='inline-flex'>
    <Tag {...args}>{args.children || 'john.doe'}</Tag>
  </Box>
);

export const Default: Story = {
  render,
};

export const _Primary: Story = {
  render,
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  render,
  args: {
    variant: 'secondary',
  },
};

export const _Danger: Story = {
  render,
  args: {
    variant: 'danger',
  },
};

export const Warning: Story = {
  render,
  args: {
    variant: 'warning',
  },
};

export const Featured: Story = {
  render,
  args: {
    variant: 'featured',
  },
};

export const _SecondaryDanger: Story = {
  render,
  args: {
    variant: 'secondary-danger',
  },
};

export const _SecondaryWarning: Story = {
  render,
  args: {
    variant: 'secondary-warning',
  },
};

export const _SecondaryInfo: Story = {
  render,
  args: {
    variant: 'secondary-info',
  },
};

export const WithIcon: Story = {
  render,
  args: {
    icon: <Icon size='x12' marginInlineEnd={4} name='team-lock' />,
    children: 'Team',
  },
};

export const Disabled: Story = {
  render,
  args: {
    disabled: true,
  },
};

export const Clickable: Story = {
  render,
  args: {
    onClick: action('click'),
  },
};

export const Medium: Story = {
  render,
  args: {
    medium: true,
  },
};

export const Large: Story = {
  render,
  args: {
    large: true,
  },
};

export const AsLink: Story = {
  render,
  args: {
    href: '#',
  },
};

export const Variants: Story = {
  render: () => (
    <ButtonGroup>
      <Tag>john.doe</Tag>
      <Tag variant='primary'>john.doe</Tag>
      <Tag variant='danger'>john.doe</Tag>
      <Tag variant='warning'>john.doe</Tag>
      <Tag variant='featured'>john.doe</Tag>
      <Tag variant='secondary-danger'>john.doe</Tag>
      <Tag variant='secondary-warning'>john.doe</Tag>
      <Tag variant='secondary-info'>john.doe</Tag>
    </ButtonGroup>
  ),
};

export const VariantsAsLinks: Story = {
  render: () => (
    <ButtonGroup>
      <Tag href='#'>john.doe</Tag>
      <Tag variant='primary' href='#'>
        john.doe
      </Tag>
      <Tag variant='danger' href='#'>
        john.doe
      </Tag>
      <Tag variant='warning' href='#'>
        john.doe
      </Tag>
      <Tag variant='featured' href='#'>
        john.doe
      </Tag>
      <Tag variant='secondary-danger' href='#'>
        john.doe
      </Tag>
      <Tag variant='secondary-warning' href='#'>
        john.doe
      </Tag>
      <Tag variant='secondary-info' href='#'>
        john.doe
      </Tag>
    </ButtonGroup>
  ),
};
