import centered from '@storybook/addon-centered/react';
import { boolean, number, select, text } from '@storybook/addon-knobs/react';
import React from 'react';
import styled from 'styled-components';

import { withText, withTruncatedText } from '../mixins';
import typography from '../styles/typography';
import textColors from '../styles/textColors';


const VerticallyCenteredContainer = styled.div`
  width: 100vw;
`;

export const verticallyCentered = (storyFn) => centered(() =>
  <VerticallyCenteredContainer>
    {storyFn()}
  </VerticallyCenteredContainer>);

export const TextSection = styled.section.attrs({ className: 'markdown-body-' })`
  margin: 1rem;
  font-size: 14px;

  h1 {
    ${ withText(typography.h1) }
  }

  h2 {
    ${ withText(typography.s1) }
  }

  p {
    ${ withText(typography.p1) }
  }
`;

export const ShowCaseSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`;

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

export const createPropsFromKnobs = (defaults = {}, itemName = null) => (overrides = {}) =>
  Object.entries({ ...defaults, ...overrides }).reduce((props, [propName, defaultValue]) => {
    if (propName === 'children' && React.isValidElement(defaultValue)) {
      return { ...props, [propName]: defaultValue };
    }

    if (typeof defaultValue === 'function') {
      return { ...props, [propName]: defaultValue };
    }

    const knobName = itemName ? `${ itemName } / ${ propName }` : propName;

    if (typeof defaultValue === 'boolean') {
      return { ...props, [propName]: boolean(knobName, defaultValue) };
    }

    if (typeof defaultValue === 'number') {
      return { ...props, [propName]: number(knobName, defaultValue) };
    }

    if (Array.isArray(defaultValue) && defaultValue.length === 2) {
      if (Array.isArray(defaultValue[1])) {
        return { ...props, [propName]: select(knobName, ['', ...defaultValue[1]], defaultValue[0]) };
      }

      return { ...props, [propName]: select(knobName, { '': null, ...defaultValue[1] }, defaultValue[0]) };
    }

    if (typeof defaultValue === 'undefined') {
      return props;
    }

    return { ...props, [propName]: text(knobName, defaultValue) };
  }, {});

export const Document = styled.article`
  margin: 1rem auto;
  max-width: 768px;
`;

const PropsVariationTable = styled.table`
  border-collapse: collapse;
  margin: 1rem auto;

  th, td {
    margin: 0;
    padding: 0.5rem 1rem;
  }

  th {
    color: ${ textColors.hint };
    ${ withText(typography.c2) }
    ${ withTruncatedText }
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
