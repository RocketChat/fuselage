import React from 'react';
import centered from '@storybook/addon-centered/react';
import { boolean, text } from '@storybook/addon-knobs/react';


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

    if (typeof defaultValue === 'undefined') {
      return props;
    }

    return { ...props, [propName]: text(knobName, defaultValue) };
  }, {});

export const createVariationsStory = (Component, { commonProps = {}, xAxis = {}, yAxis = {} } = {}) => {
  const styles = {
    th: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      color: '#333',
      margin: 0,
      padding: '0.5rem 1rem',
      textAlign: 'center',
    },
    td: {
      margin: 0,
      padding: '0.5rem 1rem',
      textAlign: 'center',
    },
  };

  return () => <table>
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
            <Component {...commonProps} {...xProps} {...yProps} />
          </td>)}
        </tr>
      ))}
    </tbody>
  </table>;
};
