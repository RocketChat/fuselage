import { action } from '@storybook/addon-actions';
import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { RadioButton } from '../..';
import {
  PropsVariationSection,
  DECORATOR_LABEL,
} from '../../../.storybook/helpers';

export default {
  title: 'Inputs/RadioButton',
  component: RadioButton,
  parameters: {
    docs: {
      description: {
        component:
          'The `ProgressBar` is used to inform the user the progress of an operation.',
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <ArgsTable />
          <Stories title={''} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} aria-label={DECORATOR_LABEL} />
);

export const Default: ComponentStory<typeof RadioButton> = Template.bind({});
Default.args = {
  onChange: action('change'),
};

export const Checked: ComponentStory<typeof RadioButton> = Template.bind({});
Checked.args = {
  onChange: action('change'),
  checked: true,
};

export const Disabled: ComponentStory<typeof RadioButton> = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const States: ComponentStory<typeof RadioButton> = () => (
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
