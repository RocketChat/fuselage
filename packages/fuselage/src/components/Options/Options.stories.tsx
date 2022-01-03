import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Options } from '.';
import { Box, Menu } from '..';
import { CheckOption } from '../OptionsPaginated';
import Option from './Option';

const options: [unknown, string, boolean?][] = [
  [1, 'a teste 1'],
  [2, 'b teste 2'],
  [3, 'c teste 3', true],
  [
    4,
    'd testeadsasdasdasdasdjhasjfhasdkjfhaskdfjhkasjdfhkasjdhfkasjdhfkasjdhfkasjdhfkasdjhfkasdjhfaksjdfhkasjdh 4',
  ],
];

export default {
  title: 'Misc/Options/Options_new',
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
    <Options {...args} ref={React.createRef()} options={options} />
  </Box>
);

export const Default: ComponentStory<typeof Options> = Template.bind({});
Default.args = {
  cursor: 1,
};

export const OptionStory: ComponentStory<typeof Options> = Template.bind({});
OptionStory.args = {
  renderItem: Option,
  cursor: 1,
};
OptionStory.storyName = 'Option';

export const CheckOptionStory: ComponentStory<typeof Options> = Template.bind(
  {}
);
CheckOptionStory.args = {
  renderItem: CheckOption,
  value: ['1'],
  cursor: 0,
};
CheckOptionStory.storyName = 'CheckOption';
