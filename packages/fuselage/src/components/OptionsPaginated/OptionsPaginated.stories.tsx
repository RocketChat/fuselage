import type { Meta, StoryFn } from '@storybook/react';
import type { ComponentProps } from 'react';
import { createRef } from 'react';

import Box from '../Box';
import Option from '../Option';
import { CheckOption, OptionsPaginated } from './OptionsPaginated';

export default {
  title: 'Navigation/Options/OptionsPaginated',
  component: OptionsPaginated,
} satisfies Meta<typeof OptionsPaginated>;

const options: ComponentProps<typeof OptionsPaginated>['options'] = Array.from({
  length: 90,
}).map((_: unknown, i: number) => ({
  value: 1 + i,
  label: `a test ${i + 1}`,
}));

const Template: StoryFn<typeof OptionsPaginated> = (args) => (
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
