import {
  useMutableCallback,
  useDebouncedState,
} from '@rocket.chat/fuselage-hooks';
import React, { useLayoutEffect, useState, useMemo } from 'react';

import { AnimatedVisibility, Box, Scrollable } from '../Box';
import { CheckBox } from '../CheckBox';
import Tile from '../Tile';
import { Option } from './Option';

export const ACTIONS = {
  ESC: 27,
  KEY_UP: 38,
  KEY_DOWN: 40,
  HOME: 36,
  END: 35,
  TAB: 9,
  ENTER: 13,
};

const prevent = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

export const Empty = React.memo(() => <Option color='hint' label='Empty' />);

export const CheckOption = React.memo(
  ({ selected, children: label, ...options }) => (
    <Option label={label} selected={selected} {...options}>
      <CheckBox checked={selected} />
    </Option>
  )
);

export const Options = React.forwardRef(
  (
    {
      maxHeight = '144px',
      multiple,
      renderEmpty: EmptyComponent = Empty,
      options,
      cursor,
      renderItem: OptionComponent = Option,
      onSelect,
      ...props
    },
    ref
  ) => {
    useLayoutEffect(() => {
      const { current } = ref;
      const li = current.querySelector('.rcx-option--focus');
      if (!li) {
        return;
      }
      if (
        li.offsetTop + li.clientHeight >
          current.scrollTop + current.clientHeight ||
        li.offsetTop - li.clientHeight < current.scrollTop
      ) {
        current.scrollTop = li.offsetTop;
      }
    }, [cursor, ref]);
    const optionsMemoized = useMemo(
      () =>
        options.map(([value, label, selected], i) => (
          <OptionComponent
            role='option'
            label={label}
            onMouseDown={(e) => prevent(e) & onSelect([value, label]) && false}
            onTouchStart={(e) => prevent(e) & onSelect([value, label]) && false}
            key={value}
            value={value}
            selected={selected || (multiple !== true && null)}
            focus={cursor === i || null}
          />
        )),
      [options, multiple, cursor, onSelect]
    );
    return (
      <Box rcx-options {...props}>
        <Tile padding={0} paddingBlock={'x12'} paddingInline={0} elevation='2'>
          <Scrollable vertical smooth>
            <Tile
              ref={ref}
              elevation='0'
              padding='none'
              maxHeight={maxHeight}
              onMouseDown={prevent}
              onClick={prevent}
              is='ol'
              aria-multiselectable={multiple}
              role='listbox'
              aria-multiselectable='true'
              aria-activedescendant={
                options && options[cursor] && options[cursor][0]
              }
            >
              {!options.length && <EmptyComponent />}
              {optionsMemoized}
            </Tile>
          </Scrollable>
        </Tile>
      </Box>
    );
  }
);

const useVisible = (initialVisibility = AnimatedVisibility.HIDDEN) => {
  const [visible, setVisible] = useDebouncedState(initialVisibility, 10);
  const hide = useMutableCallback(() => setVisible(AnimatedVisibility.HIDDEN));
  const show = useMutableCallback(() => setVisible(AnimatedVisibility.VISIBLE));

  return [visible, hide, show];
};

export const useCursor = (initial, options, onChange) => {
  const [cursor, setCursor] = useState(initial);
  const visibilityHandler = useVisible();
  const [visibility, hide, show] = visibilityHandler;
  const reset = useMutableCallback(() => setCursor(0));
  const handleKeyUp = useMutableCallback((e) => {
    const { keyCode } = e;
    if (AnimatedVisibility.HIDDEN === visibility && keyCode === ACTIONS.TAB) {
      return show();
    }
  });

  const handleKeyDown = useMutableCallback((e) => {
    const lastIndex = options.length - 1;
    const { keyCode, key } = e;
    if (
      AnimatedVisibility.HIDDEN === visibility &&
      keyCode !== ACTIONS.ESC &&
      keyCode !== ACTIONS.TAB
    ) {
      show();
    }
    switch (keyCode) {
      case ACTIONS.HOME:
        e.preventDefault();
        return reset();
      case ACTIONS.END:
        e.preventDefault();
        return setCursor(lastIndex);
      case ACTIONS.KEY_UP:
        e.preventDefault();
        if (cursor < 1) {
          return setCursor(lastIndex);
        }
        return setCursor(cursor - 1);
      case ACTIONS.KEY_DOWN:
        e.preventDefault();
        if (cursor === lastIndex) {
          return setCursor(0);
        }
        return setCursor(cursor + 1);

      case ACTIONS.ENTER:
        e.preventDefault();
        if (visibility === AnimatedVisibility.VISIBLE) {
          e.persist();
          e.nativeEvent.stopImmediatePropagation(); // TODO
          e.stopPropagation();
        }
        hide();
        onChange(options[cursor], visibilityHandler);
        return;
      case ACTIONS.ESC:
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
            ([, label]) => label[0].toLowerCase() === key
          );
          ~index && setCursor(index);
        }
    }
  });

  return [cursor, handleKeyDown, handleKeyUp, reset, visibilityHandler];
};

Options.AvatarSize = 'x20';
