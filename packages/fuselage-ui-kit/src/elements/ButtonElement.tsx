import { Button, Throbber } from '@rocket.chat/fuselage';
import {
  BlockContext,
  ButtonElement as ButtonElementProps,
} from '@rocket.chat/ui-kit';
import { BaseSurfaceRenderer } from '@rocket.chat/ui-kit/dist/esm/rendering/BaseSurfaceRenderer';
import React, { FC } from 'react';

import { useUiKitState } from '../hooks/useUiKitState';

const ButtonElement: FC<{
  element: ButtonElementProps;
  context?: BlockContext;
  parser: BaseSurfaceRenderer<FC>;
}> = ({ element, context, parser }) => {
  const [{ loading }, action] = useUiKitState(element, context);
  return (
    <Button
      is={element.url ? 'a' : undefined}
      target={element.url ? '_blank' : undefined}
      href={element.url}
      disabled={loading}
      primary={element.style === 'primary'}
      danger={element.style === 'danger'}
      minWidth='4ch'
      small
      value={element.value}
      // data-group={element.groupId}
      onClick={action}
    >
      {loading ? <Throbber /> : parser.plainText(element.text, context)}
    </Button>
  );
};

export default ButtonElement;
