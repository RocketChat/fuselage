import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import {
  createPropsFromKnobs,
  Document,
  PropsVariationSection,
  PseudoInput,
  TextSection,
} from '../../helpers/storybook';
import { Label } from './index';


storiesOf('Elements|Label', module)
  .addParameters({ jest: ['Label/spec'] })
  .lokiSkip('Label', () => <Document>
    <TextSection>
      <h1>Label</h1>
    </TextSection>
    <TextSection>
      <h2>Errored and with required mark</h2>
    </TextSection>
    <PropsVariationSection
      component={Label}
      common={{ text: 'Label' }}
      xAxis={{
        default: {},
        required: { required: true },
      }}
      yAxis={{
        default: {},
        'with error': { error: 'Error' },
      }}
    />
    <TextSection>
      <h2>Position around children</h2>
    </TextSection>
    <PropsVariationSection
      component={Label}
      common={{ text: 'Label', children: <PseudoInput /> }}
      xAxis={{
        default: {},
        required: { required: true },
        'with error': { error: 'Error' },
      }}
      yAxis={{
        top: { position: 'top' },
        start: { position: 'start' },
        end: { position: 'end' },
      }}
    />
    <TextSection>
      <h2>Label</h2>
    </TextSection>
  </Document>);

const props = createPropsFromKnobs({
  error: '',
  hidden: false,
  invisible: false,
  position: ['top', ['top', 'start', 'end']],
  text: 'Label',
  required: false,
});

storiesOf('Elements|Label', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['Label/spec'] })
  .add('default', () => <Label {...props()} />)
  .add('required', () => <Label {...props({ required: true })} />)
  .add('with error', () => <Label {...props({ error: 'Error' })} />)
  .add('with children', () => <Label {...props({ children: <PseudoInput /> })} />)
  .add('with children, top position', () => <Label {...props({ children: <PseudoInput />, position: 'top' })} />)
  .add('with children, start position', () => <Label {...props({ children: <PseudoInput />, position: 'start' })} />)
  .add('with children, end position', () => <Label {...props({ children: <PseudoInput />, position: 'end' })} />)
  .add('nested', () => <Label text='Outer label'><Label {...props()} /></Label>)
  .add('hidden', () => <Label {...props({ hidden: true })} />)
  .add('invisible', () => <Label {...props({ invisible: true })} />);
