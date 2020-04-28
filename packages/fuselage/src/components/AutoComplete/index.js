import React, { useState, useEffect, useRef } from 'react';

import { Box, PositionAnimated } from '../Box';
import { Chip } from '../Chip';
import { Icon } from '../Icon';
import { useCursor, Options, OptionAvatar } from '../Options';
import { InputBox } from '../InputBox';

const Item = (props) => <Box is='div' marginInline='x4' {...props} />;

const Container = React.forwardRef(({ children, ...props }, ref) => <Box
  {...props}
  is='div'
  rcx-autocomplete
  ref={ref}
>
  {children.map((c, i) => <Item key={i}>{c}</Item>)}
</Box>);

const Addon = (props) => <Box is='div' rcx-autocomplete__addon {...props} />;

const SelectedOptions = React.memo((props) => <Chip {...props}/>);

const prevent = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

export function AutoComplete({
  value,
  filter,
  setFilter = () => {},
  options = [],
  onChange = () => {},
  getLabel = ({ label } = {}) => label,
  getValue = ({ value }) => value,
  renderEmpty,
  placeholder,
}) {
  const [internalValue, setInternalValue] = useState(value || []);

  const currentValue = value !== undefined ? value : internalValue;
  const containerRef = useRef();
  const ref = useRef();
  const internalChanged = ([value]) => {
    if (currentValue.includes(value)) {
      return setInternalValue(currentValue.filter((item) => item !== value));
    }
    setInternalValue([...currentValue, value]);
  };

  useEffect(() => {
    onChange(currentValue);
  }, [currentValue, onChange]);

  const [cursor, handleKeyDown, setCursor, reset, [visible, hide, show]] = useCursor(value, options, onChange);

  useEffect(reset, [filter]);

  return (
    <Container ref={containerRef} onClick={() => ref.current.focus()}>
      <Chip.Wrapper role='listbox'>
        <InputBox.Input ref={ref} onInput={(e) => setFilter(e.currentTarget.value)} onBlur={hide} onFocus={show} onKeyDown={handleKeyDown} placeholder={placeholder} order={1} rcx-input-box--undecorated value={value}/>
        {currentValue.map((value) => <SelectedOptions role='option' key={value} onMouseDown={(e) => prevent(e) & internalChanged(value) && false} children={getLabel(options.find((option) => getValue(option) === value))}/>)}
      </Chip.Wrapper>
      <Addon children={<Icon name='magnifier' size='x20' />}/>
      <PositionAnimated visible={visible} anchor={containerRef}>
        <Options role='option' renderEmpty={renderEmpty} renderItem={OptionAvatar} setCursor={setCursor} cursor={cursor} value={value} options={options.map(({ label, value }) => [value, label])} />
      </PositionAnimated>
    </Container>
  );
}
