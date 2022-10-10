import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { ComponentProps } from 'react';
import React, { createRef } from 'react';

import { OptionsPaginated, CheckOption } from '.';
import { Box } from '..';
import Option from '../Option';
// ComponentProps<typeof Option.Icon>['name']
const options: ComponentProps<typeof OptionsPaginated>['options'] = Array.from({
  length: 90,
}).map((_: unknown, i: number) => ({
  value: 1 + i,
  label: `a test ${i + 1}`,
}));

export default {
  title: 'Navigation/Options/OptionsPaginated',
  component: OptionsPaginated,
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
        </>
      ),
    },
  },
} as ComponentMeta<typeof OptionsPaginated>;

const Template: ComponentStory<typeof OptionsPaginated> = (args) => (
  <Box position='relative' maxWidth={250}>
    <OptionsPaginated {...args} ref={createRef()} options={options} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  cursor: 1,
};
export const OptionStory = Template.bind({});
OptionStory.args = {
  cursor: 1,
  renderItem: Option,
};
OptionStory.storyName = 'Option';

export const CheckOptionStory = Template.bind({});
CheckOptionStory.args = {
  cursor: 0,
  value: ['1'],
  renderItem: CheckOption,
};
CheckOptionStory.storyName = 'CheckOption';
