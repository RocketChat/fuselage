import * as iconNames from '@rocket.chat/icons/dist/font';
import centered from '@storybook/addon-centered/react';
import { withKnobs, color, number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useMemo } from 'react';

import { Icon } from './index';


function IconDisplay({ children, color, direction, name, size, varName }) {
  const styles = useMemo(() => ({
    wrapper: {
      margin: '0.5rem',
      width: '9rem',
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'stretch',
      overflow: 'hidden',
    },
    icon: {
      padding: '1rem',
      color,
      fontSize: `${ size }px`,
      textAlign: 'center',
      direction,
    },
    info: {
      padding: '0.5rem',
    },
    varName: {
      color: 'gray',
      textAlign: 'center',
      fontFamily: 'sans-serif',
    },
    name: {
      color: 'lightgray',
      textAlign: 'center',
      fontFamily: 'monospace',
      fontSize: '0.75rem',
    },
  }), []);

  return <div style={styles.wrapper}>
    <div style={styles.icon}>
      {children}
    </div>
    <div style={styles.info}>
      <div style={styles.varName}>{varName}</div>
      <div style={styles.name}>{name}</div>
    </div>
  </div>;
}

storiesOf('Elements|Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['spec'] })
  .lokiSkip('all', () => (
    <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
      {Object.entries(iconNames).map(([varName, name], key) => (
        <IconDisplay
          key={key}
          name={name}
          varName={varName}
          color={color('color', 'gray')}
          direction={select('direction', ['ltr', 'rtl'], 'ltr')}
          size={number('size', 40)}
        >
          <Icon name={name} />
        </IconDisplay>
      ))}
    </div>
  ));

Object.entries(iconNames).forEach(([varName, name]) => {
  storiesOf('Elements|Icon', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .addParameters({ jest: ['spec'] })
    .add(varName, () => <>
      <Icon
        name={name}
        style={{
          color: color('color', 'gray'),
          fontSize: number('fontSize', 40),
        }}
      />
      <Icon
        name={name}
        style={{
          color: color('color', 'gray'),
          fontSize: number('fontSize', 40),
          direction: 'rtl',
        }}
      />
    </>);
});
