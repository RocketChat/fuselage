import { InputBox } from '@rocket.chat/fuselage';
import type * as UiKit from '@rocket.chat/ui-kit';
import type { ReactElement } from 'react';
import React from 'react';

import { useUiKitState } from '../hooks/useUiKitState';
import type { BlockProps } from '../utils/BlockProps';
import { fromTextObjectToString } from '../utils/fromTextObjectToString';

type DateTimePickerElementProps = BlockProps<UiKit.DateTimePickerElement>;

const DateTimePickerElement = ({
  block,
  context,
  surfaceRenderer,
}: DateTimePickerElementProps): ReactElement => {
  const [{ loading, value, error }, action] = useUiKitState(block, context);
  const { actionId, placeholder } = block;

  return (
    <InputBox
      type='datetime-local'
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

export default DateTimePickerElement;
