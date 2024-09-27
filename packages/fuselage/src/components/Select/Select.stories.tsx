import type { StoryFn, Meta } from '@storybook/react';
import type { Key } from 'react';
import { useState } from 'react';

import PropsVariationSection from '../../../.storybook/PropsVariation';
import { Select } from './Select';
import type { SelectOption } from './SelectLegacy';

export default {
  title: 'Inputs/Select',
  component: Select,
} satisfies Meta<typeof Select>;

const options: SelectOption[] = Array.from({
  length: 12,
}).map((_, i) => [`${i + 1}`, `a test ${i + 1}`]);

const Template: StoryFn<typeof Select> = (args) => (
  <Select aria-label='select' {...args} />
);

const TemplateControlled: StoryFn<typeof Select> = (args) => {
  const [value, setValue] = useState<Key>('3');

  return (
    <Select
      aria-label='select'
      {...args}
      value={value}
      onChange={setValue as any}
    />
  );
};

export const Default: StoryFn<typeof Select> = Template.bind({});
Default.args = {
  'placeholder': 'Placeholder here...',
  options,
  'aria-label': 'Select',
};

export const Controlled = TemplateControlled.bind({});
Controlled.args = {
  'aria-label': 'Controlled select',
  options,
};

export const Error: StoryFn<typeof Select> = Template.bind({});
Error.args = {
  'aria-label': 'Error select',
  'error': 'Error',
  'placeholder': 'Placeholder here...',
  options,
};

export const Disabled: StoryFn<typeof Select> = Template.bind({});
Disabled.args = {
  'aria-label': 'Disabled select',
  'disabled': true,
  'placeholder': 'Placeholder here...',
  options,
};

export const NoPlaceholder: StoryFn<typeof Select> = Template.bind({});
NoPlaceholder.args = {
  'aria-label': 'No placeholder select',
  options,
};

export const States = () => (
  <>
    <PropsVariationSection
      component={(props) => (
        <Select options={options} aria-label='select' {...props} />
      )}
      common={{
        onChange: () => {},
      }}
      xAxis={{
        'default': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'small': { small: true },
        'small with placeholder': { small: true, placeholder: 'Placeholder' },
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
  </>
);
