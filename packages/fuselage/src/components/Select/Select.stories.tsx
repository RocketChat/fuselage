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
import { SelectV2, Select } from '../..';

const options: SelectOption[] = Array.from({
  length: 25,
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
const Template_V2: ComponentStory<typeof SelectV2> = (args) => (
  <SelectV2 {...args} />
);

export const Default: ComponentStory<typeof Select> = Template.bind({});
Default.args = {
  placeholder: 'Placeholder here...',
  options,
};
export const Select_V2 = Template_V2.bind({});
Select_V2.args = {
  placeholder: 'Placeholder here...',
  options,
};

export const Error: ComponentStory<typeof Select> = Template.bind({});
Error.args = {
  error: 'Error',
  placeholder: 'Placeholder here...',
  options,
};

export const Disabled: ComponentStory<typeof Select> = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: 'Placeholder here...',
  options,
};

export const NoPlaceholder: ComponentStory<typeof Select> = Template.bind({});
NoPlaceholder.args = {
  options,
};
