import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Stack } from 'tamagui';
import Slider from './Slider';

const meta = {
  title: 'INPUTS/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'Current value (controlled)',
    },
    defaultValue: {
      control: 'number',
      description: 'Default value (uncontrolled)',
    },
    minValue: {
      control: 'number',
      description: 'Minimum value',
    },
    maxValue: {
      control: 'number',
      description: 'Maximum value',
    },
    step: {
      control: 'number',
      description: 'Step increment',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    showOutput: {
      control: 'boolean',
      description: 'Whether to show the value output',
    },
    multiThumb: {
      control: 'boolean',
      description: 'Whether to show multiple thumbs for range selection',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Slider orientation',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the slider is disabled',
    },
    formatOptions: {
      control: 'object',
      description: 'Number formatting options',
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => (
  <Stack width={300} ai="center">
    <Slider {...args} />
  </Stack>
);

const TemplateVertical = (args: any) => (
  <Stack height={200} ai="center">
    <Slider {...args} />
  </Stack>
);

export const SliderPlayExample: Story = {
  args: {
    'aria-label': 'aria-range-label',
    maxValue: 50,
  },
  render: Template,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: Template,
};

export const Default: Story = {
  args: {
    'aria-label': 'aria-range-label',
    maxValue: 500,
  },
  render: Template,
};

export const NoOutput: Story = {
  args: {
    showOutput: false,
    'aria-label': 'range',
  },
  render: Template,
};

export const WithLabel: Story = {
  args: {
    label: 'Range',
    'aria-label': 'range',
  },
  render: Template,
};

export const Vertical: Story = {
  args: {
    label: 'Range',
    'aria-label': 'range',
    orientation: 'vertical',
  },
  render: TemplateVertical,
};

export const VerticalMultiThumb: Story = {
  args: {
    label: 'Range',
    'aria-label': 'range',
    orientation: 'vertical',
    multiThumb: true,
  },
  render: TemplateVertical,
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 25,
    'aria-label': 'range',
  },
  render: Template,
};

export const MultiThumb: Story = {
  args: {
    'aria-label': 'range',
    multiThumb: true,
    maxValue: 500,
    step: 10,
  },
  render: Template,
};

export const ControlledValue: Story = {
  render: () => {
    const [value, setValue] = useState<number>(20);
    const handleChange = (newValue: number | [number, number]) => {
      if (typeof newValue === 'number') {
        setValue(newValue);
      }
    };
    return (
      <Stack width={500} height={80} ai="center">
        <Slider label="Range" value={value} onChange={handleChange} />
      </Stack>
    );
  },
};

export const NumberFormatOptions: Story = {
  render: () => (
    <Stack width={500} height={80} ai="center">
      <Slider
        multiThumb
        label="Price range"
        defaultValue={[100, 350]}
        maxValue={500}
        step={10}
        formatOptions={{ style: 'currency', currency: 'USD' }}
      />
    </Stack>
  ),
};

