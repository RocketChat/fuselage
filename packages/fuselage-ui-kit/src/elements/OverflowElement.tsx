import {
  Button,
  PositionAnimated,
  Options,
  Icon,
  useCursor,
} from '@rocket.chat/fuselage';
import * as UiKit from '@rocket.chat/ui-kit';
import React, { useRef, useCallback, ReactElement, useMemo } from 'react';

import { useUiKitState } from '../hooks/useUiKitState';
import { fromTextObjectToString } from '../utils/fromTextObjectToString';

type OverflowElementProps = {
  element: UiKit.OverflowElement;
  context: UiKit.BlockContext;
  parser: UiKit.SurfaceRenderer<ReactElement>;
};

const OverflowElement = ({
  element,
  context,
  parser,
}: OverflowElementProps): ReactElement => {
  const [{ loading }, action] = useUiKitState(element, context);

  const fireChange = useCallback(
    ([value]: [unknown, string]) => action({ target: { value } }),
    [action]
  );

  const options = useMemo<[string, string][]>(
    () =>
      element.options.map(({ value, text }, i) => [
        value,
        fromTextObjectToString(parser, text, i, context) ?? '',
      ]),
    [context, element.options, parser]
  );

  const [cursor, handleKeyDown, handleKeyUp, reset, [visible, hide, show]] =
    useCursor(-1, options, (selectedOption, [, hide]) => {
      fireChange(selectedOption);
      reset();
      hide();
    });

  const ref = useRef<HTMLElement>(null);
  const onClick = useCallback(() => {
    ref.current?.focus();
    show();
  }, [show]);

  const handleSelection = useCallback(
    ([value]: [unknown, string]) => {
      action({ target: { value } });
      reset();
      hide();
    },
    [action, hide, reset]
  );

  return (
    <>
      <Button
        ref={ref}
        small
        ghost
        onClick={onClick}
        onBlur={hide}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        disabled={loading}
      >
        <Icon name='kebab' size={20} />
      </Button>
      <PositionAnimated
        width='auto'
        visible={visible}
        anchor={ref}
        placement='bottom-start'
      >
        <Options onSelect={handleSelection} options={options} cursor={cursor} />
      </PositionAnimated>
    </>
  );
};

export default OverflowElement;
