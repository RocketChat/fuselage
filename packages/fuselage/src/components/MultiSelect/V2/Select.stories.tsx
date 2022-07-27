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
import { Item } from 'react-stately';

import { Select } from './Select';

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
}) => (
  <div
    style={{
      height: '100vh',
      width: '100vw',
    }}
  >
    <Select
      label='Favorite Animal'
      placeholder={placeholder}
      onSelectionChange={onSelectionChange}
      defaultSelectedKey={1}
    >
      <Item key={1}>a teste 1</Item>
      <Item key={2}>a teste 2</Item>
      <Item key={3}>a teste 3</Item>
      <Item key={4}>a teste 4</Item>
      <Item key={5}>a teste 5</Item>
      <Item key={6}>a teste 6</Item>
      <Item key={7}>a teste 7</Item>
      <Item key={8}>a teste 8</Item>
      <Item key={9}>a teste 9</Item>
      <Item key={10}>a teste 10</Item>
      <Item key={11}>a teste 11</Item>
      <Item key={12}>a teste 12</Item>
      <Item key={13}>a teste 13</Item>
    </Select>
  </div>
);

export const Default: ComponentStory<typeof Select> = Template.bind({});
Default.args = {
  placeholder: 'Placeholder here...',
};
Default.argTypes = { onSelectionChange: { action: 'change' } };
