import { Field, Margins } from '@rocket.chat/fuselage';
import { BlockContext } from '@rocket.chat/ui-kit';
import React, { memo } from 'react';

import { useBlockContext } from '../hooks';

const InputBlock = ({ label, element, parser, index, hint, context }) => {
  const [{ error }] = useBlockContext(element, context);
  return (
    <Margins blockEnd='x16'>
      <Field>
        {label && <Field.Label>{label}</Field.Label>}
        <Field.Row>
          {parser.renderInputs(element, BlockContext.FORM, parser, index)}
        </Field.Row>
        {error && <Field.Error>{error}</Field.Error>}
        {hint && <Field.Hint>{hint}</Field.Hint>}
      </Field>
    </Margins>
  );
};

export default memo(InputBlock);
