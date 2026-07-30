import { css } from '@rocket.chat/css-in-js';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { PropsVariationSection } from '../../../.storybook/helpers';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { Box } from '../Box';
import { ButtonGroup } from '../ButtonGroup';
import { avatarUrl } from '../Message/helpers';

import IconButton from './IconButton';

export default {
  title: 'Inputs/IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      control: 'text',
      description:
        'Name of the Fuselage icon rendered inside the button, or a custom element.',
      table: { category: 'Content' },
    },
    primary: {
      control: 'boolean',
      description: 'Solid, high-emphasis color kind.',
      table: { category: 'Kind' },
    },
    secondary: {
      control: 'boolean',
      description:
        'Outlined, lower-emphasis style. Combines with `info`/`danger`/`warning`/`success` for their secondary variants.',
      table: { category: 'Kind' },
    },
    info: {
      control: 'boolean',
      description: 'Informational color kind.',
      table: { category: 'Kind' },
    },
    danger: {
      control: 'boolean',
      description: 'Destructive-action color kind.',
      table: { category: 'Kind' },
    },
    warning: {
      control: 'boolean',
      description: 'Warning color kind.',
      table: { category: 'Kind' },
    },
    success: {
      control: 'boolean',
      description: 'Success color kind.',
      table: { category: 'Kind' },
    },
    pressed: {
      control: 'boolean',
      description: 'Marks the button as pressed/toggled on.',
      table: { category: 'State' },
    },
    large: {
      control: 'boolean',
      description: 'Large size scale.',
      table: { category: 'Size' },
    },
    medium: {
      control: 'boolean',
      description: 'Medium size scale.',
      table: { category: 'Size' },
    },
    small: {
      control: 'boolean',
      description: 'Small size scale.',
      table: { category: 'Size' },
    },
    tiny: {
      control: 'boolean',
      description: 'Tiny size scale.',
      table: { category: 'Size' },
    },
    mini: {
      control: 'boolean',
      description: 'Mini size scale.',
      table: { category: 'Size' },
    },
  },
} satisfies Meta<typeof IconButton>;

type Story = StoryObj<typeof IconButton>;

const EmojiElement = (
  <div className='rcx-box rcx-box--full'>
    <span
      className='emojione emojione-diversity _1f918-1f3fe'
      title=':metal_tone4:'
    >
      🤘🏾
    </span>
  </div>
);

export const _IconButton: Story = {
  args: {
    'icon': 'balloon',
    'aria-label': 'balloon',
  },
};

export const States: Story = {
  render: () => (
    <>
      <PropsVariationSection
        component={IconButton}
        common={{
          'icon': 'doner',
          'medium': true,
          'aria-label': 'balloon',
        }}
        xAxis={{
          default: {},
          hover: { className: 'hover' },
          active: { className: 'active' },
          focus: { className: 'focus focus-visible' },
          pressed: { pressed: true },
          disabled: { disabled: true },
        }}
        yAxis={{
          default: {},
          info: {
            info: true,
          },
          danger: {
            danger: true,
          },
          emoji: {
            icon: EmojiElement,
          },
        }}
      />
      {/* <Divider />
    <PropsVariationSection
      component={IconButton}
      common={{
        icon: 'doner',
        large: true,
      }}
      xAxis={{
        large: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus focus-visible' },
        pressed: { pressed: true },
        disabled: { disabled: true },
      }}
      yAxis={{
        default: {
        },
        info: {
          info: true,
        },
        danger: {
          danger: true,
        },
        emoji: {
          icon: EmojiElement,
        },
      }}
    /> */}
    </>
  ),
};

export const Variants: Story = {
  render: () => (
    <>
      <PropsVariationSection
        component={IconButton}
        common={{
          'icon': 'doner',
          'medium': true,
          'aria-label': 'balloon',
        }}
        xAxis={{
          default: {},
          hover: { className: 'hover' },
          active: { className: 'active' },
          focus: { className: 'focus focus-visible' },
          disabled: { disabled: true },
        }}
        yAxis={{
          'default': {},
          'info': {
            info: true,
          },
          'danger': {
            danger: true,
          },
          'success': {
            success: true,
          },
          'warning': {
            warning: true,
          },
          'secondary': {
            secondary: true,
          },
          'secondary-info | primary': {
            info: true,
            secondary: true,
          },
          'secondary-danger': {
            danger: true,
            secondary: true,
          },
          'secondary-success': {
            success: true,
            secondary: true,
          },
          'secondary-warning': {
            warning: true,
            secondary: true,
          },
        }}
      />
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <ButtonGroup>
      <IconButton icon='balloon' aria-label='balloon' secondary />
      <IconButton icon='balloon' aria-label='balloon' secondary medium />
      <IconButton icon='balloon' aria-label='balloon' secondary small />
      <IconButton icon='balloon' aria-label='balloon' secondary tiny />
      <IconButton icon='balloon' aria-label='balloon' secondary mini />
    </ButtonGroup>
  ),
};

export const _IconButtonDisabled: Story = {
  args: {
    'icon': 'balloon',
    'aria-label': 'balloon',
    'disabled': true,
  },
};

export const _IconButtonWithEmoji: Story = {
  args: {
    'icon': EmojiElement,
    'aria-label': 'emoji',
  },
};

export const _IconButtonInfo: Story = {
  args: {
    'icon': 'balloon',
    'aria-label': 'balloon',
    'info': true,
  },
};

export const _IconButtonSecondaryInfo: Story = {
  args: {
    'icon': 'balloon',
    'aria-label': 'balloon',
    'secondary': true,
    'info': true,
  },
};

export const _IconButtonSuccess: Story = {
  args: {
    'icon': 'balloon',
    'aria-label': 'balloon',
    'success': true,
  },
};

export const _IconButtonSecondarySuccess: Story = {
  args: {
    'icon': 'balloon',
    'aria-label': 'balloon',
    'secondary': true,
    'success': true,
  },
};

export const _IconButtonWarning: Story = {
  args: {
    'icon': 'balloon',
    'aria-label': 'balloon',
    'warning': true,
  },
};

export const _IconButtonSecondaryWarning: Story = {
  args: {
    'icon': 'balloon',
    'aria-label': 'balloon',
    'secondary': true,
    'warning': true,
  },
};

export const _IconButtonDanger: Story = {
  args: {
    'icon': 'balloon',
    'aria-label': 'balloon',
    'danger': true,
  },
};

export const _IconButtonSecondaryDanger: Story = {
  args: {
    'icon': 'balloon',
    'aria-label': 'balloon',
    'secondary': true,
    'danger': true,
  },
};

export const _IconButtonWithBadge: Story = {
  render: () => (
    <ButtonGroup>
      <IconButton icon='balloon' small position='relative' overflow='visible'>
        <Box
          position='absolute'
          role='status'
          className={css`
            top: 0;
            right: 0;
            transform: translate(30%, -30%);
          `}
        >
          <Badge variant='danger'>2</Badge>
        </Box>
      </IconButton>
    </ButtonGroup>
  ),
};

export const _IconButtonAvatarWithBadge: Story = {
  render: () => (
    <ButtonGroup>
      <IconButton
        icon={<Avatar size='x28' url={avatarUrl} />}
        small
        position='relative'
        overflow='visible'
      >
        <Box
          position='absolute'
          role='status'
          className={css`
            top: 0;
            right: 0;
            transform: translate(30%, -30%);
          `}
        >
          <Badge variant='danger'>2</Badge>
        </Box>
      </IconButton>
    </ButtonGroup>
  ),
};
