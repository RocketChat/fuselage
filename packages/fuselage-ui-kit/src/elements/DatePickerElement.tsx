import { InputBox } from '@rocket.chat/fuselage';
import * as UiKit from '@rocket.chat/ui-kit';
import React, { ReactElement } from 'react';

import { useUiKitState } from '../hooks/useUiKitState';
import { BlockProps } from '../utils/BlockProps';
import { fromTextObjectToString } from '../utils/fromTextObjectToString';

type DatePickerElementProps = BlockProps<UiKit.DatePickerElement>;

const DatePickerElement = ({
  block,
  context,
  surfaceRenderer,
}: DatePickerElementProps): ReactElement => {
  const [{ loading, value, error }, action] = useUiKitState(block, context);
  const { actionId, placeholder } = block;

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
          ? fromTextObjectToString(surfaceRenderer, placeholder, 0)
          : undefined
      }
      onInput={action}
    />
  );
};

export default DatePickerElement;
