import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import {
  createPropsFromKnobs,
  Document,
  ShowCaseSection,
  TextSection,
  VariationsTable,
} from '../../helpers/storybook';
import { Field } from './index';


const ChildComponent = () => <div
  style={{
    backgroundImage: `repeating-linear-gradient(
      45deg,
      lightgray,
      lightgray 10px,
      white 10px,
      white 20px
    )`,
    border: '1px solid lightgray',
    width: '100%',
    minWidth: '6rem',
    height: '2rem',
  }}
/>;

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
      common={{ label: 'Label', children: <ChildComponent /> }}
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
      <Field helpText='Help text'>
        <ChildComponent />
      </Field>
    </ShowCaseSection>
  </Document>);

const props = createPropsFromKnobs({
  children: <ChildComponent />,
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
  .addParameters({ jest: ['spec'] })
  .add('default', () => <Field {...props()} />)
  .add('with label', () => <Field {...props({ label: 'Label' })} />)
  .add('with label, required', () => <Field {...props({ label: 'Label', required: true })} />)
  .add('with label, errored', () => <Field {...props({ label: 'Label', error: 'Error' })} />)
  .add('with help text', () => <Field {...props({ helpText: 'Help text' })} />)
  .add('hidden', () => <Field {...props({ hidden: true })} />)
  .add('invisible', () => <Field {...props({ invisible: true })} />);
