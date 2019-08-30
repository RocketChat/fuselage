import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';

import {
  createPropsFromKnobs,
  Document,
  handleEvent,
  ShowCaseSection,
  TextSection,
  VariationsTable,
} from '../../helpers/storybook';
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
        checked: { checked: true },
        unchecked: { checked: false },
      }}
      yAxis={{
        default: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus' },
        disabled: { disabled: true },
      }}
    />
    <TextSection>
      <h2>Uncontrolled</h2>
    </TextSection>
    <ShowCaseSection>
      <ToggleSwitch />
    </ShowCaseSection>
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
  .add('hidden', () => <ToggleSwitch {...props({ hidden: true })} />)
  .add('invisible', () => <ToggleSwitch {...props({ invisible: true })} />);
