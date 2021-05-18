import React from 'react';

import { Box, Margins, Tooltip } from '../..';

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  parameters: {
    jest: ['Tooltip.spec.tsx'],
  },
};

export const Default = () => <Tooltip>A example tooltip</Tooltip>;

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
