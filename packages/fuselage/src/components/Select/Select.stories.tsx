import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import type { SelectOption } from '../..';
import { Select } from '../..';

const options: SelectOption[] = Array.from({
  length: 12,
}).map((_, i) => [`${i + 1}`, `a test ${i + 1}`]);

export default {
  title: 'Inputs/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'An input for selection of options.',
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
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const TemplateControlled: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = React.useState<React.Key>('3');

  return <Select {...args} value={value} onChange={setValue as any} />;
};

export const Default: ComponentStory<typeof Select> = Template.bind({});
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

export const Error: ComponentStory<typeof Select> = Template.bind({});
Error.args = {
  'aria-label': 'Error select',
  'error': 'Error',
  'placeholder': 'Placeholder here...',
  options,
};

export const Disabled: ComponentStory<typeof Select> = Template.bind({});
Disabled.args = {
  'aria-label': 'Disabled select',
  'disabled': true,
  'placeholder': 'Placeholder here...',
  options,
};

export const NoPlaceholder: ComponentStory<typeof Select> = Template.bind({});
NoPlaceholder.args = {
  'aria-label': 'No placeholder select',
  options,
};
