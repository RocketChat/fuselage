import { Field } from '@rocket.chat/fuselage';
import { BlockContext } from '@rocket.chat/ui-kit';
import React, { memo } from 'react';

import { useBlockContext } from '../hooks';

const InputBlock = ({ element, parser, context }) => {
  const [{ error }] = useBlockContext(element.element, context);

  return (
    <Field>
      {element.label && (
        <Field.Label>{parser.plainText(element.label)}</Field.Label>
      )}
      <Field.Row>
        {parser.renderInputs(element.element, BlockContext.FORM, parser, 0)}
      </Field.Row>
      {error && <Field.Error>{error}</Field.Error>}
      {element.hint && <Field.Hint>{element.hint}</Field.Hint>}
    </Field>
  );
};

export default memo(InputBlock);
