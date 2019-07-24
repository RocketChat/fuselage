import { storiesOf } from '@storybook/react';
import React from 'react';

import { locals } from './exports.scss';
import { Document, TextSection } from '../helpers/storybook';


const colorPalette = Object.entries(locals)
  .filter(([key]) => key.startsWith('color-'))
  .map(([key, color]) => [key.slice('color-'.length), color]);

function ColorPaletteTest({ colorPalette }) {
  const styles = {
    wrapper: {
      display: 'flex',
      flexFlow: 'row wrap',
    },
    square: {
      width: '2rem',
      height: '2rem',
      flexShrink: 0,
    },
  };

  return <div style={styles.wrapper}>
    {colorPalette.map(([name, color], key) => <div
      key={key}
      style={{ ...styles.square, backgroundColor: color }}
      title={name}
    />)}
  </div>;
}

storiesOf('Styles|Theming/tests', module)
  .add('Color Palette', () => <ColorPaletteTest colorPalette={colorPalette} />);

function ColorPaletteReadme({ colorPalette }) {
  return <Document>
    <TextSection>
      <h1>Color Palette</h1>
      <p>These are the base colors for all components:</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Appearance</th>
          </tr>
        </thead>
        <tbody>
          {colorPalette.map(([name, color], key) => <tr key={key}>
            <td align='center'>{name}</td>
            <td align='center'><code>{color}</code></td>
            <td style={{ backgroundColor: color }}></td>
          </tr>)}
        </tbody>
      </table>
    </TextSection>
  </Document>;
}

storiesOf('Styles|Theming', module)
  .lokiSkip('Color Palette', () => <ColorPaletteReadme colorPalette={colorPalette} />);
