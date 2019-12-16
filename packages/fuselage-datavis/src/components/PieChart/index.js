import { ResponsivePie } from '@nivo/pie';
import { Box } from '@rocket.chat/fuselage';
import React from 'react';

const renderTooltip = ({ label, value }) => <Box textStyle='p1' textColor='default'>{value} {label}</Box>;

export function PieChart(props) {
  return <ResponsivePie
    margin={{ top: 0, right: 100, bottom: 0, left: 0 }}
    innerRadius={0.6}
    colors={[
      '#ffd031',
      '#2de0a5',
      '#1d74f5',
    ]}
    enableRadialLabels={false}
    enableSlicesLabels={false}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    legends={[
      {
        anchor: 'right',
        direction: 'column',
        itemDirection: 'left-to-right',
        symbolShape: 'square',
        itemWidth: 100,
        itemHeight: 24,
        itemTextColor: '#6c727a',
        symbolSize: 12,
      },
    ]}
    tooltip={renderTooltip}
    {...props}
  />;
}
