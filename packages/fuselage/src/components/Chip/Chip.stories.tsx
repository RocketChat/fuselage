import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { action } from 'storybook/actions';

import { exampleAvatar, blankAvatar } from '../../../.storybook/helpers';
import { Box } from '../Box';
import { Margins } from '../Margins';

import Chip from './Chip';

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
    dismissLabel: {
      control: 'text',
      description:
        'Accessible label for the dismiss `IconButton`. Defaults to `"Dismiss"`.',
      table: { category: 'Content' },
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
  },
};

export const WithThumbUrl: Story = {
  args: {
    children: 'Marie Rowe',
    thumbUrl: exampleAvatar,
    onDismiss: action('dismiss'),
  },
};

/**
 * @deprecated Whole-chip dismiss via `onClick` is deprecated. Use `onDismiss` instead (see `Dismissible`).
 */
export const LegacyDismissible: Story = {
  args: {
    children: 'Marie Rowe',
    onClick: action('click'),
  },
};

export const Dismissible: Story = {
  args: {
    children: 'Marie Rowe',
    onDismiss: action('dismiss'),
  },
};

export const CustomDismissLabel: Story = {
  args: {
    children: 'Marie Rowe',
    onDismiss: action('dismiss'),
    dismissLabel: 'Remove Marie Rowe',
  },
};

export const Disabled: Story = {
  render: () => (
    <Box display='flex' margin='-x4'>
      <Margins all='x4'>
        <Chip disabled onClick={action('click')}>
          Legacy disabled
        </Chip>
        <Chip disabled onDismiss={action('dismiss')}>
          Disabled
        </Chip>
      </Margins>
    </Box>
  ),
};

export const WithThumb: Story = {
  render: () => (
    <Box display='flex' margin='-x4'>
      <Margins all='x4'>
        <Chip thumbUrl={blankAvatar}>Chip</Chip>
        <Chip thumbUrl={blankAvatar} onDismiss={action('dismiss')}>
          Chip
        </Chip>
      </Margins>
    </Box>
  ),
};
