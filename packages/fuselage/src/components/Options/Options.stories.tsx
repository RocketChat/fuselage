import type { StoryFn, Meta } from '@storybook/react';
import React, { createRef } from 'react';

import type { OptionType } from '.';
import { Options } from '.';
import { Box } from '..';
import Option from '../Option';
import { CheckOption } from '../Option/CheckOption';

const options: OptionType[] = [
  [1, 'a teste 1'],
  [2, 'b teste 2'],
  [3, 'c teste 3', true],
  [
    4,
    'd testeadsasdasdasdasdjhasjfhasdkjfhaskdfjhkasjdfhkasjdhfkasjdhfkasjdhfkasjdhfkasdjhfkasdjhfaksjdfhkasjdh 4',
  ],
];

export default {
  title: 'Navigation/Options',
  component: Options,
  parameters: {
    docs: {
      description: {
        component: 'An input for selection of options.',
      },
    },
  },
} as Meta<typeof Options>;

const Template: StoryFn<typeof Options> = (args) => (
  <Box position='relative' maxWidth={250}>
    <Options {...args} ref={createRef()} />
  </Box>
);

export const Default: StoryFn<typeof Options> = Template.bind({});
Default.args = {
  cursor: 1,
  options,
};

export const OptionStory: StoryFn<typeof Options> = Template.bind({});
OptionStory.args = {
  renderItem: Option,
  cursor: 1,
  options,
};
OptionStory.storyName = 'Option';

export const CheckOptionStory: StoryFn<typeof Options> = Template.bind({});
CheckOptionStory.args = {
  renderItem: CheckOption,
  value: ['1'],
  cursor: 0,
  options,
};
CheckOptionStory.storyName = 'CheckOption';

export const EmptyOptions: StoryFn<typeof Options> = Template.bind({});
EmptyOptions.args = {
  cursor: 1,
  options: [],
};

export const CustomEmpty: StoryFn<typeof Options> = Template.bind({});
CustomEmpty.args = {
  cursor: 1,
  options: [],
  customEmpty: 'Custom empty placeholder',
};
