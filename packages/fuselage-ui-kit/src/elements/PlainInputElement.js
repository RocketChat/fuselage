import { TextAreaInput, TextInput } from '@rocket.chat/fuselage';
import React, { memo } from 'react';

import { useBlockContext } from '../hooks';

const PlainInputElement = ({ element, context, parser }) => {
  const [{ loading, value, error }, action] = useBlockContext(element, context);
  const { multiline, actionId, placeholder } = element;
  const Component = multiline ? TextAreaInput : TextInput;
  return (
    <Component
      disabled={loading}
      id={actionId}
      name={actionId}
      rows={6}
      error={error}
      value={value}
      onChange={action}
      placeholder={parser.plainText(placeholder)}
    />
  );
};

export default memo(PlainInputElement);
