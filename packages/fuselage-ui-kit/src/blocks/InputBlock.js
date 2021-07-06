import { Field } from '@rocket.chat/fuselage';
import { BlockContext } from '@rocket.chat/ui-kit';
import React, { memo, useMemo } from 'react';

import { useUiKitState } from '../hooks/useUiKitState';

const InputBlock = ({ className, blockElement, parser, context }) => {
  const { appId, blockId, element, label, hint } = blockElement;
  const inputElement = useMemo(
    () => ({ appId, blockId, ...element }),
    [appId, blockId, element]
  );

  const [{ error }] = useUiKitState(inputElement, context);

  return (
    <Field className={className}>
      {label && <Field.Label>{parser.plainText(label)}</Field.Label>}
      <Field.Row>
        {parser.renderInputs(inputElement, BlockContext.FORM, parser, 0)}
      </Field.Row>
      {error && <Field.Error>{error}</Field.Error>}
      {hint && <Field.Hint>{hint}</Field.Hint>}
    </Field>
  );
};

export default memo(InputBlock);
