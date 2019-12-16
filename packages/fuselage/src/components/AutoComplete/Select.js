import React, { useState, useLayoutEffect, useRef } from 'react';

import { Icon } from '../Icon';
import { AnimatedWrapper, VISIBILITY, ACTIONS, useVisible } from './Animated';
import { Box, Margins } from '../Box';
import { Options } from './Options';

export const Container = ({ children, ...props }) => <Box {...props} is='label' className='rcx-select'>{children.map((c, i) => <Margins key={i} all={4}>{c}</Margins>)}</Box>;

export const Addon = Box.extend('rcx-select__addon', 'div');

export const Focus = React.forwardRef((props, ref) => <Box ref={ref} className='rcx-select__focus' is='button' {...props}/>);

export const useCursor = (initial, options, onChange) => {
  const [cursor, setCursor] = useState(initial);
  const [visibility, hide, show] = useVisible();

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
      return setCursor(0);
    case ACTIONS.END:
      e.preventDefault();
      return setCursor(lastIndex);
    case ACTIONS.KEY_UP:
      e.preventDefault();
      if (cursor === 0) {
        return;
      }
      return setCursor(cursor - 1);
    case ACTIONS.KEY_DOWN:
      e.preventDefault();
      if (cursor === lastIndex) {
        return;
      }
      return setCursor(cursor + 1);

    case ACTIONS.ENTER:
      e.preventDefault();
      return onChange(options[cursor]);
    case ACTIONS.ESC:
      e.preventDefault();
      setCursor(0);
      return hide();
    default:
      const index = options.findIndex(([, label]) => label[0] === key);
      setCursor(index);
    }
  };

  return [cursor, handleKeyDown, handleKeyUp, [visibility, hide, show]];
};

export const Select = ({
  value,
  options = [],
  children,
  onChange = () => {},
  getValue = ([value]) => value,
  placeholder,
  renderOptions: _Options = Options,
}) => {
  const [internalValue, setInternalValue] = useState(value);


  const currentValue = value !== undefined ? value : internalValue;
  const option = options.find((option) => getValue(option) === currentValue);
  const index = options.indexOf(option);


  const internalChanged = (value) => {
    onChange(value);
    setInternalValue(value[0]);
  };

  const [cursor, handleKeyDown, handleKeyUp, [visible, hide, show]] = useCursor(index, options, internalChanged);

  const ref = useRef();

  useLayoutEffect(() => {
    hide();
    ref.current.focus();
  }, [internalValue]);

  const mapOptions = (options) => options.map(([value, label]) => {
    if (value === currentValue) {
      return [value, label, true];
    }
    return [value, label];
  });

  return (
    <Container>
      <Focus ref={ref} aria-haspopup='listbox' onClick={show} onBlur={hide} onKeyUp={handleKeyUp} onKeyDown={handleKeyDown} style={{ minWidth: '150px' }} mod-undecorated={'true'} children={option || <Box is='span' textColor='info'>{placeholder}</Box>}/>
      {children}
      <Addon children={<Icon name={ visible ? 'cross' : 'arrow-down'} size='20' />}/>
      <AnimatedWrapper visible={visible}><_Options role='listbox' options={mapOptions(options)} onSelect={internalChanged} cursor={cursor} /></AnimatedWrapper>
    </Container>);
};

export const SelectFiltered = () => {

};
