import React, { useState, useEffect } from 'react';

import { Icon } from '../Icon';
import { Margins, Chip, InputBox } from '../..';
import { AnimatedWrapper } from './Animated';
import { Box } from '../Box';
import { Options, OptionAvatar } from './Options';
import { useCursor } from './Select';

const Item = ({ children }) => <Margins inline={4}><Box is='li'>{children}</Box></Margins>;
const Container = ({ children, ...props }) => <Box {...props} is='label' className='rcx-autocomplete'>{children.map((c, i) => <Item key={i}>{c}</Item>)}</Box>;
const Addon = Box.extend('rcx-autocomplete__addon', 'div');
const SelectedOptions = React.memo((props) => <Chip {...props}/>);
// const Focus = React.forwardRef((props, ref) => <Box ref={ref} className='rcx-select__focus' is='button' {...props}/>);
const prevent = (e) => e.preventDefault() & e.stopPropagation();
export const AutoComplete = function AutoComplete({
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
  // const option = options.find((option) => getValue(option) === currentValue);
  // const index = options.indexOf(option);

  const internalChanged = ([value]) => {
    if (currentValue.includes(value)) {
      return setInternalValue(currentValue.filter((item) => item !== value));
    }
    setInternalValue([...currentValue, value]);
  };

  useEffect(() => onChange(currentValue), [currentValue.join()]);


  const [cursor, handleKeyDown, setCursor, reset, [visible, hide, show]] = useCursor(value, options, onChange);

  useEffect(reset, [filter]);

  return (
    <Container is='label' style={{ position: 'relative' }}>
      <Chip.Wrapper role='listbox'>
        <InputBox.Input onInput={(e) => setFilter(e.currentTarget.value)} onBlur={hide} onFocus={show} onKeyDown={handleKeyDown} placeholder={placeholder} style={{ order: 1 }} mod-undecorated value={value}/>
        {currentValue.map((value) => <SelectedOptions key={value} onMouseDown={(e) => prevent(e) & internalChanged(value) && false} children={getLabel(options.find((option) => getValue(option) === value))}/>)}
      </Chip.Wrapper>
      <Addon children={<Icon name='magnifier' size='20' />}/>
      <AnimatedWrapper visible={visible}><Options renderEmpty={renderEmpty} renderItem={OptionAvatar} setCursor={setCursor} cursor={cursor} value={value} options={options.map(({ label, value }) => [value, label])} /></AnimatedWrapper>
    </Container>
  );
};

AutoComplete.displayName = 'AutoComplete';

// export const AutoCompleteExample = () => {
//   const [options, setOptions] = useState([]);
//   const [filter, setFilter] = useState('');
//   const [value, setValue] = useState([]);

//   useEffect(() => {
//     (async () => {
//       const result = await Promise.resolve([]);
//       setOptions(result);
//     })();
//   }, [filter]);

//   return <AutoComplete { ...{ value, filter, setFilter, options, onChange: setValue } }/>;
// };
