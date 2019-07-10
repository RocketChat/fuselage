import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { CheckBox } from './index';
import { createVariationsStory, createPropsFromKnobs } from '../../helpers/storybook';


const props = createPropsFromKnobs({
  checked: false,
  indeterminate: false,
  value: '',
  hidden: false,
  disabled: false,
  label: '',
  onChange: action('change'),
});

storiesOf('Elements|CheckBox', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['spec'] })
  .lokiSkip('variations', createVariationsStory(CheckBox, {
    xAxis: {
      standalone: {},
      'with label': { label: 'Label' },
    },
    yAxis: {
      unchecked: { checked: false },
      'unchecked / hover': { checked: false, className: 'hover' },
      'unchecked / active': { checked: false, className: 'active' },
      'unchecked / focus': { checked: false, className: 'focus' },
      'unchecked / hidden': { checked: false, hidden: true },
      'unchecked / disabled': { checked: false, disabled: true },
      indeterminate: { indeterminate: true },
      'indeterminate / hover': { indeterminate: true, className: 'hover' },
      'indeterminate / active': { indeterminate: true, className: 'active' },
      'indeterminate / focus': { indeterminate: true, className: 'focus' },
      'indeterminate / hidden': { indeterminate: true, hidden: true },
      'indeterminate / disabled': { indeterminate: true, disabled: true },
      checked: { checked: true },
      'checked / hover': { checked: true, className: 'hover' },
      'checked / active': { checked: true, className: 'active' },
      'checked / focus': { checked: true, className: 'focus' },
      'checked / hidden': { checked: true, hidden: true },
      'checked / disabled': { checked: true, disabled: true },
    },
  }))
  .add('default', () => <CheckBox {...props()} />)
  .add('checked', () => <CheckBox {...props({ checked: true })} />)
  .add('indeterminate', () => <CheckBox {...props({ indeterminate: true })} />)
  .add('hidden', () => <CheckBox {...props({ hidden: true })} />)
  .add('disabled', () => <CheckBox {...props({ disabled: true })} />)
  .add('with label', () => <CheckBox {...props({ label: 'Label' })} />)
  .add('uncontrolled', () => <CheckBox {...props({ checked: undefined })} />);
