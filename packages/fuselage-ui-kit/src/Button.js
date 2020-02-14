import React from 'react';
import {
  Button,
} from '@rocket.chat/fuselage';

import { useBlockContext, getStyle } from './hooks';

export const UIKitButton = ({ element, context, parser }) => {
  const [{ loading }, action] = useBlockContext(element, context);
  return (
    <Button
      mod-mod-loading={loading}
      {...getStyle(element.style)}
      small
      data-group={element.groupId}
      key={element.actionId}
      children={parser.plainText(element.text)}
      onClick={action}
      value={element.value}
    />
  );
};
