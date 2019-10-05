import React from 'react';
import styled from 'styled-components';

import colors from '@rocket.chat/fuselage-tokens/colors';
import typography from '@rocket.chat/fuselage-tokens/typography';

const ArbitraryBox = styled.div`
  background-image: repeating-linear-gradient(
    45deg,
    lightgray,
    lightgray 10px,
    white 10px,
    white 20px
  );
  border: 1px solid lightgray;
`;

export const PseudoInput = styled(ArbitraryBox)`
  width: 100%;
  min-width: 6rem;
  height: 2rem;
`;

const PropsVariationTable = styled.table`
  border-collapse: collapse;
  margin: 1rem auto;

  th, td {
    margin: 0;
    padding: 0.5rem 1rem;
  }

  th {
    color: ${ colors.dark600 };
    font-family: ${ typography.c1.fontFamily.map((x) => (x.indexOf(' ') < 0 ? x : `'${ x }'`)).join(', ') };
    font-size: ${ typography.c1.fontSize }px;
    font-variant-numeric: tabular-nums;
    font-weight: ${ typography.c1.fontWeight };
    letter-spacing: ${ typography.c1.letterSpacing }px;
    line-height: ${ typography.c1.lineHeight }px;
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }

  td > div.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export function PropsVariationSection({ component: Component, common = {}, xAxis = {}, yAxis = {} }) {
  return <PropsVariationTable>
    <thead>
      <tr>
        <th></th>
        {Object.keys(xAxis).map((xVariation, key) => <th key={key}>{xVariation}</th>)}
      </tr>
    </thead>
    <tbody>
      {Object.entries(yAxis).map(([yVariation, yProps], y) => (
        <tr key={y}>
          <th>{yVariation}</th>
          {Object.values(xAxis).map((xProps, x) => <td key={x}>
            <div className='wrapper'>
              <Component {...common} {...xProps} {...yProps} />
            </div>
          </td>)}
        </tr>
      ))}
    </tbody>
  </PropsVariationTable>;
}
