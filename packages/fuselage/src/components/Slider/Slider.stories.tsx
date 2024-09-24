import type { Meta, StoryFn } from '@storybook/react';
import { screen, userEvent } from '@storybook/test';
import { useState } from 'react';

import Box from '../Box';
import { Slider } from './Slider';

export default {
  title: 'Inputs/Slider',
  component: Slider,
} satisfies Meta<typeof Slider>;

const Template: StoryFn<typeof Slider> = (args) => (
  <Box width='x300' display='flex' alignItems='center'>
    <Slider {...args} />
  </Box>
);
const TemplateVertical: StoryFn<typeof Slider> = (args) => (
  <Box h='x200' display='flex' alignItems='center'>
    <Slider {...args} />
  </Box>
);

export const SliderPlayExample: StoryFn<typeof Slider> = Template.bind({});
SliderPlayExample.args = {
  'aria-label': 'aria-range-label',
  'maxValue': 50,
} as const;
SliderPlayExample.play = async () => {
  const slider = screen.getByRole<HTMLFormElement>('slider');
  userEvent.tab();
  await userEvent.type(slider, '{arrowright}'.repeat(50), {
    skipClick: true,
    delay: 1000,
  });
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Default: StoryFn<typeof Slider> = Template.bind({});
Default.args = {
  'aria-label': 'aria-range-label',
  'maxValue': 500,
} as const;

export const NoOutput: StoryFn<typeof Slider> = Template.bind({});
NoOutput.args = {
  'showOutput': false,
  'aria-label': 'range',
} as const;

export const WithLabel: StoryFn<typeof Slider> = Template.bind({});
WithLabel.args = {
  'label': 'Range',
  'aria-label': 'range',
} as const;

export const Vertical: StoryFn<typeof Slider> = TemplateVertical.bind({});
Vertical.args = {
  'label': 'Range',
  'aria-label': 'range',
  'orientation': 'vertical',
} as const;

export const VerticalMultiThumb: StoryFn<typeof Slider> = TemplateVertical.bind(
  {}
);
VerticalMultiThumb.args = {
  'label': 'Range',
  'aria-label': 'range',
  'orientation': 'vertical',
  'multiThumb': true,
} as const;

export const WithDefaultValue: StoryFn<typeof Slider> = Template.bind({});
WithDefaultValue.args = {
  'defaultValue': 25,
  'aria-label': 'range',
} as const;

export const MultiThumb: StoryFn<typeof Slider> = Template.bind({});
MultiThumb.args = {
  'aria-label': 'range',
  'multiThumb': true,
  'maxValue': 500,
  'step': 10,
} as const;

export const ControlledValue: StoryFn<typeof Slider> = () => {
  const [value, setValue] = useState<number>(20);
  return (
    <Box width='500px' height='80px' display='flex' alignItems='center'>
      <Slider label='Range' value={value} onChange={setValue} />
    </Box>
  );
};

export const NumberFormatOptions: StoryFn<typeof Slider> = () => (
  <Box width='500px' height='80px' display='flex' alignItems='center'>
    <Slider
      multiThumb
      label='Price range'
      defaultValue={[100, 350]}
      maxValue={500}
      step={10}
      formatOptions={{ style: 'currency', currency: 'USD' }}
    />
  </Box>
);
