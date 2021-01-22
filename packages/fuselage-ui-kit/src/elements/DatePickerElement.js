import { InputBox } from '@rocket.chat/fuselage';
import React from 'react';

import { useBlockContext } from '../hooks';

const DatePickerElement = ({ element, context, parser }) => {
  const [{ loading, value, error }, action] = useBlockContext(element, context);
  const { actionId, placeholder } = element;
  return (
    <InputBox
      type='date'
      error={error}
      value={value}
      disabled={loading}
      id={actionId}
      name={actionId}
      rows={6}
      placeholder={parser.plainText(placeholder)}
      onInput={action}
    />
  );
};

export default DatePickerElement;
