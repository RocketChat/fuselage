import React from 'react';

import { Box, Text } from '../src';

export function PropsVariationSection({ component: Component, common = {}, xAxis = {}, yAxis = {} }) {
  return <Box is='table' marginBlock='x16' marginInline='auto' style={{ borderCollapse: 'collapse' }}>
    <Box is='thead'>
      <Box is='tr'>
        <Box is='th' />
        {Object.keys(xAxis).map((xVariation, key) =>
          <Box key={key} is='th' color='hint' textStyle='c1'>{xVariation}</Box>)}
      </Box>
    </Box>
    <Box is='tbody'>
      {Object.entries(yAxis).map(([yVariation, yProps], y) => (
        <Box key={y} is='tr'>
          <Box is='th' color='hint' textStyle='c1'>{yVariation}</Box>
          {Object.values(xAxis).map((xProps, x) => <Box key={x} is='td' margin='none' paddingBlock='x8' paddingInline='x16'>
            <Box display='flex' alignItems='center' justifyContent='center'>
              <Component {...common} {...xProps} {...yProps} />
            </Box>
          </Box>)}
        </Box>
      ))}
    </Box>
  </Box>;
}
