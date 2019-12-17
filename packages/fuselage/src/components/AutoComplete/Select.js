import React, { useState, useLayoutEffect, useRef, useCallback } from 'react';

import { Icon } from '../Icon';
import { Margins, MarginsWrapper, Text, InputBox, Flex } from '../..';
import { AnimatedWrapper, VISIBILITY, ACTIONS, useVisible } from './Animated';
import { Box } from '../Box';
import { Options } from './Options';

export const Container = ({ ...props }) => <Box {...props} is='label' className='rcx-select'/>;

export const Addon = Box.extend('rcx-select__addon', 'div');

const Wrapper = ({ children, ...props }) => <Box children={React.Children.map(children, (c, i) => <Margins key={i} inline={4}>{c}</Margins>)} is={'div'} {...props} className={'rcx-select__wrapper'}/>;

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
  filter,
  options = [],
  anchor: Anchor = Focus,
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
    setInternalValue(value[0]);
  };

  const [cursor, handleKeyDown, handleKeyUp, [visible, hide, show]] = useCursor(index, options, internalChanged);

  const ref = useRef();

  useLayoutEffect(() => {
    hide();
    ref.current.focus();
    onChange(internalValue);
  }, [internalValue]);


  const mapOptions = ([value, label]) => {
    if (currentValue === value) {
      return [value, label, true];
    }
    return [value, label];
  };

  const applyFilter = ([, option]) => !filter || ~option.toLowerCase().indexOf(filter.toLowerCase());
  const filteredOptions = options.filter(applyFilter).map(mapOptions);

  return (
    <Container>
      <Flex.Container>
        <MarginsWrapper inline={4}>
          <Wrapper mod-visible={true}>
            {(filter === undefined || !visible) && <Text infoColor>{option || placeholder}</Text>}
            <Wrapper mod-hiden={!visible}>
              <Anchor mod-undecorated={true} filter={filter} ref={ref} aria-haspopup='listbox' onClick={show} onBlur={hide} onKeyUp={handleKeyUp} onKeyDown={handleKeyDown} />
            </Wrapper>
            <Addon children={<Icon name={ visible ? 'cross' : 'arrow-down'} size='20' />}/>
          </Wrapper>
        </MarginsWrapper>
      </Flex.Container>
      <AnimatedWrapper visible={visible}><_Options role='listbox' filter={filter} options={filteredOptions} onSelect={internalChanged} cursor={cursor} /></AnimatedWrapper>
    </Container>);
};

export const SelectFiltered = ({
  ...props
}) => {
  const [filter, setFilter] = useState('');
  const anchor = useCallback(React.forwardRef(({ children, placeholder, filter, ...props }, ref) => <InputBox.Input ref={ref} placeholder={placeholder} value={filter} onInput={(e) => setFilter(e.currentTarget.value)} {...props} />), []);

  return <Select {...props} anchor={anchor} filter={filter} />;
};
