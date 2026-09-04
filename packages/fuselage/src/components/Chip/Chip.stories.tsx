import type { Meta, StoryObj } from '@storybook/react-webpack5';
import type { ReactNode } from 'react';
import { action } from 'storybook/actions';

import { exampleAvatar, blankAvatar } from '../../../.storybook/helpers';
import { Box } from '../Box';

import Chip from './Chip';

const ChipVariants = ({
  variants,
}: {
  variants: readonly (readonly [label: string, chip: ReactNode])[];
}) => (
  <Box display='inline-flex' alignItems='flex-start' gap='x16'>
    {variants.map(([label, chip]) => (
      <Box
        key={label}
        display='flex'
        flexDirection='column'
        alignItems='center'
        gap='x4'
      >
        {chip}
        <Box fontScale='c1' color='hint'>
          {label}
        </Box>
      </Box>
    ))}
  </Box>
);

export default {
  title: 'Data Display/Chip',
  component: Chip,
  parameters: {
    docs: {
      description: {
        component:
          'Used to communicate and manage input-field selections.\n\n' +
          '**Rules**\n' +
          '- Text is mandatory.\n' +
          '- A chip may have either a leading icon or a leading avatar — not both.\n' +
          '- Keep the close button when the chip represents a removable selection.\n\n' +
          '**Dismiss**\n' +
          '- Preferred: pass `onDismiss` to render a dedicated, accessible dismiss `IconButton`.\n' +
          '- Deprecated: triggering dismiss via the whole chip’s `onClick`/`onMouseDown` ' +
          '(paired with `renderDismissSymbol` as the decorative icon) still works for backwards ' +
          'compatibility, but new code should use `onDismiss`.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Chip label content.',
      table: { category: 'Content' },
    },
    thumbUrl: {
      control: 'text',
      description: 'URL of the avatar image rendered before the label.',
      table: { category: 'Content' },
    },
    renderThumb: {
      control: false,
      description: 'Custom renderer for the thumbnail, receiving `{ url }`.',
      table: { category: 'Content' },
    },
    renderDismissSymbol: {
      control: false,
      description:
        '**Deprecated.** Custom renderer for the legacy whole-chip dismiss icon. Ignored when `onDismiss` is provided.',
      table: { category: 'Content' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the chip and blocks pointer interaction.',
      table: { category: 'State' },
    },
    onDismiss: {
      control: false,
      description:
        'Called when the dedicated dismiss `IconButton` is activated. When provided, the chip root becomes non-interactive and only the `IconButton` triggers dismiss.',
      table: { category: 'Events' },
    },
    leadingIcon: {
      control: 'text',
      description:
        'Leading icon rendered before the label, vertically centered — use it instead of an avatar, never both. Sized by the chip `size`. Only applies when `onDismiss` is provided.',
      table: { category: 'Content' },
    },
    icon: {
      control: 'text',
      description:
        "Icon of the trailing `IconButton`. Defaults to `'cross'` (dismiss); other icons express other actions (e.g. `'chevron-down'` for a chip that opens a menu). Only applies when `onDismiss` is provided.",
      table: { category: 'Content', defaultValue: { summary: 'cross' } },
    },
    dismissLabel: {
      control: 'text',
      description:
        'Accessible label and tooltip (`title`) for the trailing `IconButton`. Defaults to `"Dismiss"`.',
      table: { category: 'Content' },
    },
    size: {
      control: 'select',
      options: ['medium', 'small'],
      description:
        'Size of the dismissible chip: `medium` renders a 28px dismiss `IconButton`, `small` a 20px one. Only applies when `onDismiss` is provided.',
      table: { category: 'Size', defaultValue: { summary: 'medium' } },
    },
    onClick: {
      control: false,
      description:
        '**Deprecated as a dismiss trigger.** When `onDismiss` is not provided, clicking the whole chip (via `onClick` or `onMouseDown`) triggers dismiss. Use `onDismiss` instead.',
      table: { category: 'Events' },
    },
  },
} satisfies Meta<typeof Chip>;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: 'Marie Rowe',
    onDismiss: action('dismiss'),
  },
};

/**
 * The first chip uses the default dismiss label (`"Dismiss"`); the second
 * customizes it via `dismissLabel`, which sets both the accessible name and
 * the tooltip of the dismiss button — include what is being removed
 * (e.g. `"Remove Marie Rowe"`) so screen readers can tell chips apart.
 */
export const Dismissible: Story = {
  render: () => (
    <ChipVariants
      variants={[
        [
          'default label',
          <Chip onDismiss={action('dismiss')}>Marie Rowe</Chip>,
        ],
        [
          'custom label',
          <Chip onDismiss={action('dismiss')} dismissLabel='Remove Marie Rowe'>
            Marie Rowe
          </Chip>,
        ],
      ]}
    />
  ),
};

export const Sizes: Story = {
  render: () => (
    <ChipVariants
      variants={[
        [
          'medium',
          <Chip thumbUrl={exampleAvatar} onDismiss={action('dismiss')}>
            Label
          </Chip>,
        ],
        [
          'small',
          <Chip
            thumbUrl={exampleAvatar}
            onDismiss={action('dismiss')}
            size='small'
          >
            Label
          </Chip>,
        ],
        [
          'medium with icon',
          <Chip onDismiss={action('dismiss')} leadingIcon='user'>
            Label
          </Chip>,
        ],
        [
          'small with icon',
          <Chip onDismiss={action('dismiss')} leadingIcon='user' size='small'>
            Label
          </Chip>,
        ],
      ]}
    />
  ),
};

export const WithThumbUrl: Story = {
  args: {
    children: 'Marie Rowe',
    thumbUrl: exampleAvatar,
    onDismiss: action('dismiss'),
  },
};

export const WithThumb: Story = {
  args: {
    children: 'Chip',
    thumbUrl: blankAvatar,
    onDismiss: action('dismiss'),
  },
};

/**
 * A chip may have a leading icon instead of an avatar — never both.
 */
export const WithIcon: Story = {
  args: {
    children: 'Label',
    leadingIcon: 'user',
    onDismiss: action('dismiss'),
  },
};

/**
 * The trailing `IconButton` is not limited to dismissing: pass `icon` to
 * express other actions, pairing it with a matching `dismissLabel` for the
 * accessible name and tooltip.
 */
export const OtherActions: Story = {
  render: () => (
    <ChipVariants
      variants={[
        [
          'dropdown',
          <Chip
            onDismiss={action('open-filters')}
            icon='chevron-down'
            dismissLabel='Open filters'
          >
            Filters (3)
          </Chip>,
        ],
        [
          'edit',
          <Chip
            onDismiss={action('edit')}
            icon='pencil'
            dismissLabel='Edit Marie Rowe'
          >
            Marie Rowe
          </Chip>,
        ],
      ]}
    />
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Marie Rowe',
    disabled: true,
    onDismiss: action('dismiss'),
  },
};

/**
 * @deprecated All the legacy (whole-chip dismiss) possibilities, isolated
 * here for reference: the chip root is a `<button>` and clicking anywhere on
 * it triggers `onClick`/`onMouseDown`. Without a handler the chip renders
 * disabled. Use `onDismiss` instead (see `Dismissible`).
 */
export const LegacyDismissible: Story = {
  render: () => (
    <ChipVariants
      variants={[
        ['dismissible', <Chip onClick={action('click')}>Marie Rowe</Chip>],
        [
          'with thumb',
          <Chip thumbUrl={blankAvatar} onClick={action('click')}>
            Marie Rowe
          </Chip>,
        ],
        [
          'disabled',
          <Chip disabled onClick={action('click')}>
            Marie Rowe
          </Chip>,
        ],
        ['no handler', <Chip>Marie Rowe</Chip>],
      ]}
    />
  ),
};
