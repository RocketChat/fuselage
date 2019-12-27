import React from 'react';
import {
  Field,
  FieldGroup,
} from '@rocket.chat/fuselage';
import {
  BLOCK_CONTEXT,
} from '@rocket.chat/ui-kit';

import { Block } from './Block';

export const Input = ({ label, element, parser }) => (
  <Block>
    <FieldGroup>
      <Field>
        {label && <Field.Label >{label}</Field.Label >}
        {parser.renderInputs(element, BLOCK_CONTEXT.FORM, parser)}
      </Field>
    </FieldGroup>
  </Block>
);
