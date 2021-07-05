import { InputBox } from '@rocket.chat/fuselage';
import {
  BlockContext,
  DatePickerElement as DatePickerElementProps,
  PlainText,
} from '@rocket.chat/ui-kit';
import { BaseSurfaceRenderer } from '@rocket.chat/ui-kit/dist/esm/rendering/BaseSurfaceRenderer';
import React, { FC } from 'react';

import { useUiKitState } from '../hooks/useUiKitState';

const DatePickerElement: FC<{
  element: DatePickerElementProps;
  context?: BlockContext;
  parser: BaseSurfaceRenderer<string>;
}> = ({ element, context, parser }) => {
  const [{ loading, value, error }, action] = useUiKitState(element, context);
  const { actionId, placeholder } = element;

  const plchd =
    placeholder?.text === 'plain_text' ? (placeholder as PlainText) : undefined;
  return (
    <InputBox
      type='date'
      error={error}
      value={value as string}
      disabled={loading}
      id={actionId}
      name={actionId}
      rows={6}
      placeholder={(plchd && (parser.plainText(plchd) as string)) || undefined}
      onInput={action}
    />
  );
};

export default DatePickerElement;
