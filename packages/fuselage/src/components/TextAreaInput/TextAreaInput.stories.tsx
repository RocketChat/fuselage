import type { StoryFn, Meta } from '@storybook/react';

import { PropsVariationSection } from '../../../.storybook/helpers';
import { Icon } from '../Icon';
import { TextAreaInput } from './TextAreaInput';

export default {
  title: 'Inputs/TextAreaInput',
  component: TextAreaInput,
} satisfies Meta<typeof TextAreaInput>;

const Template: StoryFn<typeof TextAreaInput> = (args) => (
  <TextAreaInput {...args} />
);

export const Default: StoryFn<typeof TextAreaInput> = Template.bind({});

export const WithIconAddon: StoryFn<typeof TextAreaInput> = Template.bind({});
WithIconAddon.args = {
  addon: <Icon name='send' size='x20' />,
};

export const Invalid: StoryFn<typeof TextAreaInput> = Template.bind({});
Invalid.args = {
  error: 'Error',
};

export const Disabled: StoryFn<typeof TextAreaInput> = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithPlaceholder: StoryFn<typeof TextAreaInput> = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const WithValue: StoryFn<typeof TextAreaInput> = Template.bind({});
WithValue.args = {
  defaultValue: 'Roses are red\nViolets are blue',
};

export const States: StoryFn<typeof TextAreaInput> = () => (
  <PropsVariationSection
    component={TextAreaInput}
    common={{ onChange: () => {} }}
    xAxis={{
      'default': {},
      'with placeholder': { placeholder: 'Placeholder' },
      'with value': { value: 'Value' },
      'with icon': { addon: <Icon name='edit' size='x20' />, value: 'Value' },
    }}
    yAxis={{
      'default': {},
      'hover': { className: 'hover' },
      'active': { className: 'active' },
      'focus': { className: 'focus' },
      'disabled': { disabled: true },
      'errored': { error: 'Error' },
      'errored + hover': { className: 'hover', error: 'Error' },
      'errored + active': { className: 'active', error: 'Error' },
      'errored + focus': { className: 'focus', error: 'Error' },
    }}
  />
);
