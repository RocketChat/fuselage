import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Select, SelectFiltered, SelectOptions } from '../..';

const options: SelectOptions = Array.from({
  length: 10,
}).map((_, i) => [`${i + 1}`, `a teste ${i + 1}`]);

const optionsEllipses: SelectOptions = [
  ['11', 'Very very very very very very very very very large text'],
  ...options,
];

export default {
  title: 'Forms/Select',
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

export const WithFilter: ComponentStory<typeof Select> =
  TemplateWithFilter.bind({});
WithFilter.args = {
  width: '250px',
  placeholder: 'Placeholder here...',
  options,
};

export const WithFilterAndEllipses: ComponentStory<typeof Select> =
  TemplateWithFilter.bind({});
WithFilterAndEllipses.args = {
  width: '250px',
  placeholder: 'Placeholder here...',
  options: optionsEllipses,
  value: '11',
};

export const WithEmptyOptions: ComponentStory<typeof Select> =
  TemplateWithFilter.bind({});
WithEmptyOptions.args = {
  width: '250px',
  placeholder: 'Placeholder here...',
  options: [],
};

export const CustomEmpty: ComponentStory<typeof Select> =
  TemplateWithFilter.bind({});
CustomEmpty.args = {
  width: '250px',
  placeholder: 'Placeholder here...',
  options: [],
  customEmpty: 'Custom empty placeholder',
};
