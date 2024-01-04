import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import type { OptionProps } from 'react-select';

import {
  Option,
  OptionAvatar,
  OptionDescription,
  OptionContent,
  Avatar,
  Field,
} from '..';
import AsyncSelectComponent from './AsyncSelect';
import SelectV3 from './SelectV3';

export default {
  title: 'Inputs/SelectV3',
  component: SelectV3,
  parameters: {
    docs: {
      description: {
        component:
          'An `ComboBox` allows users to toggle the display of sections of content.',
      },
    },
  },
} as ComponentMeta<typeof SelectV3>;

const OPTIONS = [
  { value: 'jack', label: 'LoremIpsumDolorIpsumDolumnnnn' },
  { value: 'lucy', label: 'LoremIpsumDolorIpsumDolumnnnn' },
  { value: 'Yiminghe', label: 'LoremIpsumDolorIpsumDolumnnnn' },
  {
    value: 'disabled',
    label: 'LoremIpsumDolorIpsumDolumnnnn',
    isDisabled: true,
  },
];

const Template: ComponentStory<typeof SelectV3> = (args) => (
  <Field>
    <Field.Label htmlFor='aria-example-input'>Meu Select</Field.Label>
    <SelectV3 inputId='aria-example-input' options={OPTIONS} {...args} />
  </Field>
);

export const Default: ComponentStory<typeof SelectV3> = Template.bind({});

const MyOption = (props: OptionProps) => {
  console.log(props);
  const { label, value, isFocused, isSelected, innerProps } = props;

  return (
    <Option
      focus={isFocused}
      selected={isSelected}
      data-qa-type='autocomplete-user-option'
      {...innerProps}
    >
      <OptionAvatar>
        <Avatar url='http://localhost:3000/avatar/room/GENERAL' size='x20' />
        {/* <UserAvatar username={value} size='x20' /> */}
      </OptionAvatar>
      <OptionContent>
        {label} <OptionDescription>({value})</OptionDescription>
      </OptionContent>
    </Option>
  );
};

export const Multi: ComponentStory<typeof SelectV3> = Template.bind({});
Multi.args = {
  isMulti: true,
  renderOption: MyOption,
  closeMenuOnSelect: false,
};

// export const AsyncSelect: ComponentStory<typeof SelectV3> = () => (
//   <AsyncSelectComponent options={OPTIONS} />
// );
