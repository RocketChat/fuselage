import React from 'react';

import { Box } from '../Box';

const Container = Box.extend('rcx-field__row');

export function FieldRow(props) {
  return <Container {...props} />;
}

FieldRow.displayName = 'Field.Row';
