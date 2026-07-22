import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { action } from 'storybook/actions';

import {
  DECORATOR_LABEL,
  PropsVariationSection,
} from '../../../.storybook/helpers';

import ToggleSwitch from './ToggleSwitch';

export default {
  title: 'Inputs/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {
    labelChildren: {
      control: false,
      description: 'Content rendered inside the label, before the switch.',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the switch is on.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the switch and blocks pointer interaction.',
    },
    onChange: {
      control: false,
      description: 'Called when the switch is toggled.',
      table: { category: 'Events' },
    },
  },
} satisfies Meta<typeof ToggleSwitch>;

type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  args: {
    'aria-label': DECORATOR_LABEL,
    'onChange': action('change'),
  },
};

export const Checked: Story = {
  args: {
    'aria-label': DECORATOR_LABEL,
    'checked': true,
    'onChange': action('change'),
  },
};

export const Disabled: Story = {
  args: {
    'aria-label': DECORATOR_LABEL,
    'disabled': true,
  },
};

export const States: Story = {
  render: () => (
    <PropsVariationSection
      component={ToggleSwitch}
      common={{ 'onChange': action('change'), 'aria-label': DECORATOR_LABEL }}
      xAxis={{
        checked: { checked: true },
        unchecked: { checked: false },
      }}
      yAxis={{
        default: {},
        hover: { className: 'is-hovered' },
        active: { className: 'is-active' },
        focus: { className: 'is-focused' },
        disabled: { disabled: true },
      }}
    />
  ),
};
