import React, { ComponentPropsWithoutRef, FC } from 'react';

import { Box } from '../Box';
import { Label } from '../Label';

type FieldProps = ComponentPropsWithoutRef<typeof Box>;
type FieldRowProps = ComponentPropsWithoutRef<typeof Box>;
type FieldLabelProps = ComponentPropsWithoutRef<typeof Box>;
type FieldDescriptionProps = ComponentPropsWithoutRef<typeof Box>;
type FieldHintProps = ComponentPropsWithoutRef<typeof Box>;
type FieldErrorProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldLabel: FC<FieldLabelProps> = function FieldLabel(props) {
  return <Box is={Label} rcx-field__label {...props} />;
};

export const FieldDescription: FC<FieldDescriptionProps> =
  function FieldDescription(props) {
    return <Box is='span' rcx-field__description {...props} />;
  };

export const FieldRow: FC<FieldRowProps> = function FieldRow(props) {
  return <Box is='span' rcx-field__row {...props} />;
};

export const FieldHint: FC<FieldHintProps> = function FieldHint(props) {
  return <Box is='span' rcx-field__hint {...props} />;
};

export const FieldError: FC<FieldErrorProps> = function FieldError(props) {
  return <Box is='span' rcx-field__error {...props} />;
};

export const Field: FC<FieldProps> & {
  Label: typeof FieldLabel;
  Description: typeof FieldDescription;
  Row: typeof FieldRow;
  Hint: typeof FieldHint;
  Error: typeof FieldError;
} = function Field(props: FieldProps) {
  return <Box rcx-field {...props} />;
};

Field.Label = FieldLabel;
Field.Description = FieldDescription;
Field.Row = FieldRow;
Field.Error = FieldError;
Field.Hint = FieldHint;
