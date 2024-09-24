import type { StoryFn, Meta } from '@storybook/react';

import { PropsVariationSection } from '../../../.storybook/helpers';
import { Icon } from '../Icon';
import { NumberInput } from './NumberInput';

export default {
  title: 'Inputs/NumberInput',
  component: NumberInput,
} satisfies Meta<typeof NumberInput>;

const Template: StoryFn<typeof NumberInput> = (args) => (
  <NumberInput aria-label='number' {...args} />
);

export const Default: StoryFn<typeof NumberInput> = Template.bind({});

export const WithIconAddon: StoryFn<typeof NumberInput> = Template.bind({});
WithIconAddon.args = {
  addon: <Icon name='send' size='x20' />,
};

export const Invalid: StoryFn<typeof NumberInput> = Template.bind({});
Invalid.args = {
  error: 'Error',
};
export const Disabled: StoryFn<typeof NumberInput> = Template.bind({});
Disabled.args = {
  disabled: true,
};
export const WithPlaceholder: StoryFn<typeof NumberInput> = Template.bind({});
WithPlaceholder.args = {
  defaultValue: 1024,
};

export const States: StoryFn<typeof NumberInput> = () => (
  <>
    <PropsVariationSection
      component={NumberInput}
      common={{ 'onChange': () => {}, 'aria-label': 'number' }}
      xAxis={{
        'default': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 1024 },
        'with icon': {
          addon: <Icon name='discover' size='x20' />,
          value: 1024,
        },
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
    <PropsVariationSection
      component={NumberInput}
      common={{ 'onChange': () => {}, 'small': true, 'aria-label': 'number' }}
      xAxis={{
        'small': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 1024 },
        'with icon': {
          addon: <Icon name='discover' size='x20' />,
          value: 1024,
        },
      }}
      yAxis={{
        'small': {},
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
  </>
);
