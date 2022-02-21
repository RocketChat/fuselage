import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { createRef } from 'react';

import type { OptionType } from '.';
import { Options } from '.';
import type { Menu } from '..';
import { Box } from '..';
import { CheckOption } from './CheckOption';
import Option from './Option';

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
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Options> = (args) => (
  <Box position='relative' maxWidth={250}>
    <Options {...args} ref={createRef()} />
  </Box>
);

export const Default: ComponentStory<typeof Options> = Template.bind({});
Default.args = {
  cursor: 1,
  options,
};

export const OptionStory: ComponentStory<typeof Options> = Template.bind({});
OptionStory.args = {
  renderItem: Option,
  cursor: 1,
  options,
};
OptionStory.storyName = 'Option';

export const CheckOptionStory: ComponentStory<typeof Options> = Template.bind(
  {}
);
CheckOptionStory.args = {
  renderItem: CheckOption,
  value: ['1'],
  cursor: 0,
  options,
};
CheckOptionStory.storyName = 'CheckOption';

export const EmptyOptions: ComponentStory<typeof Options> = Template.bind({});
EmptyOptions.args = {
  cursor: 1,
  options: [],
};

export const CustomEmpty: ComponentStory<typeof Options> = Template.bind({});
CustomEmpty.args = {
  cursor: 1,
  options: [],
  customEmpty: 'Custom empty placeholder',
};
