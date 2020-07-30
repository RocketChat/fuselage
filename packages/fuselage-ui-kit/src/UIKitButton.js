import React from 'react';
import {
  Button,
  Throbber,
} from '@rocket.chat/fuselage';

import { useBlockContext, getStyle } from './hooks';

export const UIKitButton = ({ element, context, parser }) => {
  const [{ loading }, action] = useBlockContext(element, context);
  return (
    <Button
      disabled={loading}
      {...getStyle(element.style)}
      small
      data-group={element.groupId}
      key={element.actionId}
      onClick={action}
      value={element.value}
    >{ loading ? <Throbber/> : parser.plainText(element.text)}</Button>
  );
};
