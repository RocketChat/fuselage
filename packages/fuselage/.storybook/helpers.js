import React from 'react';

import { Box, Text } from '../src';

export function PropsVariationSection({ component: Component, common = {}, xAxis = {}, yAxis = {} }) {
  return <Box is='table' style={{ borderCollapse: 'collapse', margin: '1rem auto' }}>
    <Box is='thead'>
      <Box is='tr'>
        <Box is='th' />
        {Object.keys(xAxis).map((xVariation, key) => <Text key={key} caption hintColor is='th'>{xVariation}</Text>)}
      </Box>
    </Box>
    <Box is='tbody'>
      {Object.entries(yAxis).map(([yVariation, yProps], y) => (
        <Box key={y} is='tr'>
          <Text caption hintColor is='th'>{yVariation}</Text>
          {Object.values(xAxis).map((xProps, x) => <Box key={x} is='td' style={{ margin: 0, padding: '0.5rem 1rem' }}>
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Component {...common} {...xProps} {...yProps} />
            </Box>
          </Box>)}
        </Box>
      ))}
    </Box>
  </Box>;
}
