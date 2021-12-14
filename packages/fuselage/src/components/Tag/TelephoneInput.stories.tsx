import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Icon, TelephoneInput } from '../..';
import { PropsVariationSection } from '../../../.storybook/helpers';

export default {
  title: 'Forms/Inputs/TelephoneInput_new',
  component: TelephoneInput,
  parameters: {
    docs: {
      description: {
        component: 'An input for telephone numbers.',
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Stories title={'Props from InputBox'} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof TelephoneInput>;

const Template: ComponentStory<typeof TelephoneInput> = (args) => (
  <TelephoneInput {...args} />
);

export const Default: ComponentStory<typeof TelephoneInput> = Template.bind({});

export const WithIconAddon: ComponentStory<typeof TelephoneInput> =
  Template.bind({});
WithIconAddon.args = {
  addon: <Icon name='send' size='x20' />,
};

export const Invalid: ComponentStory<typeof TelephoneInput> = Template.bind({});
Invalid.args = {
  error: 'Error',
};

export const Disabled: ComponentStory<typeof TelephoneInput> = Template.bind(
  {}
);
Disabled.args = {
  disabled: true,
};

export const WithPlaceholder: ComponentStory<typeof TelephoneInput> =
  Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const WithValue: ComponentStory<typeof TelephoneInput> = Template.bind(
  {}
);
WithValue.args = {
  defaultValue: '+1 (213) 724-2528',
};

export const States: ComponentStory<typeof TelephoneInput> = () => (
  <PropsVariationSection
    component={TelephoneInput}
    common={{ onChange: () => {} }}
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
);
