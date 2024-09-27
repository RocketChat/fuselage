import type { StoryFn, Meta } from '@storybook/react';

import { SelectInputOption } from '.';
import { PropsVariationSection } from '../../../.storybook/helpers';
import { Icon } from '../Icon';
import { SelectInput } from './SelectInput';

export default {
  title: 'Inputs/SelectInput',
  component: SelectInput,
  subcomponents: { SelectInputOption },
} satisfies Meta<typeof SelectInput>;

const Template: StoryFn<typeof SelectInput> = (args) => (
  <SelectInput aria-label='select' {...args}>
    <SelectInputOption value='a'>Item A</SelectInputOption>
    <SelectInputOption value='b'>Item B</SelectInputOption>
    <SelectInputOption value='c'>Item C</SelectInputOption>
  </SelectInput>
);

export const Default: StoryFn<typeof SelectInput> = Template.bind({});

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
  htmlSize: 3,
  value: ['b', 'c'],
};

export const WithAddon = Template.bind({});
WithAddon.args = {
  addon: <Icon name='discover' size='x20' />,
};

export const MultipleWithAddon = Template.bind({});
MultipleWithAddon.args = {
  addon: <Icon name='discover' size='x20' />,
  multiple: true,
  htmlSize: 3,
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
  defaultValue: 'b',
};

export const States: StoryFn<typeof SelectInput> = () => (
  <>
    <PropsVariationSection
      component={SelectInput}
      common={{
        'aria-label': 'select',
        'children': (
          <>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </>
        ),
        'onChange': () => {},
      }}
      xAxis={{
        'default': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 'b' },
        'multiple': { multiple: true, size: 3 },
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
      component={SelectInput}
      common={{
        'aria-label': 'select',
        'children': (
          <>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </>
        ),
        'onChange': () => {},
        'small': true,
      }}
      xAxis={{
        'small': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 'b' },
        'multiple': { multiple: true, size: 3 },
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
