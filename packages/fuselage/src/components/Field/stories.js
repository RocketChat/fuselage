import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import {
  createPropsFromKnobs,
  Document,
  PseudoInput,
  ShowCaseSection,
  TextSection,
  VariationsTable,
  ThemingVariables,
} from '../../helpers/storybook';
import { Field } from './index';


storiesOf('Elements|Field', module)
  .lokiSkip('Field', () => <Document>
    <TextSection>
      <h1>Field</h1>
    </TextSection>
    <TextSection>
      <h2>Label</h2>
    </TextSection>
    <VariationsTable
      component={Field}
      common={{ label: 'Label', children: <PseudoInput /> }}
      xAxis={{
        default: {},
        required: { required: true },
      }}
      yAxis={{
        default: {},
        error: { error: 'Error' },
      }}
    />
    <TextSection>
      <h2>Help</h2>
    </TextSection>
    <ShowCaseSection>
      <Field helpText='Help text' style={{ width: '100%' }}>
        <PseudoInput />
      </Field>
    </ShowCaseSection>
    <TextSection>
      <h2>Theming variables</h2>
    </TextSection>
    <ThemingVariables componentName='field' />
  </Document>);

const props = createPropsFromKnobs({
  children: <PseudoInput />,
  error: '',
  helpText: '',
  hidden: false,
  invisible: false,
  label: '',
  required: false,
});

storiesOf('Elements|Field', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['Field/spec'] })
  .add('default', () => <Field {...props()} />)
  .add('with label', () => <Field {...props({ label: 'Label' })} />)
  .add('with label, required', () => <Field {...props({ label: 'Label', required: true })} />)
  .add('with label, errored', () => <Field {...props({ label: 'Label', error: 'Error' })} />)
  .add('with help text', () => <Field {...props({ helpText: 'Help text' })} />)
  .add('hidden', () => <Field {...props({ hidden: true })} />)
  .add('invisible', () => <Field {...props({ invisible: true })} />);
