import { action as storyAction } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { TextInput } from '../TextInput';
import notes from './README.md';

import { Form, FormField } from './index';


const props = ({
  action = '',
  method = '',
} = {}) => ({
  action: text('action', action),
  method: select('method', ['get', 'post'], method),
  onSubmit: storyAction('submit'),
});

storiesOf('Collections|Form', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    jest: ['spec'],
    notes,
  })
  .add('default', () => (
    <Form {...props()}>
      <FormField label="Email" description="The address to send your Cloud registration email to.">
        <TextInput />
      </FormField>

      <FormField label="Token" description="Manually enter the token received from the Cloud Registration Email.">
        <TextInput />
      </FormField>
    </Form>
  ));
