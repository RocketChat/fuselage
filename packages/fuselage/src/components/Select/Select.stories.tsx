import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Select, SelectFiltered } from '../..';

const options: readonly (readonly [string, string])[] = Array.from({
  length: 10,
}).map((_, i) => [`${i + 1}`, `a teste ${i + 1}`]);

const optionsEllipses: readonly (readonly [string, string])[] = [
  ['11', 'Very very very very very very very very very large text'],
  ...options,
];

export default {
  title: 'Forms/Select_new',
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
          <Stories title={''} />
          <ArgsTable />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default: ComponentStory<typeof Select> = Template.bind({});
Default.args = {
  width: '250px',
  placeholder: 'Placeholder here...',
  options,
};

export const Error: ComponentStory<typeof Select> = Template.bind({});
Error.args = {
  width: '250px',
  error: 'Error',
  placeholder: 'Placeholder here...',
  options,
};

export const Disabled: ComponentStory<typeof Select> = Template.bind({});
Disabled.args = {
  width: '250px',
  disabled: true,
  placeholder: 'Placeholder here...',
  options,
};

export const NoPlaceholder: ComponentStory<typeof Select> = Template.bind({});
NoPlaceholder.args = {
  width: '250px',
  options,
};

const TemplateWithFilter: ComponentStory<typeof Select> = (args) => (
  <SelectFiltered {...args} />
);

export const SelectWithFilter: ComponentStory<typeof Select> =
  TemplateWithFilter.bind({});
SelectWithFilter.args = {
  width: '250px',
  placeholder: 'Placeholder here...',
  options,
};

export const SelectWithFilterAndEllipses: ComponentStory<typeof Select> =
  TemplateWithFilter.bind({});
SelectWithFilterAndEllipses.args = {
  width: '250px',
  placeholder: 'Placeholder here...',
  options: optionsEllipses,
  value: 11,
};

export const SelectWithFilterAndError: ComponentStory<typeof Select> =
  TemplateWithFilter.bind({});
SelectWithFilterAndError.args = {
  width: '250px',
  error: 'Error',
  placeholder: 'Placeholder here...',
  options,
};

export const SelectWithFilterAndDisabled: ComponentStory<typeof Select> =
  TemplateWithFilter.bind({});
SelectWithFilterAndDisabled.args = {
  width: '250px',
  error: 'Error',
  disabled: true,
  placeholder: 'Placeholder here...',
  options,
};
