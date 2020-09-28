import React from 'react';
import { Bar } from '@nivo/bar';
import { BarChartWrapper } from './BarChart.styled';

export const BarChart = ({ data, keys, indexBy, width, height }) => (
  <BarChartWrapper>
    <Bar
      data={data}
      width={width || 800}
      height={height || 200}
      margin={{
        top: 10,
        right: 0,
        bottom: 35,
        left: 0,
      }}
      isInteractive={false}
      keys={keys}
      indexBy={indexBy}
      padding={0.65}
      colors={(e) => {
        if (e.data.currentMonth) {
          if (e.id === 'followers') return 'rgba( 37, 217, 154, 0.5)';
        }

        if (e.id === 'followers') return '#25D99B';

        return null;
      }}
      borderRadius={1}
      axisTop={null}
      axisRight={null}
      axisLeft={null}
      gridYValues={[0]}
      axisBottom={{
        tickSize: 0,
        tickPadding: 20,
        tickRotation: 0,
      }}
      enableLabel={false}
      animate
    />
  </BarChartWrapper>
);
