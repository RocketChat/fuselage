import React, { useCallback, useLayoutEffect, useState, forwardRef, useMemo } from 'react';


import { AnimatedVisibility, Box, Flex, Margins, Scrollable } from '../Box';
import { Avatar } from '../Avatar';
import { CheckBox } from '../CheckBox';
import { Tile } from '../Tile';

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

const Li = forwardRef(function Li(props, ref) {
  return <Box is='li' rcx-option ref={ref} {...props} />;
});

export const Empty = React.memo(() => <Box is='span' fontScale='p1' color='hint'>Empty</Box>);

export const Option = React.memo(({ id, children: label, focus, selected, ...options }) => <Li key={id} rcx-option--focus={focus} id={id} rcx-option--selected={selected} aria-selected={selected} {...options}>{label}</Li>);

export const CheckOption = React.memo(({ id, children: label, focus, selected, ...options }) => <Li key={id} rcx-option--focus={focus} id={id} aria-selected={selected} {...options}><Margins inline='x4'><CheckBox checked={selected} /></Margins><Margins inline='x4'><Box is='span' fontScale='p1' color='default'>{label}</Box></Margins></Li>);

export const OptionAvatar = React.memo(({ id, value, children: label, focus, selected, ...options }) => (
  <Flex.Container>
    <Li key={id} rcx-option--focus={focus} id={id} rcx-option--selected={selected} aria-selected={selected} {...options}>
      <Margins inline='x4'><Avatar size='x20' url={value} tile={label}/></Margins>
      <Margins inline='x4'><Box is='span' fontScale='p1' color='default'>{label}</Box></Margins>
    </Li>
  </Flex.Container>
));

export const Options = React.forwardRef(({
  maxHeight = '144px',
  multiple,
  renderEmpty: EmptyComponent = Empty,
  options,
  cursor,
  renderItem: OptionComponent = Option,
  onSelect,
  ...props
}, ref) => {
  useLayoutEffect(() => {
    const { current } = ref;
    const li = current.querySelector('.rcx-option--focus');
    if (!li) {
      return;
    }
    if (li.offsetTop + li.clientHeight > current.scrollTop + current.clientHeight || li.offsetTop - li.clientHeight < current.scrollTop) {
      current.scrollTop = li.offsetTop;
    }
  }, [cursor, ref]);

  const optionsMemoized = useMemo(() => options.map(([value, label, selected], i) => <OptionComponent role='option' onMouseDown={(e) => prevent(e) & onSelect([value, label]) && false} key={value} value={value} selected={selected || (multiple !== true && null)} focus={cursor === i || null}>{label}</OptionComponent>), [options, multiple, cursor, onSelect]);
  return <Box rcx-options is='div' {...props}>
    <Tile padding='x8' elevation='2'>
      <Scrollable vertical smooth>
        <Margins blockStart='x4'>
          <Tile ref={ref} elevation='0' padding='none' maxHeight={maxHeight} onMouseDown={prevent} onClick={prevent} is='ol' aria-multiselectable={multiple} role='listbox' aria-multiselectable='true' aria-activedescendant={options && options[cursor] && options[cursor][0]}>
            {!options.length && <EmptyComponent/>}
            {optionsMemoized}
          </Tile>
        </Margins>
      </Scrollable>
    </Tile>
  </Box>;
});

const useVisible = (initialVisibility = AnimatedVisibility.HIDDEN) => {
  const [visible, setVisible] = useState(initialVisibility);
  const hide = useCallback(() => setVisible(AnimatedVisibility.HIDDEN), []);
  const show = useCallback(() => setVisible(AnimatedVisibility.VISIBLE), []);

  return [visible, hide, show];
};

export const useCursor = (initial, options, onChange) => {
  const [cursor, setCursor] = useState(initial);
  const visibilityHandler = useVisible();
  const [visibility, hide, show] = visibilityHandler;
  const reset = () => setCursor(0);
  const handleKeyUp = (e) => {
    const { keyCode } = e;
    if (AnimatedVisibility.HIDDEN === visibility && keyCode === ACTIONS.TAB) {
      return show();
    }
  };

  const handleKeyDown = (e) => {
    const lastIndex = options.length - 1;
    const { keyCode, key } = e;
    if (AnimatedVisibility.HIDDEN === visibility && keyCode !== ACTIONS.ESC && keyCode !== ACTIONS.TAB) {
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
      return onChange(options[cursor], visibilityHandler);
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
        const index = options.findIndex(([, label]) => label[0].toLowerCase() === key);
        ~index && setCursor(index);
      }
    }
  };

  return [cursor, handleKeyDown, handleKeyUp, reset, visibilityHandler];
};
