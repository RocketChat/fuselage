import React, { useState, useLayoutEffect, useRef } from 'react';

import { Icon } from '../Icon';
import { InputBox, Text } from '../..';
import { AnimatedWrapper } from './Animated';
import { Options } from './Options';
import { useCursor, Container, Focus, Addon } from './Select';

export const MultiSelect = ({
  value,
  options = [],
  anchor: Anchor = Focus,
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
    ref.current && ref.current.focus();
  }, [internalValue]);

  const mapOptions = (options) => options.map(([value, label]) => {
    if (value === currentValue) {
      return [value, label, true];
    }
    return [value, label];
  });

  return (
    <Container>
      <Anchor ref={ref} aria-haspopup='listbox' onClick={show} onBlur={hide} onKeyUp={handleKeyUp} onKeyDown={handleKeyDown} style={{ minWidth: '150px' }} mod-undecorated={'true'} children={option || <Text infoColor>{placeholder}</Text>}/>
      {children}
      <Addon children={<Icon name={ visible ? 'cross' : 'arrow-down'} size='20' />}/>
      <AnimatedWrapper visible={visible}><_Options role='listbox' options={mapOptions(options)} onSelect={internalChanged} cursor={cursor} /></AnimatedWrapper>
    </Container>);
};


export const MultiSelectFiltered = ({
  ...props
}) => <MultiSelect {...props} anchor={({ children, ...props }) => <InputBox.Input {...props} mod-undecorated/>}/>;
