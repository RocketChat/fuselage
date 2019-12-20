import React, { useState, useRef, useEffect, useCallback } from 'react';

import { AnimatedWrapper, Box, Flex, Margins, MarginsWrapper } from '../Box';
import { Chip } from '../Chip';
import { Icon } from '../Icon';
import { InputBox } from '../InputBox';
import { Options, CheckOption } from '../Options';
import { useCursor, Focus, Addon } from './Select';

const Container = ({ children, ...props }) => <Box {...props} is='div' className='rcx-select'>{console.log(props, children)}{React.Children.map(children, (c, i) => <Margins key={i} inline={4}>{c}</Margins>)}</Box>;

const SelectedOptions = React.memo((props) => <Chip {...props}/>);

const prevent = (e) => e.preventDefault() & e.stopPropagation();
export const MultiSelect = ({
  value,
  filter,
  options = [],
  anchor: Anchor = Focus,
  onChange = () => {},
  getLabel = ([, label] = []) => label,
  getValue = ([value]) => value,
  placeholder,
  renderOptions: _Options = Options,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(value || []);

  const debounceRef = useRef();

  const currentValue = value !== undefined ? value : internalValue;
  const option = options.find((option) => getValue(option) === currentValue);
  const index = options.indexOf(option);

  const internalChanged = ([value]) => {
    if (currentValue.includes(value)) {
      return setInternalValue(currentValue.filter((item) => item !== value));
    }
    setInternalValue([...currentValue, value]);
  };

  useEffect(() => {
    if (!debounceRef.current) {
      debounceRef.current = true;
      return;
    }
    onChange(currentValue);
  }, [currentValue.join()]);

  const mapOptions = ([value, label]) => {
    if (currentValue.includes(value)) {
      return [value, label, true];
    }
    return [value, label];
  };
  const applyFilter = ([, option]) => !filter || ~option.toLowerCase().indexOf(filter.toLowerCase());
  const filteredOptions = options.filter(applyFilter).map(mapOptions);
  const [cursor, handleKeyDown, handleKeyUp, reset, [visible, hide, show]] = useCursor(index, filteredOptions, internalChanged);

  useEffect(reset, [filter]);

  const ref = useRef();

  return (
    <Container onClick={() => ref.current.focus() & show()}{...props}>
      <Flex.Container>
        <MarginsWrapper all={8}>
          <Chip.Wrapper role='listbox'>
            <Anchor ref={ref} aria-haspopup='listbox' onClick={show} onBlur={hide} onKeyUp={handleKeyUp} onKeyDown={handleKeyDown} style={{ order: 1 }} mod-undecorated children={option || <Box is='span' textStyle='p1' textColor='info'>{placeholder}</Box>}/>
            {currentValue.map((value) => <SelectedOptions role='option' key={value} onMouseDown={(e) => prevent(e) & internalChanged([value]) && false} children={getLabel(options.find(([val]) => val === value))}/>)}
          </Chip.Wrapper>
        </MarginsWrapper>
      </Flex.Container>
      <Addon children={<Icon name={ visible ? 'cross' : 'arrow-down'} size='20' />}/>
      <AnimatedWrapper visible={visible}><_Options onMouseDown={prevent} multiple filter={filter} renderItem={CheckOption} role='listbox' options={filteredOptions} onSelect={internalChanged} cursor={cursor} /></AnimatedWrapper>
    </Container>);
};

export const MultiSelectFiltered = ({
  options,
  placeholder,
  ...props
}) => {
  const [filter, setFilter] = useState('');
  const anchor = useCallback(({ children, filter, ...props }) => <InputBox.Input placeholder={placeholder} value={filter} onInput={(e) => setFilter(e.currentTarget.value)} {...props} mod-undecorated={true}/>, []);
  return <MultiSelect filter={filter} options={options} {...props} anchor={anchor}/>;
};
