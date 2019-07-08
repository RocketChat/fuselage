import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { createPropsFromKnobs } from '../../../helpers/storybook';
import { TextInput } from '../../TextInput';
import { FormField } from './index';


const props = createPropsFromKnobs({
  id: '',
  accessKey: '',
  children: <TextInput />,
  description: 'This is a form field description.',
  error: '',
  label: 'Label',
  required: false,
});

storiesOf('Collections|Form/FormField', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    jest: ['spec'],
  })
  .add('default', () => (
    <FormField {...props()} />
  ));
