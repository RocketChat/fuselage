import type { StoryFn, Meta } from '@storybook/react';

import { PropsVariationSection } from '../../../.storybook/helpers';
import { Icon } from '../Icon';
import { TelephoneInput } from './TelephoneInput';

export default {
  title: 'Inputs/TelephoneInput',
  component: TelephoneInput,
} satisfies Meta<typeof TelephoneInput>;

const Template: StoryFn<typeof TelephoneInput> = (args) => (
  <TelephoneInput aria-label='telephone' {...args} />
);

export const Default: StoryFn<typeof TelephoneInput> = Template.bind({});

export const WithIconAddon = Template.bind({});
WithIconAddon.args = {
  addon: <Icon name='send' size='x20' />,
};

export const Invalid = Template.bind({});
Invalid.args = {
  error: 'Error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const WithValue = Template.bind({});
WithValue.args = {
  defaultValue: '+1 (213) 724-2528',
};

export const States: StoryFn<typeof TelephoneInput> = () => (
  <>
    <PropsVariationSection
      component={TelephoneInput}
      common={{ 'onChange': () => {}, 'aria-label': 'telephone' }}
      xAxis={{
        'default': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: '+1234567890' },
        'with icon': {
          addon: <Icon name='mobile' size='x20' />,
          value: '+1234567890',
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
      component={TelephoneInput}
      common={{
        'onChange': () => {},
        'small': true,
        'aria-label': 'telephone',
      }}
      xAxis={{
        'small': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: '+1234567890' },
        'with icon': {
          addon: <Icon name='mobile' size='x20' />,
          value: '+1234567890',
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
