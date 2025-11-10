import type { StoryFn, Meta } from '@storybook/react-webpack5';
import { createRef, type ReactNode } from 'react';

import Box from '../Box';
import { Option, CheckOption } from '../Option';

import { Options, type OptionType } from '.';

export default {
  title: 'Navigation/Options',
  component: Options,
} satisfies Meta<typeof Options<string | number, ReactNode>>;

const options: OptionType[] = [
  [1, 'a teste 1'],
  [2, 'b teste 2'],
  [3, 'c teste 3', true],
  [
    4,
    'd testeadsasdasdasdasdjhasjfhasdkjfhaskdfjhkasjdfhkasjdhfkasjdhfkasjdhfkasjdhfkasdjhfkasdjhfaksjdfhkasjdh 4',
  ],
];

const Template: StoryFn<typeof Options<string | number, ReactNode>> = (
  args,
) => (
  <Box position='relative' maxWidth={250}>
    <Options {...args} ref={createRef()} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  cursor: 1,
  options,
};

export const OptionStory = Template.bind({});
OptionStory.args = {
  renderItem: Option,
  cursor: 1,
  options,
};
OptionStory.storyName = 'Option';

export const CheckOptionStory = Template.bind({});
CheckOptionStory.args = {
  renderItem: CheckOption,
  value: ['1'],
  cursor: 0,
  options,
};
CheckOptionStory.storyName = 'CheckOption';

export const EmptyOptions = Template.bind({});
EmptyOptions.args = {
  cursor: 1,
  options: [],
};

export const CustomEmpty = Template.bind({});
CustomEmpty.args = {
  cursor: 1,
  options: [],
  customEmpty: 'Custom empty placeholder',
};
