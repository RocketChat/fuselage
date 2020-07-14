import { useResizeObserver } from '@rocket.chat/fuselage-hooks';
import React, { useState, useLayoutEffect, useRef, useCallback, useEffect, forwardRef } from 'react';

import { PositionAnimated, Box, Flex, AnimatedVisibility } from '../Box';
import { Icon } from '../Icon';
import { InputBox } from '../InputBox';
import Margins from '../Margins';
import { Options, useCursor } from '../Options';

export const Addon = forwardRef((props, ref) => <Box is='div' rcx-select__addon ref={ref} {...props} />);

const Wrapper = forwardRef((props, ref) => <Box is='div' rcx-select__wrapper ref={ref} {...props} />);

export const Focus = React.forwardRef((props, ref) => <Box ref={ref} fontScale='p2' color='hint' rcx-select__focus is='button' type='button' {...props}/>);

export const Select = ({
  value,
  filter,
  error,
  disabled,
  options = [],
  anchor: Anchor = Focus,
  onChange = () => {},
  getValue = ([value] = []) => value,
  getLabel = ([, label] = []) => label,
  placeholder = '',
  renderOptions: _Options = Options,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(value);

  const currentValue = value !== undefined ? value : internalValue;
  const option = options.find((option) => getValue(option) === currentValue);
  const index = options.indexOf(option);

  const isFirstRun = useRef(true);

  const internalChanged = ([value]) => {
    setInternalValue(value);
    onChange(value);
  };

  const mapOptions = ([value, label]) => {
    if (currentValue === value) {
      return [value, label, true];
    }
    return [value, label];
  };

  const applyFilter = ([, option]) => !filter || ~option.toLowerCase().indexOf(filter.toLowerCase());
  const filteredOptions = options.filter(applyFilter).map(mapOptions);
  const [cursor, handleKeyDown, handleKeyUp, reset, [visible, hide, show]] = useCursor(index, filteredOptions, internalChanged);

  const ref = useRef();

  const { ref: containerRef, borderBoxSize } = useResizeObserver();

  useLayoutEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    hide();
    ref.current.focus();
  }, [internalValue, hide]);

  useEffect(reset, [filter]);

  const valueLabel = getLabel(option);

  const visibleText = (filter === undefined || visible === AnimatedVisibility.HIDDEN) && (valueLabel || (placeholder || typeof placeholder === 'string'));
  return (
    <Box rcx-select disabled={disabled} ref={containerRef} onClick={() => ref.current.focus() & show()} className={[
      error && 'invalid',
      disabled && 'disabled',
    ]}
    {...props}
    >
      <Flex.Item>
        <Flex.Container>
          <Margins inline='neg-x4'>
            <Wrapper rcx-select__wrapper--hidden={!!visibleText}>
              { visibleText && <Flex.Item grow={1} shrink={1}>
                <Margins inline='x4'>
                  <Box is='span' rcx-select__item fontScale='p2' color={valueLabel ? 'default' : 'hint'}>{visibleText}</Box>
                </Margins>
              </Flex.Item>}
              <Anchor disabled={disabled} rcx-input-box--undecorated filter={filter} ref={ref} aria-haspopup='listbox' onClick={show} onBlur={hide} onKeyUp={handleKeyUp} onKeyDown={handleKeyDown} />
              <Margins inline='x4'><Addon children={<Icon name={ visible === AnimatedVisibility.VISIBLE ? 'cross' : 'chevron-down'} size='x20' />}/></Margins>
            </Wrapper>
          </Margins>
        </Flex.Container>
      </Flex.Item>
      <PositionAnimated visible={visible} anchor={containerRef}><_Options width={borderBoxSize.inlineSize} role='listbox' filter={filter} options={filteredOptions} onSelect={internalChanged} cursor={cursor} /></PositionAnimated>
    </Box>);
};

export const SelectFiltered = ({
  options,
  placeholder,
  ...props
}) => {
  const [filter, setFilter] = useState('');
  const anchor = useCallback(React.forwardRef(({ children, filter, ...props }, ref) => <Margins inline='x4'><Flex.Item grow={1} shrink={1}><InputBox.Input className='rcx-select__focus' ref={ref} placeholder={placeholder} value={filter} onChange={() => {}} onInput={(e) => setFilter(e.currentTarget.value)} {...props} rcx-input-box--undecorated /></Flex.Item></Margins>), []);
  return <Select placeholder={null} filter={filter} options={options} {...props} anchor={anchor}/>;
};
