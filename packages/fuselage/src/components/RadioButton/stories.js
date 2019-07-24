import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';

import { createPropsFromKnobs, Document, TextSection, VariationsTable, handleEvent } from '../../helpers/storybook';
import { RadioButton } from './index';


const props = createPropsFromKnobs({
  checked: false,
  value: '',
  disabled: false,
  label: '',
  onChange: handleEvent('change'),
});

storiesOf('Elements|RadioButton', module)
  .lokiSkip('RadioButton', () => <Document>
    <TextSection>
      <h1>RadioButton</h1>
    </TextSection>
    <VariationsTable
      component={RadioButton}
      common={{ onChange: () => {} }}
      xAxis={{
        standalone: {},
        'with label': { label: 'Label' },
      }}
      yAxis={{
        unchecked: { checked: false },
        'unchecked / hover': { checked: false, className: 'hover' },
        'unchecked / active': { checked: false, className: 'active' },
        'unchecked / focus': { checked: false, className: 'focus' },
        'unchecked / hidden': { checked: false, hidden: true },
        'unchecked / disabled': { checked: false, disabled: true },
        checked: { checked: true },
        'checked / hover': { checked: true, className: 'hover' },
        'checked / active': { checked: true, className: 'active' },
        'checked / focus': { checked: true, className: 'focus' },
        'checked / hidden': { checked: true, hidden: true },
        'checked / disabled': { checked: true, disabled: true },
      }}
    />
  </Document>);

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
