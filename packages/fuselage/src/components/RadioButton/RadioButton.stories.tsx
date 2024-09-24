import { action } from '@storybook/addon-actions';
import type { StoryFn, Meta } from '@storybook/react';

import {
  PropsVariationSection,
  DECORATOR_LABEL,
} from '../../../.storybook/helpers';
import { RadioButton } from './RadioButton';

export default {
  title: 'Inputs/RadioButton',
  component: RadioButton,
} satisfies Meta<typeof RadioButton>;

const Template: StoryFn<typeof RadioButton> = (args) => (
  <RadioButton {...args} aria-label={DECORATOR_LABEL} />
);

export const Default: StoryFn<typeof RadioButton> = Template.bind({});
Default.args = {
  onChange: action('change'),
};

export const Checked: StoryFn<typeof RadioButton> = Template.bind({});
Checked.args = {
  onChange: action('change'),
  checked: true,
};

export const Disabled: StoryFn<typeof RadioButton> = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const States: StoryFn<typeof RadioButton> = () => (
  <PropsVariationSection
    component={RadioButton}
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
);
