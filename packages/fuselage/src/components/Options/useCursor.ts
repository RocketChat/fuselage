import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import { KeyboardEvent, useState } from 'react';

import AnimatedVisibility from '../AnimatedVisibility';
import type { OptionType } from './Options';
import { useVisible } from './useVisible';

const keyCodes = {
  ESC: 27,
  KEY_UP: 38,
  KEY_DOWN: 40,
  HOME: 36,
  END: 35,
  TAB: 9,
  ENTER: 13,
};

export type UseCursorOnChange<T> = (
  option: T,
  visibilityHandler: ReturnType<typeof useVisible>
) => void;

export const useCursor = <T extends [unknown, unknown, unknown?] = OptionType>(
  initial: number,
  options: Array<T>,
  onChange: UseCursorOnChange<T>
): [
  cursor: number,
  handleKeyDown: (e: KeyboardEvent<HTMLOrSVGElement>) => void,
  handleKeyUp: (e: KeyboardEvent<HTMLOrSVGElement>) => void,
  reset: () => void,
  visibilityHandler: ReturnType<typeof useVisible>
] => {
  const [cursor, setCursor] = useState(initial);
  const visibilityHandler = useVisible();
  const [visibility, hide, show] = visibilityHandler;
  const reset = useMutableCallback(() => setCursor(0));
  const handleKeyUp = useMutableCallback(
    (e: KeyboardEvent<HTMLOrSVGElement>) => {
      const { keyCode } = e;
      if (
        AnimatedVisibility.HIDDEN === visibility &&
        keyCode === keyCodes.TAB
      ) {
        return show();
      }
    }
  );

  const handleKeyDown = useMutableCallback(
    (e: KeyboardEvent<HTMLOrSVGElement>) => {
      const lastIndex = options.length - 1;
      const { keyCode, key } = e;
      if (
        AnimatedVisibility.HIDDEN === visibility &&
        keyCode !== keyCodes.ESC &&
        keyCode !== keyCodes.TAB
      ) {
        show();
      }
      switch (keyCode) {
        case keyCodes.HOME:
          e.preventDefault();
          return reset();
        case keyCodes.END:
          e.preventDefault();
          return setCursor(lastIndex);
        case keyCodes.KEY_UP:
          e.preventDefault();
          if (cursor < 1) {
            return setCursor(lastIndex);
          }
          return setCursor(cursor - 1);
        case keyCodes.KEY_DOWN:
          e.preventDefault();
          if (cursor === lastIndex) {
            return setCursor(0);
          }
          return setCursor(cursor + 1);

        case keyCodes.ENTER:
          e.preventDefault();
          if (visibility === AnimatedVisibility.VISIBLE) {
            e.persist();
            e.nativeEvent.stopImmediatePropagation(); // TODO
            e.stopPropagation();
          }
          hide();
          onChange(options[cursor], visibilityHandler);
          return;
        case keyCodes.ESC:
          e.preventDefault();
          reset();
          hide();
          if (visibility === AnimatedVisibility.VISIBLE) {
            e.persist();
            e.nativeEvent.stopImmediatePropagation(); // TODO
            e.stopPropagation();
            return false;
          }
          break;
        default:
          if (key.match(/^[\d\w]$/i)) {
            const index = options.findIndex(
              ([, label]) =>
                typeof label === 'string' && label[0].toLowerCase() === key
            );
            ~index && setCursor(index);
          }
      }
    }
  );

  return [cursor, handleKeyDown, handleKeyUp, reset, visibilityHandler];
};
