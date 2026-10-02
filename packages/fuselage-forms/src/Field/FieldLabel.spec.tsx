import { render, screen, waitFor } from '@testing-library/react';

import { CheckBox } from '../Inputs';

import { Field, FieldLabel } from '.';

it('updates the accessible name when visible label text changes', async () => {
  const { rerender } = render(
    <Field>
      <FieldLabel>Receive emails</FieldLabel>
      <CheckBox />
    </Field>,
  );
  expect(screen.getByRole('checkbox')).toHaveAccessibleName('Receive emails');
  rerender(
    <Field>
      <FieldLabel>
        <span>Receive notifications</span>
      </FieldLabel>
      <CheckBox />
    </Field>,
  );
  await waitFor(() =>
    expect(screen.getByRole('checkbox')).toHaveAccessibleName(
      'Receive notifications',
    ),
  );
});

it('clears the copied accessible name when the label is removed', () => {
  const { rerender } = render(
    <Field>
      <FieldLabel>Receive emails</FieldLabel>
      <CheckBox />
    </Field>,
  );
  rerender(
    <Field>
      <CheckBox />
    </Field>,
  );
  expect(screen.getByRole('checkbox')).toHaveAccessibleName('');
});
