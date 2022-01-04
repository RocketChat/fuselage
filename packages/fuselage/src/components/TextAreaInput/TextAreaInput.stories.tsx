import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Icon, TextAreaInput } from '../..';
import { PropsVariationSection } from '../../../.storybook/helpers';

export default {
  title: 'Forms/Inputs/TextAreaInput',
  component: TextAreaInput,
  parameters: {
    docs: {
      description: {
        component: 'An input for multi-line plain-text editing.',
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
} as ComponentMeta<typeof TextAreaInput>;

const Template: ComponentStory<typeof TextAreaInput> = (args) => (
  <TextAreaInput {...args} />
);

export const Default: ComponentStory<typeof TextAreaInput> = Template.bind({});

export const WithIconAddon: ComponentStory<typeof TextAreaInput> =
  Template.bind({});
WithIconAddon.args = {
  addon: <Icon name='send' size='x20' />,
};

export const Invalid: ComponentStory<typeof TextAreaInput> = Template.bind({});
Invalid.args = {
  error: 'Error',
};

export const Disabled: ComponentStory<typeof TextAreaInput> = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithPlaceholder: ComponentStory<typeof TextAreaInput> =
  Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const WithValue: ComponentStory<typeof TextAreaInput> = Template.bind(
  {}
);
WithValue.args = {
  defaultValue: 'Roses are red\nViolets are blue',
};

export const States: ComponentStory<typeof TextAreaInput> = () => (
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
