import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import { locals } from './exports.scss';
import { Document, TextSection, ShowCaseSection } from '../helpers/storybook';

const fontFamilies = Object.entries(locals)
  .filter(([key]) => key.startsWith('font-family-'))
  .map(([key, dimension]) => [key.slice('font-family-'.length), dimension]);


function TypographyReadme({ fontFamilies }) {
  const [fontFamily, setFontFamily] = useState(fontFamilies[0] && fontFamilies[0][1]);
  const handleFontFamilyChange = ({ target: { value } }) => setFontFamily(value);
  const [fontWeight, setFontWeight] = useState(400);
  const handleFontWeightChange = ({ target: { value } }) => setFontWeight(value);

  return <Document>
    <TextSection>
      <h1>Typography</h1>
      <h2>Font families</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Family</th>
            <th>Faces</th>
          </tr>
        </thead>
        <tbody>
          {fontFamilies.map(([name, value], key) => {
            const fontFaces = value.split(/,/g)
              .map((fontFace) => /^['"]?(.*?)['"]?$/.exec(fontFace)[1])
              .join(', ');

            return <tr key={key}>
              <td>
                <input type='radio' value={value} checked={fontFamily === value} onChange={handleFontFamilyChange} />
              </td>
              <td align='center'>{name}</td>
              <td>{fontFaces}</td>
            </tr>;
          })}
        </tbody>
      </table>
      <dl>
        <dt>Weight</dt>
        <dd>
          <input
            type='range'
            min={100}
            max={900}
            step={100}
            value={fontWeight}
            onChange={handleFontWeightChange}
          /> {fontWeight}
        </dd>
      </dl>
    </TextSection>
    <ShowCaseSection>
      <div style={{ fontFamily, fontWeight, margin: '1rem' }}>
        The quick brown fox jumps over the lazy dog.
      </div>
      <div style={{ fontFamily, fontWeight, margin: '1rem' }}>
        Um pequeno jabuti xereta viu dez cegonhas felizes.
      </div>
    </ShowCaseSection>
  </Document>;
}

storiesOf('Styles|Theming', module)
  .lokiSkip('Typography', () => <TypographyReadme fontFamilies={fontFamilies} />);
