import { useEffectEvent } from '@rocket.chat/fuselage-hooks';
import type { KeyboardEvent } from 'react';
import { useState } from 'react';

import { AnimatedVisibility } from '../AnimatedVisibility';
import type { OptionType } from '../Options';
import { useVisible } from '../Options/useVisible';

const isSelectable = <TValue, TLabel>([, , , , type]: OptionType<
  TValue,
  TLabel
>) => !type || type === 'option';

const findIndex = <TValue, TLabel>(
  options: OptionType<TValue, TLabel>[],
  from: number,
  step: 1 | -1,
) => {
  for (let i = from; i >= 0 && i < options.length; i += step) {
    if (isSelectable(options[i])) {
      return i;
    }
  }
  return -1;
};

const firstIndex = <TValue, TLabel>(options: OptionType<TValue, TLabel>[]) =>
  findIndex(options, 0, 1);

const lastIndex = <TValue, TLabel>(options: OptionType<TValue, TLabel>[]) =>
  findIndex(options, options.length - 1, -1);

/**
 * Keyboard navigation + visibility state for the AutoComplete listbox.
 *
 * Replaces the shared `useCursor` god-hook with a focused, `event.key`-based
 * implementation. Visibility is delegated to the shared `useVisible`.
 */
export const useAutoCompleteCursor = <TValue = string, TLabel = unknown>(
  initial: number,
  options: OptionType<TValue, TLabel>[],
  onSelect: (option: OptionType<TValue, TLabel>) => void,
) => {
  const [cursor, setCursor] = useState(initial);
  const [visible, hide, show] = useVisible();

  const reset = useEffectEvent(() => setCursor(0));

  const handleKeyDown = useEffectEvent((e: KeyboardEvent) => {
    const { key } = e;

    if (
      visible === AnimatedVisibility.HIDDEN &&
      key !== 'Escape' &&
      key !== 'Tab'
    ) {
      show();
    }

    switch (key) {
      case 'Home':
        e.preventDefault();
        return setCursor(firstIndex(options));

      case 'End':
        e.preventDefault();
        return setCursor(lastIndex(options));

      case 'ArrowUp':
        e.preventDefault();
        return setCursor((current) =>
          current < 1 ? lastIndex(options) : findIndex(options, current - 1, -1),
        );

      case 'ArrowDown':
        e.preventDefault();
        return setCursor((current) =>
          current === lastIndex(options)
            ? firstIndex(options)
            : findIndex(options, current + 1, 1),
        );

      case 'Enter':
        e.preventDefault();
        if (visible === AnimatedVisibility.VISIBLE) {
          e.nativeEvent.stopImmediatePropagation();
          e.stopPropagation();
        }
        hide();
        return onSelect(options[cursor]);

      case 'Escape':
        e.preventDefault();
        reset();
        hide();
        if (visible === AnimatedVisibility.VISIBLE) {
          e.nativeEvent.stopImmediatePropagation();
          e.stopPropagation();
        }
        return;

      default:
        if (key.match(/^[\d\w]$/i)) {
          const index = options.findIndex(
            (option) =>
              isSelectable(option) &&
              typeof option[1] === 'string' &&
              option[1][0]?.toLowerCase() === key.toLowerCase(),
          );
          if (index > -1) {
            setCursor(index);
          }
        }
    }
  });

  return { cursor, visible, show, hide, reset, handleKeyDown };
};
