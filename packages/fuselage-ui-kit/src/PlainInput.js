import { TextAreaInput, TextInput } from '@rocket.chat/fuselage';
import React from 'react';

import { useBlockContext } from './hooks';

export const PlainInput = React.memo(({ element, context, index, parser }) => {
  const [{ loading, value, error }, action] = useBlockContext(element, context);
  const { multiline, actionId, placeholder } = element;
  const Component = multiline ? TextAreaInput : TextInput;
  return (
    <Component
      key={index}
      disabled={loading}
      id={actionId}
      name={actionId}
      rows={6}
      error={error}
      value={value}
      // onInput={action}
      onChange={action}
      placeholder={parser.plainText(placeholder)}
    />
  );
});
