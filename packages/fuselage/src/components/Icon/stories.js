import React from 'react';
import * as iconNames from '@rocket.chat/icons/dist/font';
import centered from '@storybook/addon-centered/react';
import { withKnobs, color, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Icon } from './index';


const IconDisplay = ({ children, color, name, size, varName }) => (
  <div style={{
    margin: '1rem',
    width: '10rem',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'stretch',
    overflow: 'hidden',
  }}>
    <div style={{ padding: '1rem', color, fontSize: `${ size }px`, textAlign: 'center' }}>
      {children}
    </div>
    <div style={{ padding: '0.5rem' }}>
      <div style={{ color: 'gray', textAlign: 'center', fontFamily: 'sans-serif' }}>{name}</div>
      <div style={{ color: 'lightgray', textAlign: 'center', fontFamily: 'monospace', fontSize: '0.75rem' }}>{varName}</div>
    </div>
  </div>
);

const stories = storiesOf('Components|Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['Icon'] })
  .lokiSkip('all', () => (
    <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
      {Object.entries(iconNames).map(([varName, name], key) => (
        <IconDisplay key={key} name={name} varName={varName} color={color('color', 'gray')} size={number('size', 40)}>
          <Icon name={name} />
        </IconDisplay>
      ))}
    </div>
  ));

Object.entries(iconNames).forEach(([varName, name], key) => {
  stories.add(varName, () => (
    <IconDisplay key={key} name={name} varName={varName} color={color('color', 'gray')} size={number('size', 40)}>
      <Icon name={name} />
    </IconDisplay>
  ));
});
