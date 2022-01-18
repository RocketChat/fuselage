import React, { ComponentPropsWithoutRef, FC } from 'react';

import { Box } from '../Box';
import { FieldDescription } from './FieldDescription';
import { FieldError } from './FieldError';
import { FieldHint } from './FieldHint';
import { FieldLabel } from './FieldLabel';
import { FieldRow } from './FieldRow';

type FieldProps = ComponentPropsWithoutRef<typeof Box>;

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
