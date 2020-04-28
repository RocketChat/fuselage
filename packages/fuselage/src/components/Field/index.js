import React from 'react';

import { Box } from '../Box';
import { Label } from '../Label';

export function FieldLabel(props) {
  return <Box is={Label} rcx-field__label {...props}/>;
}

export function FieldDescription(props) {
  return <Box is='span' rcx-field__description {...props}/>;
}

export function FieldRow(props) {
  return <Box is='span' rcx-field__row {...props} />;
}

export function FieldHint(props) {
  return <Box is='span' rcx-field__hint {...props} />;
}

export function FieldError(props) {
  return <Box is='span' rcx-field__error {...props} />;
}

export function Field(props) {
  return <Box rcx-field {...props} />;
}

Field.Label = FieldLabel;
Field.Description = FieldDescription;
Field.Row = FieldRow;
Field.Error = FieldError;
Field.Hint = FieldHint;
