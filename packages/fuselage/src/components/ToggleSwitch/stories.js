import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import {
  createPropsFromKnobs,
  Document,
  PropsVariationSection,
  ShowCaseSection,
  TextSection,
} from '../../helpers/storybook';
import { ToggleSwitch } from './index';


storiesOf('Elements|ToggleSwitch', module)
  .addParameters({ jest: ['ToggleSwitch/spec'] })
  .lokiSkip('ToggleSwitch', () => <Document>
    <TextSection>
      <h1>ToggleSwitch</h1>
    </TextSection>
    <PropsVariationSection
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
  onChange: action('change'),
});

storiesOf('Elements|ToggleSwitch', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['ToggleSwitch/spec'] })
  .add('default', () => <ToggleSwitch {...props()} />)
  .add('checked', () => <ToggleSwitch {...props({ checked: true })} />)
  .add('disabled', () => <ToggleSwitch {...props({ disabled: true })} />)
  .add('hidden', () => <ToggleSwitch {...props({ hidden: true })} />)
  .add('invisible', () => <ToggleSwitch {...props({ invisible: true })} />);
