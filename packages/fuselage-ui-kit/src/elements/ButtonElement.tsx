import { Button, Throbber } from '@rocket.chat/fuselage';
import * as UiKit from '@rocket.chat/ui-kit';
import React, { ReactElement } from 'react';

import { useUiKitState } from '../hooks/useUiKitState';

type ButtonElementProps = {
  element: UiKit.ButtonElement;
  context: UiKit.BlockContext;
  parser: UiKit.SurfaceRenderer<ReactElement>;
};

const ButtonElement = ({
  element,
  context,
  parser,
}: ButtonElementProps): ReactElement => {
  const [{ loading }, action] = useUiKitState(element, context);

  if (element.url) {
    return (
      <Button
        is='a'
        target='_blank'
        href={element.url}
        disabled={loading}
        primary={element.style === 'primary'}
        danger={element.style === 'danger'}
        minWidth='4ch'
        small
        onClick={action}
      >
        {loading ? (
          <Throbber />
        ) : (
          parser.renderTextObject(element.text, 0, context)
        )}
      </Button>
    );
  }

  return (
    <Button
      disabled={loading}
      primary={element.style === 'primary'}
      danger={element.style === 'danger'}
      minWidth='4ch'
      small
      value={element.value}
      onClick={action}
    >
      {loading ? (
        <Throbber />
      ) : (
        parser.renderTextObject(element.text, 0, context)
      )}
    </Button>
  );
};

export default ButtonElement;
