import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { action } from 'storybook/actions';

import {
  DECORATOR_LABEL,
  PropsVariationSection,
} from '../../../.storybook/helpers';

import CheckBox from './CheckBox';

export default {
  title: 'Inputs/CheckBox',
  component: CheckBox,
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked (controlled).',
      table: { category: 'State' },
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked initially (uncontrolled).',
      table: { category: 'State' },
    },
    indeterminate: {
      control: 'boolean',
      description:
        'Renders the checkbox in an indeterminate visual state, regardless of its checked value.',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox and blocks pointer interaction.',
      table: { category: 'State' },
    },
    labelChildren: {
      control: false,
      description:
        'Content rendered before the checkbox input, inside its label.',
      table: { category: 'Content', disable: true },
    },
    onChange: {
      control: false,
      description: 'Called when the checked state changes.',
      table: { category: 'Events' },
    },
  },
} satisfies Meta<typeof CheckBox>;

type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {
    'aria-label': DECORATOR_LABEL,
    'onChange': action('change'),
  },
};

export const Checked: Story = {
  args: {
    'aria-label': DECORATOR_LABEL,
    'onChange': action('change'),
    'checked': true,
  },
};

export const Indeterminate: Story = {
  args: {
    'aria-label': DECORATOR_LABEL,
    'onChange': action('change'),
    'indeterminate': true,
  },
};

export const Disabled: Story = {
  args: {
    'aria-label': DECORATOR_LABEL,
    'onChange': action('change'),
    'disabled': true,
  },
};

export const DefaultChecked: Story = {
  args: {
    'aria-label': DECORATOR_LABEL,
    'onChange': action('change'),
    'defaultChecked': true,
  },
};

export const States: Story = {
  render: () => (
    <PropsVariationSection
      component={CheckBox}
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
