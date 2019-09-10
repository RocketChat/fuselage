import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import {
  createPropsFromKnobs,
  Document,
  TextSection,
  VariationsTable,
  PseudoInput,
} from '../../helpers/storybook';
import { Label } from './index';


storiesOf('Elements|Label', module)
  .lokiSkip('Label', () => <Document>
    <TextSection>
      <h1>Label</h1>
    </TextSection>
    <TextSection>
      <h2>Errored and with required mark</h2>
    </TextSection>
    <VariationsTable
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
      <h2>Orientation around children</h2>
    </TextSection>
    <VariationsTable
      component={Label}
      common={{ text: 'Label', children: <PseudoInput /> }}
      xAxis={{
        default: {},
        required: { required: true },
        'with error': { error: 'Error' },
      }}
      yAxis={{
        top: { orientation: 'top' },
        start: { orientation: 'start' },
        end: { orientation: 'end' },
      }}
    />
  </Document>);

const props = createPropsFromKnobs({
  error: '',
  hidden: false,
  invisible: false,
  orientation: [Label.defaultProps.orientation, ['top', 'start', 'end']],
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
  .add('with children, top orientation', () => <Label {...props({ children: <PseudoInput />, orientation: 'top' })} />)
  .add('with children, start orientation', () => <Label {...props({ children: <PseudoInput />, orientation: 'start' })} />)
  .add('with children, end orientation', () => <Label {...props({ children: <PseudoInput />, orientation: 'end' })} />)
  .add('hidden', () => <Label {...props({ hidden: true })} />)
  .add('invisible', () => <Label {...props({ invisible: true })} />);
