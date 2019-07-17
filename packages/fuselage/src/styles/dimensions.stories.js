import { storiesOf } from '@storybook/react';
import React from 'react';

import { locals } from './exports.scss';
import { Document, TextSection } from '../helpers/storybook';

const dimensions = Object.entries(locals)
  .filter(([key]) => key.startsWith('dimension-'))
  .map(([key, dimension]) => [key.slice('dimension-'.length), dimension]);


function DimensionsReadme({ dimensions }) {
  return <Document>
    <TextSection>
      <h1>Dimensions</h1>
      <p>These are the standard measurements (sizes, time intervals etc.) used in all components:</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {dimensions.map(([name, dimension], key) => <tr key={key}>
            <td align='center'>{name}</td>
            <td align='center'><code>{dimension}</code></td>
          </tr>)}
        </tbody>
      </table>
    </TextSection>
  </Document>;
}

storiesOf('Styles|Theming', module)
  .lokiSkip('Dimensions', () => <DimensionsReadme dimensions={dimensions} />);
