import { InputBox } from '@rocket.chat/fuselage';
import type * as UiKit from '@rocket.chat/ui-kit';
import React, { ReactElement } from 'react';

import { fromTextObjectToString } from 'src/utils/fromTextObjectToString';

import { useUiKitState } from '../hooks/useUiKitState';

type DatePickerElementProps = {
  element: UiKit.DatePickerElement;
  context: UiKit.BlockContext;
  parser: UiKit.SurfaceRenderer<ReactElement>;
};

const DatePickerElement = ({
  element,
  context,
  parser,
}: DatePickerElementProps): ReactElement => {
  const [{ loading, value, error }, action] = useUiKitState(element, context);
  const { actionId, placeholder } = element;

  return (
    <InputBox
      type='date'
      error={error}
      value={value as string}
      disabled={loading}
      id={actionId}
      name={actionId}
      rows={6}
      placeholder={
        placeholder
          ? fromTextObjectToString(parser, placeholder, 0, context)
          : undefined
      }
      onInput={action}
    />
  );
};

export default DatePickerElement;
