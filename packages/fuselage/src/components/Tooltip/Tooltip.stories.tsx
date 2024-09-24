import type { StoryFn, Meta } from '@storybook/react';

import Box from '../Box';
import Margins from '../Margins';
import Tooltip from './Tooltip';

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export const Default: StoryFn<typeof Tooltip> = () => (
  <Tooltip>An example tooltip</Tooltip>
);
export const LightTooltip: StoryFn<typeof Tooltip> = () => (
  <Tooltip variation='light'>An example tooltip</Tooltip>
);

export const ArrowPositioning = () => (
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
);
