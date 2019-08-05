import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';

import { createPropsFromKnobs, Document, TextSection, VariationsTable, handleEvent } from '../../helpers/storybook';
import { RadioButton } from './index';

storiesOf('Elements|RadioButton', module)
  .lokiSkip('RadioButton', () => <Document>
    <TextSection>
      <h1>RadioButton</h1>
    </TextSection>
    <TextSection>
      <h2>Checked</h2>
    </TextSection>
    <VariationsTable
      component={RadioButton}
      common={{ checked: true, onChange: () => {} }}
      xAxis={{
        default: {},
        'with label': { label: 'Label' },
      }}
      yAxis={{
        default: { },
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus' },
        disabled: { disabled: true },
      }}
    />
    <TextSection>
      <h2>Unchecked</h2>
    </TextSection>
    <VariationsTable
      component={RadioButton}
      common={{ checked: false, onChange: () => {} }}
      xAxis={{
        default: {},
        'with label': { label: 'Label' },
      }}
      yAxis={{
        default: { },
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus' },
        disabled: { disabled: true },
      }}
    />
  </Document>);


const props = createPropsFromKnobs({
  checked: false,
  value: '',
  disabled: false,
  label: '',
  onChange: handleEvent('change'),
});

storiesOf('Elements|RadioButton', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['spec'] })
  .add('default', () => <RadioButton {...props()} />)
  .add('checked', () => <RadioButton {...props({ checked: true })} />)
  .add('hidden', () => <RadioButton {...props({ hidden: true })} />)
  .add('disabled', () => <RadioButton {...props({ disabled: true })} />)
  .add('with label', () => <RadioButton {...props({ label: 'Label' })} />)
  .add('uncontrolled', () => <RadioButton {...props({ checked: undefined })} />);
