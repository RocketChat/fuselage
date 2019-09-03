import { storiesOf } from '@storybook/react';
import React from 'react';
import styled, { css } from 'styled-components';

import { Document, TextSection, VariationsTable } from '../helpers/storybook';
import { reset } from '../mixins/reset';
import { withText } from '../mixins/withText';


const TextPreview = styled.div.attrs({ children: 'The quick brown fox jumps over the lazy dog.' })`
  ${ reset }
  ${ withText }
  padding: 1rem;
  ${ ({ textColor }) => textColor === 'alternative' && css`
    background-color: black;
  ` }
`;

storiesOf('Styles|Typography', module)
  .lokiSkip('Typography', () => <Document>
    <TextSection>
      <h1>Typography</h1>
    </TextSection>
    <TextSection>
      <h2>Variantions</h2>
    </TextSection>
    <VariationsTable
      component={TextPreview}
      xAxis={{ preview: {} }}
      yAxis={{
        headline: { textVariant: 'headline' },
        subtitle: { textVariant: 'subtitle' },
        'bold subtitle': { textVariant: 'boldSubtitle' },
        paragraph: { textVariant: 'paragraph' },
        'bold paragraph': { textVariant: 'boldParagraph' },
        caption: { textVariant: 'caption' },
        'bold caption': { textVariant: 'boldCaption' },
        micro: { textVariant: 'micro' },
      }}
    />
    <TextSection>
      <h2>Colors</h2>
    </TextSection>
    <VariationsTable
      component={TextPreview}
      xAxis={{ preview: {} }}
      yAxis={{
        default: { textColor: 'default' },
        info: { textColor: 'info' },
        hint: { textColor: 'hint' },
        disabled: { textColor: 'disabled' },
        primary: { textColor: 'primary' },
        success: { textColor: 'success' },
        danger: { textColor: 'danger' },
        warning: { textColor: 'warning' },
        alternative: { textColor: 'alternative' },
      }}
    />
  </Document>);

storiesOf('Styles|Typography', module)
  .add('headline variant', () => <TextPreview textVariant='headline' />)
  .add('subtitle variant', () => <TextPreview textVariant='subtitle' />)
  .add('boldSubtitle variant', () => <TextPreview textVariant='boldSubtitle' />)
  .add('paragraph variant', () => <TextPreview textVariant='paragraph' />)
  .add('boldParagraph variant', () => <TextPreview textVariant='boldParagraph' />)
  .add('caption variant', () => <TextPreview textVariant='caption' />)
  .add('boldCaption variant', () => <TextPreview textVariant='boldCaption' />)
  .add('micro variant', () => <TextPreview textVariant='micro' />)

  .add('left alignment', () => <TextPreview textAlignment='left' />)
  .add('center alignment', () => <TextPreview textAlignment='center' />)
  .add('right alignment', () => <TextPreview textAlignment='right' />)

  .add('default color', () => <TextPreview textColor='default' />)
  .add('info color', () => <TextPreview textColor='info' />)
  .add('hint color', () => <TextPreview textColor='hint' />)
  .add('disabled color', () => <TextPreview textColor='disabled' />)
  .add('primary color', () => <TextPreview textColor='primary' />)
  .add('success color', () => <TextPreview textColor='success' />)
  .add('danger color', () => <TextPreview textColor='danger' />)
  .add('warning color', () => <TextPreview textColor='warning' />)
  .add('alternative color', () => <TextPreview textColor='alternative' />);
