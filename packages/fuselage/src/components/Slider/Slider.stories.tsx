import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';
import React, { useState } from 'react';

import Box from '../Box';
import { Slider } from './Slider';

export default {
  title: 'Inputs/Slider',
  component: Slider,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Stories title='' />
          <ArgsTable />
        </>
      ),
    },
  },
  args: {
    'aria-label': 'Slider',
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => (
  <Box width='500px' minHeight='100%' display='flex' alignItems='center'>
    <Slider {...args} />
  </Box>
);

export const SliderPlayExample: ComponentStory<typeof Slider> = Template.bind(
  {}
);
SliderPlayExample.args = {
  maxValue: 50,
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

export const Default: ComponentStory<typeof Slider> = Template.bind({});
Default.args = {
  maxValue: 500,
} as const;

export const Small: ComponentStory<typeof Slider> = Template.bind({});
Small.args = {
  small: true,
} as const;

export const Large: ComponentStory<typeof Slider> = Template.bind({});
Large.args = {
  large: true,
} as const;

export const NoOutput: ComponentStory<typeof Slider> = Template.bind({});
NoOutput.args = {
  showOutput: false,
} as const;

export const WithLabel: ComponentStory<typeof Slider> = Template.bind({});
WithLabel.args = {
  label: 'Range',
} as const;

export const Vertical: ComponentStory<typeof Slider> = Template.bind({});
Vertical.args = {
  label: 'Range',

  orientation: 'vertical',
} as const;

export const VerticalMultiThumb: ComponentStory<typeof Slider> = Template.bind(
  {}
);
VerticalMultiThumb.args = {
  label: 'Range',

  orientation: 'vertical',
  multiThumb: true,
} as const;

export const VerticalSmall: ComponentStory<typeof Slider> = Template.bind({});
VerticalSmall.args = {
  small: true,
  orientation: 'vertical',
} as const;

export const WithDefaultValue: ComponentStory<typeof Slider> = Template.bind(
  {}
);
WithDefaultValue.args = {
  defaultValue: 25,
} as const;

export const MultiThumb: ComponentStory<typeof Slider> = Template.bind({});
MultiThumb.args = {
  multiThumb: true,
  maxValue: 500,
  step: 10,
} as const;

export const ControlledValue: ComponentStory<typeof Slider> = () => {
  const [value, setValue] = useState<number>(20);
  return (
    <Box width='500px' height='80px' display='flex' alignItems='center'>
      <Slider label='Range' value={value} onChange={setValue} />
    </Box>
  );
};

export const NumberFormatOptions: ComponentStory<typeof Slider> = () => (
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
