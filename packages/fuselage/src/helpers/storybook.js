import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { boolean, number, select, text } from '@storybook/addon-knobs/react';
import React from 'react';
import styled from 'styled-components';


export const horizontallyCentered = (storyFn) => centered(() => (
  <div style={{
    height: '100vh',
  }}>
    {storyFn()}
  </div>
));

export const verticallyCentered = (storyFn) => centered(() => (
  <div style={{
    width: '100vw',
  }}>
    {storyFn()}
  </div>
));

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

export const handleEvent = (eventName) => {
  const f = action(eventName);
  f.toString = () => `action('${ eventName }')`;
  return f;
};

export function TextSection({ children }) {
  return <section className='markdown-body' style={{ margin: '1rem', fontSize: '14px' }}>
    {children}
  </section>;
}

export function ShowCaseSection({ children }) {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2rem',
  };

  return <div style={style}>
    {children}
  </div>;
}

export function Document({ children }) {
  const style = {
    margin: '1rem auto',
    maxWidth: '768px',
  };

  return <>
    <link
      rel='stylesheet'
      href='https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css'
    />
    <article style={style}>
      {children}
    </article>
  </>;
}

export function VariationsTable({ component: Component, common = {}, xAxis = {}, yAxis = {} }) {
  const styles = {
    table: {
      borderCollapse: 'collapse',
      margin: '0 auto',
    },
    th: {
      fontFamily: 'sans-serif',
      fontSize: '0.875rem',
      fontWeight: 'bold',
      border: '1px solid rgba(153, 153, 153, 0.15)',
      color: '#999',
      margin: 0,
      padding: '0.5rem 1rem',
      textAlign: 'center',
      whiteSpace: 'nowrap',
    },
    td: {
      border: '1px solid rgba(153, 153, 153, 0.15)',
      margin: 0,
      padding: '0.5rem 1rem',
    },
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  return <table style={styles.table}>
    <thead>
      <tr>
        <th></th>
        {Object.keys(xAxis).map((xVariation, key) => <th key={key} style={styles.th}>{xVariation}</th>)}
      </tr>
    </thead>
    <tbody>
      {Object.entries(yAxis).map(([yVariation, yProps], y) => (
        <tr key={y}>
          <th style={styles.th}>{yVariation}</th>
          {Object.values(xAxis).map((xProps, x) => <td key={x} style={styles.td}>
            <div style={styles.wrapper}>
              <Component {...common} {...xProps} {...yProps} />
            </div>
          </td>)}
        </tr>
      ))}
    </tbody>
  </table>;
}

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
