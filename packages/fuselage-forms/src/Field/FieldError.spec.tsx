import { render } from '@testing-library/react';

import { TextInput } from '../Inputs';

import { Field, FieldLabel, FieldError } from '.';

describe('FieldError accessibility', () => {
  it('should have aria-live="polite" attribute', () => {
    const { container } = render(
      <Field>
        <FieldLabel>Test Field</FieldLabel>
        <TextInput />
        <FieldError>Error message</FieldError>
      </Field>,
    );

    const errorElement = container.querySelector('[role]');
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveAttribute('role', 'alert');
  });

  it('should have an id that matches the aria-describedby on the input', () => {
    const { container } = render(
      <Field>
        <FieldLabel>Test Field</FieldLabel>
        <TextInput />
        <FieldError>Error message</FieldError>
      </Field>,
    );

    const input = container.querySelector('input');
    const ariaDescribedBy = input?.getAttribute('aria-describedby');
    expect(ariaDescribedBy).toBeTruthy();

    const errorElement = container.querySelector('[role="alert"]');
    const errorId = errorElement?.getAttribute('id');

    expect(ariaDescribedBy).toContain(errorId);
  });

  it('should set aria-invalid="true" on the input when error is present', () => {
    const { container } = render(
      <Field>
        <FieldLabel>Test Field</FieldLabel>
        <TextInput />
        <FieldError>Error message</FieldError>
      </Field>,
    );

    const input = container.querySelector('input');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('should set aria-invalid="false" on the input when no error is present', () => {
    const { container } = render(
      <Field>
        <FieldLabel>Test Field</FieldLabel>
        <TextInput />
      </Field>,
    );

    const input = container.querySelector('input');
    expect(input).toHaveAttribute('aria-invalid', 'false');
  });
});
