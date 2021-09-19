import { TextAreaInput, TextInput } from '@rocket.chat/fuselage';
import * as UiKit from '@rocket.chat/ui-kit';
import React, { memo, ReactElement } from 'react';

import { useUiKitState } from '../hooks/useUiKitState';
import { fromTextObjectToString } from '../utils/fromTextObjectToString';

type PlainTextInputElementProps = {
  element: UiKit.PlainTextInputElement;
  context: UiKit.BlockContext;
  parser: UiKit.SurfaceRenderer<ReactElement>;
};

const PlainTextInputElement = ({
  element,
  context,
  parser,
}: PlainTextInputElementProps): ReactElement => {
  const [{ loading, value, error }, action] = useUiKitState(element, context);

  if (element.multiline) {
    return (
      <TextAreaInput
        disabled={loading}
        id={element.actionId}
        name={element.actionId}
        rows={6}
        error={error}
        value={value}
        onChange={action}
        placeholder={
          element.placeholder
            ? fromTextObjectToString(parser, element.placeholder, 0, context)
            : undefined
        }
      />
    );
  }

  return (
    <TextInput
      disabled={loading}
      id={element.actionId}
      name={element.actionId}
      error={error}
      value={value}
      onChange={action}
      placeholder={
        element.placeholder
          ? fromTextObjectToString(parser, element.placeholder, 0, context)
          : undefined
      }
    />
  );
};

export default memo(PlainTextInputElement);
