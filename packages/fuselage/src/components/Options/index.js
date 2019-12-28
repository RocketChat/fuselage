import React, { useLayoutEffect, useState } from 'react';


import { Box, Flex, Margins, VISIBILITY, ACTIONS, useVisible, Scrollable } from '../Box';
import { Avatar } from '../Avatar';
import { CheckBox } from '../CheckBox';
import { Tile } from '../Tile';

const merge = (...args) => args.filter((e) => e).join(' ');

const prevent = (e) => e.preventDefault() & e.stopPropagation();

const Li = Box.extend('rcx-option', 'li');

export const Empty = React.memo(() => <Box is='span' textStyle='p1' textColor='hint'>Empty</Box>);

export const Option = React.memo(({ id, children: label, focus, selected, ...options }) => <Li key={id} mod-focus={focus} id={id} mod-selected={selected} aria-selected={selected} {...options}>{label}</Li>);

export const CheckOption = React.memo(({ id, children: label, focus, selected, ...options }) => <Li key={id} mod-focus={focus} id={id} aria-selected={selected} {...options}><Margins inline={4}><CheckBox checked={selected} /></Margins><Margins inline={4}><Box is='span' textStyle='p1' textColor='default'>{label}</Box></Margins></Li>);

export const OptionAvatar = React.memo(({ id, value, children: label, focus, selected, ...options }) => (
  <Flex.Container>
    <Li key={id} mod-focus={focus} id={id} mod-selected={selected} aria-selected={selected} {...options}>
      <Margins inline={4}><Avatar size='x20' url={value} tile={label}/></Margins>
      <Margins inline={4}><Box is='span' textStyle='p1' textColor='default'>{label}</Box></Margins>
    </Li>
  </Flex.Container>
));

export const Options = React.forwardRef(({
  maxHeight = '144px',
  multiple,
  renderEmpty: EmptyComponent = Empty,
  className,
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
  }, [cursor]);
  return <Box className={merge('rcx-options', className)} is='div' {...props}>
    <Tile padding='8' elevation='2' ref={ref}>
      <Scrollable vertical smooth>
        <Margins blockStart={4}>
          <Tile elevation='0' padding='none' style={{ maxHeight }} onMouseDown={prevent} onClick={prevent} is='ol' aria-multiselectable={multiple} role='listbox' aria-multiselectable='true' aria-activedescendant={options && options[cursor] && options[cursor][0]}>
            {!options.length && <EmptyComponent/>}
            {options.map(([value, label, selected], i) => <OptionComponent role='option' onMouseDown={(e) => prevent(e) & onSelect([value, label]) && false} key={value} value={value} selected={selected || (multiple !== true && null)} focus={cursor === i || null}>{label}</OptionComponent>)}
          </Tile>
        </Margins>
      </Scrollable>
    </Tile>
  </Box>;
});

export const useCursor = (initial, options, onChange) => {
  const [cursor, setCursor] = useState(initial);
  const visibilityHandler = useVisible();
  const [visibility, hide, show] = visibilityHandler;
  const reset = () => setCursor(0);
  const handleKeyUp = (e) => {
    const { keyCode } = e;
    if (VISIBILITY.HIDEN === visibility && keyCode === ACTIONS.TAB) {
      return show();
    }
  };

  const handleKeyDown = (e) => {
    const lastIndex = options.length - 1;
    const { keyCode, key } = e;
    if (VISIBILITY.HIDEN === visibility && keyCode !== ACTIONS.ESC) {
      return show();
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
      return onChange(options[cursor], visibilityHandler);
    case ACTIONS.ESC:
      e.preventDefault();
      reset();
      return hide();
    default:
      const index = options.findIndex(([, label]) => label[0] === key);
      setCursor(index);
    }
  };

  return [cursor, handleKeyDown, handleKeyUp, reset, visibilityHandler];
};
