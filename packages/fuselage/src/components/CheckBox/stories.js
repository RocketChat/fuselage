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
import { CheckBox } from './index';


storiesOf('Elements|CheckBox', module)
  .addParameters({ jest: ['CheckBox/spec'] })
  .lokiSkip('CheckBox', () => <Document>
    <TextSection>
      <h1>CheckBox</h1>
    </TextSection>
    <PropsVariationSection
      component={CheckBox}
      common={{ onChange: () => {} }}
      xAxis={{
        checked: { checked: true },
        unchecked: { checked: false },
        indeterminate: { indeterminate: true },
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
      <h2>Uncontrolled</h2>
    </TextSection>
    <ShowCaseSection>
      <CheckBox />
    </ShowCaseSection>
  </Document>);

const props = createPropsFromKnobs({
  checked: false,
  disabled: false,
  hidden: false,
  indeterminate: false,
  invisible: false,
  value: '',
  onChange: action('change'),
});

storiesOf('Elements|CheckBox', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['CheckBox/spec'] })
  .add('unchecked', () => <CheckBox {...props()} />)
  .add('checked', () => <CheckBox {...props({ checked: true })} />)
  .add('indeterminate', () => <CheckBox {...props({ indeterminate: true })} />)
  .add('disabled', () => <CheckBox {...props({ disabled: true })} />)
  .add('hidden', () => <CheckBox {...props({ hidden: true })} />)
  .add('invisible', () => <CheckBox {...props({ invisible: true })} />);
