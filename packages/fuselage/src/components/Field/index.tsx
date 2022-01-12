import React, { ComponentProps } from 'react';

import { Box } from '../Box';
import { Label } from '../Label';

type FieldProps = ComponentProps<typeof Box>;
type FieldRowProps = ComponentProps<typeof Box>;
type FieldLabelProps = ComponentProps<typeof Box>;
type FieldDescriptionProps = ComponentProps<typeof Box>;
type FieldHintProps = ComponentProps<typeof Box>;
type FieldErrorProps = ComponentProps<typeof Box>;

export function FieldLabel(props: FieldLabelProps) {
  return <Box is={Label} rcx-field__label {...props} />;
}

export function FieldDescription(props: FieldDescriptionProps) {
  return <Box is='span' rcx-field__description {...props} />;
}

export function FieldRow(props: FieldRowProps) {
  return <Box is='span' rcx-field__row {...props} />;
}

export function FieldHint(props: FieldHintProps) {
  return <Box is='span' rcx-field__hint {...props} />;
}

export function FieldError(props: FieldErrorProps) {
  return <Box is='span' rcx-field__error {...props} />;
}

export function Field(props: FieldProps) {
  return <Box rcx-field {...props} />;
}

Field.Label = FieldLabel;
Field.Description = FieldDescription;
Field.Row = FieldRow;
Field.Error = FieldError;
Field.Hint = FieldHint;
