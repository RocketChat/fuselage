import { Box, Field } from '@rocket.chat/fuselage';
import * as UiKit from '@rocket.chat/ui-kit';
import React, { ComponentProps, memo, ReactElement, useMemo } from 'react';

import { useUiKitState } from '../hooks/useUiKitState';

type InputBlockProps = {
  className?: ComponentProps<typeof Box>['className'];
  blockElement: UiKit.InputBlock;
  parser: UiKit.SurfaceRenderer<ReactElement>;
  context: UiKit.BlockContext;
};

const InputBlock = ({
  className,
  blockElement,
  parser,
  context,
}: InputBlockProps): ReactElement => {
  const inputElement = useMemo(
    () => ({
      ...blockElement.element,
      appId: blockElement.element.appId ?? blockElement.appId,
      blockId: blockElement.element.blockId ?? blockElement.blockId,
    }),
    [blockElement.element, blockElement.appId, blockElement.blockId]
  );

  const [{ error }] = useUiKitState(inputElement, context);

  return (
    <Field className={className}>
      {blockElement.label && (
        <Field.Label>
          {parser.renderTextObject(blockElement.label, 0, context)}
        </Field.Label>
      )}
      <Field.Row>{parser.renderInputBlockElement(inputElement, 0)}</Field.Row>
      {error && <Field.Error>{error}</Field.Error>}
      {blockElement.hint && <Field.Hint>{blockElement.hint}</Field.Hint>}
    </Field>
  );
};

export default memo(InputBlock);
