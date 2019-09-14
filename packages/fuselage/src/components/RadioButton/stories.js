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
import { RadioButton } from './index';

storiesOf('Elements|RadioButton', module)
  .addParameters({ jest: ['RadioButton/spec'] })
  .lokiSkip('RadioButton', () => <Document>
    <TextSection>
      <h1>RadioButton</h1>
    </TextSection>
    <PropsVariationSection
      component={RadioButton}
      common={{ onChange: () => {} }}
      xAxis={{
        checked: { checked: true },
        unchecked: { checked: false },
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
      <RadioButton />
    </ShowCaseSection>
  </Document>);


const props = createPropsFromKnobs({
  checked: false,
  disabled: false,
  hidden: false,
  invisible: false,
  value: '',
  onChange: action('change'),
});

storiesOf('Elements|RadioButton', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['RadioButton/spec'] })
  .add('default', () => <RadioButton {...props()} />)
  .add('checked', () => <RadioButton {...props({ checked: true })} />)
  .add('disabled', () => <RadioButton {...props({ disabled: true })} />)
  .add('hidden', () => <RadioButton {...props({ hidden: true })} />)
  .add('invisible', () => <RadioButton {...props({ invisible: true })} />);
