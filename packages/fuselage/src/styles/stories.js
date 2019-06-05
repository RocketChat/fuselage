import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Helmet } from 'react-helmet';

import { Button } from '../components/Button';
import { ButtonGroup } from '../components/ButtonGroup';
import '../helpers/cssCustomPropertiesPonyfill';
import colorPalette from './colorPalette.scss';


const Color = ({ color, name }) => (
  <div style={{
    margin: '1rem',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'stretch',
    overflow: 'hidden',
    borderRadius: '0.75rem',
    border: '1px solid lightgray',
  }}>
    <div style={{ backgroundColor: color, height: '5rem' }}></div>
    <div style={{ padding: '0.5rem' }}>
      <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>{name}</div>
      <div style={{ color: 'gray', textAlign: 'center', fontFamily: 'monospace', fontSize: '0.75rem' }}>{color}</div>
    </div>
  </div>
);

const ColorGrid = ({ children }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
    {children}
  </div>
);

storiesOf('Styles|Colors', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .lokiSkip('Palette', () => (
    <ColorGrid>
      {Object.entries(colorPalette).map(([name, color], key) => (
        <Color key={key} name={name} color={color} />
      ))}
    </ColorGrid>
  ));

storiesOf('Styles|Theming', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Example', () => (
    <>
      <Helmet>
        <style type="text/css">{`
        :root {
          --button-primary-background: lightgreen;
          --button-cancel-color: tomato;
        }
        `}</style>
      </Helmet>
      <ButtonGroup>
        <Button primary>Yes</Button>
        <Button>Maybe</Button>
        <Button cancel>No</Button>
      </ButtonGroup>
    </>
  ));
