import type { Meta, StoryFn } from '@storybook/react-webpack5';
import { useState } from 'react';

import { PropsVariationSection } from '../../../.storybook/helpers';
import { Box } from '../Box';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Field, FieldDescription, FieldError } from '../Field';
import { Icon } from '../Icon';

import PasswordInput from './PasswordInput';

export default {
  title: 'Inputs/PasswordInput',
  component: PasswordInput,
} satisfies Meta<typeof PasswordInput>;

export const Default: StoryFn<typeof PasswordInput> = () => (
  <PasswordInput aria-label='password' />
);

export const WithValue = () => (
  <PasswordInput aria-label='password' defaultValue='password' />
);

export const WithIconAddon = () => (
  <PasswordInput aria-label='password' addon={<Icon name='send' size={20} />} />
);

export const Invalid = () => (
  <PasswordInput aria-label='password' error='Error' />
);

export const Disabled = () => <PasswordInput aria-label='password' disabled />;

export const WithPlaceholder = () => (
  <PasswordInput aria-label='password' placeholder='Placeholder' />
);

export const States = () => (
  <>
    <PropsVariationSection
      component={PasswordInput}
      common={{ 'onChange': () => undefined, 'aria-label': 'password' }}
      xAxis={{
        'default': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 'Value' },
        'with icon': { addon: <Icon name='key' size='x20' />, value: 'Value' },
      }}
      yAxis={{
        'default': {},
        'hover': { className: 'hover' },
        'active': { className: 'active' },
        'focus': { className: 'focus' },
        'disabled': { disabled: true },
        'errored': { error: 'Error' },
        'errored + hover': { className: 'hover', error: 'Error' },
        'errored + active': { className: 'active', error: 'Error' },
        'errored + focus': { className: 'focus', error: 'Error' },
      }}
    />
    <PropsVariationSection
      component={PasswordInput}
      common={{
        'onChange': () => undefined,
        'small': true,
        'aria-label': 'password',
      }}
      xAxis={{
        'small': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 'Value' },
        'with icon': { addon: <Icon name='key' size='x20' />, value: 'Value' },
      }}
      yAxis={{
        'small': {},
        'hover': { className: 'hover' },
        'active': { className: 'active' },
        'focus': { className: 'focus' },
        'disabled': { disabled: true },
        'errored': { error: 'Error' },
        'errored + hover': { className: 'hover', error: 'Error' },
        'errored + active': { className: 'active', error: 'Error' },
        'errored + focus': { className: 'focus', error: 'Error' },
      }}
    />
  </>
);

export const WithProgrammaticError: StoryFn<typeof PasswordInput> = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [value, setValue] = useState('');

  return (
    <Box display='flex' flexDirection='column' style={{ gap: '8px' }}>
      <Field>
        <FieldDescription>
          Click &quot;Set Error&quot; to programmatically set an error. The
          input should immediately show a red border.
        </FieldDescription>
        <PasswordInput
          aria-label='password'
          value={value}
          onChange={(e) => setValue((e.target as HTMLInputElement).value)}
          error={error}
          placeholder='Enter password'
        />
        <FieldError>{error}</FieldError>
      </Field>
      <ButtonGroup>
        <Button onClick={() => setError('Invalid credentials')} secondary>
          Set Error
        </Button>
        <Button onClick={() => setError(undefined)} secondary>
          Clear Error
        </Button>
      </ButtonGroup>
    </Box>
  );
};
