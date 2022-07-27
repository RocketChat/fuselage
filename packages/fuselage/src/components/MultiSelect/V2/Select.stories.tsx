import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Select, SelectItem } from './Select';

export default {
  title: 'Inputs/MultiSelect/V2',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'An input for selection of options.',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title={''} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({
  placeholder,
  onSelectionChange,
  defaultSelectedKey,
}) => (
  <Select
    label='Favorite Animal'
    placeholder={placeholder}
    onSelectionChange={onSelectionChange}
    defaultSelectedKey={defaultSelectedKey}
  >
    <SelectItem key={1}>a teste 1</SelectItem>
    <SelectItem key={2}>a teste 2</SelectItem>
    <SelectItem key={3}>a teste 3</SelectItem>
    <SelectItem key={4}>a teste 4</SelectItem>
    <SelectItem key={5}>a teste 5</SelectItem>
    <SelectItem key={6}>a teste 6</SelectItem>
    <SelectItem key={7}>a teste 7</SelectItem>
    <SelectItem key={8}>a teste 8</SelectItem>
    <SelectItem key={9}>a teste 9</SelectItem>
    <SelectItem key={10}>a teste 10</SelectItem>
    <SelectItem key={11}>a teste 11</SelectItem>
    <SelectItem key={12}>a teste 12</SelectItem>
    <SelectItem key={13}>a teste 13</SelectItem>
  </Select>
);

export const Default: ComponentStory<typeof Select> = Template.bind({});
Default.args = {
  placeholder: 'Placeholder here...',
};
Default.argTypes = { onSelectionChange: { action: 'change' } };
