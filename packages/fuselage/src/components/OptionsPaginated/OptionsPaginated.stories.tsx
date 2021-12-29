import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import { ComponentMeta } from '@storybook/react';
import React from 'react';

import { OptionsPaginated, CheckOption } from '.';
import { Box } from '..';
import Option from '../Options/Option';

const options: { value: number; label: string; selected: boolean }[] =
  Array.from({ length: 90 }).map((_, i) => ({
    value: i + 1,
    label: `a teste ${i + 1}`,
    selected: i === 0,
  }));

export default {
  title: 'Misc/Options/OptionsPaginated_new',
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

const Template = (args) => (
  <Box position='relative' maxWidth={250}>
    <OptionsPaginated {...args} ref={React.createRef()} options={options} />
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
  value: [1],
  renderItem: CheckOption,
};
CheckOptionStory.storyName = 'CheckOption';
