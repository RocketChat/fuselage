import { action as storyAction } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { useForm, useField } from 'react-final-form-hooks';

import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { TextInput } from '../TextInput';
import { Form } from './index';
import { FormItem } from './Item';
import notes from './README.md';


function LoginForm() {
  const { form, handleSubmit, pristine, invalid, submitting } = useForm({
    onSubmit: storyAction('submit'),
    validate: ({ username, password }) => ({
      ...!username && { username: 'Username cannot be empty.' },
      ...!password && { password: 'Password cannot be empty.' },
    }),
  });

  const username = useField('username', form);

  const password = useField('password', form);

  return <Form onSubmit={handleSubmit}>
    <FormItem>
      <TextInput placeholder='Username' {...username.input} />
    </FormItem>

    <FormItem>
      <TextInput type='password' placeholder='Password' {...password.input} />
    </FormItem>

    <ButtonGroup stretch vertical>
      <Button primary disabled={pristine || invalid || submitting}>
        Login
      </Button>

      <Button nude>
        Register
      </Button>

      <Button nude>
        Forgot my password
      </Button>
    </ButtonGroup>
  </Form>;
}

storiesOf('Collections|Form', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    jest: ['spec'],
    notes,
  })
  .add('login', () => <LoginForm />);
