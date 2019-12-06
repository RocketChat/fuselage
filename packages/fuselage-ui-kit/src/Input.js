import React from 'react';
import {
  Label,
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
        {console.log(element)}
        {label && <Label text={label} />}
        {parser.renderInputs(element, BLOCK_CONTEXT.FORM, parser)}
      </Field>
    </FieldGroup>
  </Block>
);
