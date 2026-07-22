import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Box } from '../Box';
import { Margins } from '../Margins';

import Tooltip from './Tooltip';

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  argTypes: {
    children: {
      control: 'text',
      description: 'Tooltip content.',
    },
    variation: {
      control: 'select',
      options: ['dark', 'light'],
      description: 'Color kind applied to the tooltip.',
      table: { defaultValue: { summary: 'dark' } },
    },
    placement: {
      control: 'select',
      options: [
        'top-start',
        'top-middle',
        'top-end',
        'bottom-start',
        'bottom-middle',
        'bottom-end',
        'top',
        'left',
        'bottom',
        'right',
        null,
      ],
      description:
        'Direction the tooltip arrow points, relative to its anchor.',
    },
  },
} satisfies Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: 'An example tooltip',
  },
};

export const LightTooltip: Story = {
  args: {
    variation: 'light',
    children: 'An example tooltip',
  },
};

export const ArrowPositioning: Story = {
  render: () => (
    <Margins inline='neg-x8'>
      <Box>
        <Margins all='x8'>
          <Tooltip children='Tooltip' placement='bottom-start' />
          <Tooltip children='Tooltip' placement='bottom-middle' />
          <Tooltip children='Tooltip' placement='bottom-end' />
        </Margins>
      </Box>
      <Box>
        <Margins all='x8'>
          <Tooltip children='Tooltip' placement='right' />
          <Tooltip children='Tooltip' placement={null} />
          <Tooltip children='Tooltip' placement='left' />
        </Margins>
      </Box>
      <Box>
        <Margins all='x8'>
          <Tooltip children='Tooltip' placement='top-start' />
          <Tooltip children='Tooltip' placement='top-middle' />
          <Tooltip children='Tooltip' placement='top-end' />
        </Margins>
      </Box>
    </Margins>
  ),
};
