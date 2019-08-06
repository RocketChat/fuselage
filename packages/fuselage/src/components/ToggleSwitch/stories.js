import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';

import { createPropsFromKnobs, Document, VariationsTable, TextSection, handleEvent } from '../../helpers/storybook';
import { ToggleSwitch } from './index';


storiesOf('Elements|ToggleSwitch', module)
  .lokiSkip('ToggleSwitch', () => <Document>
    <TextSection>
      <h1>ToggleSwitch</h1>
    </TextSection>
    <VariationsTable
      component={ToggleSwitch}
      common={{ onChange: () => {} }}
      xAxis={{
        unchecked: { checked: false },
        checked: { checked: true },
      }}
      yAxis={{
        default: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus' },
        disabled: { disabled: true },
      }}
    />
  </Document>);

const props = createPropsFromKnobs({
  checked: false,
  disabled: false,
  hidden: false,
  invisible: false,
  label: '',
  value: '',
  onChange: handleEvent('change'),
});

storiesOf('Elements|ToggleSwitch', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['spec'] })
  .add('default', () => <ToggleSwitch {...props()} />)
  .add('checked', () => <ToggleSwitch {...props({ checked: true })} />)
  .add('disabled', () => <ToggleSwitch {...props({ disabled: true })} />)
  .add('invisible', () => <ToggleSwitch {...props({ invisible: true })} />)
  .add('hidden', () => <ToggleSwitch {...props({ hidden: true })} />)
  .add('with label', () => <ToggleSwitch {...props({ label: 'Label' })} />)
  .add('uncontrolled', () => <ToggleSwitch {...props({ checked: undefined })} />);
