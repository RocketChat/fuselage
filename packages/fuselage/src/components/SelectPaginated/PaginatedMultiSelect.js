import {
  useMutableCallback,
  useResizeObserver,
} from '@rocket.chat/fuselage-hooks';
import React, { useState, useRef, useCallback } from 'react';

import { AnimatedVisibility, Box, Flex, Position } from '../Box';
import Chip from '../Chip';
import { Icon } from '../Icon';
import { InputBox } from '../InputBox';
import Margins from '../Margins';
import { OptionsPaginated, useVisible } from '../OptionsPaginated';
import { Focus, Addon } from '../Select';

const SelectedOptions = React.memo((props) => (
  <Chip maxWidth='150px' withTruncatedText {...props} />
));

const prevent = (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
};

export const PaginatedMultiSelect = ({
  withTitle,
  value,
  filter,
  options = [],
  error,
  disabled,
  anchor: Anchor = Focus,
  onChange = () => {},
  placeholder,
  renderOptions: _Options = OptionsPaginated,
  endReached,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(value || []);

  const currentValue = value !== undefined ? value : internalValue;
  const option = options.find((option) => option.value === currentValue);

  const internalChanged = ([value]) => {
    if (currentValue.some((item) => item.value === value.value)) {
      const newValue = currentValue.filter(
        (item) => item.value !== value.value
      );
      setInternalValue(newValue);
      return onChange(newValue);
    }
    const newValue = [...currentValue, value];
    setInternalValue(newValue);
    return onChange(newValue);
  };

  const [visible, hide, show] = useVisible();

  const ref = useRef();
  const { ref: containerRef, borderBoxSize } = useResizeObserver();
  return (
    <Box
      is='div'
      rcx-select
      className={[error && 'invalid', disabled && 'disabled']}
      ref={containerRef}
      onClick={useMutableCallback(() =>
        visible === AnimatedVisibility.VISIBLE
          ? hide()
          : ref?.current.focus() & show()
      )}
      disabled={disabled}
      {...props}
    >
      <Flex.Item grow={1}>
        <Margins inline='x4'>
          <Flex.Container>
            <Box is='div'>
              <Box
                is='div'
                display='flex'
                alignItems='center'
                flexWrap='wrap'
                margin='-x8'
                role='listbox'
              >
                <Margins all='x4'>
                  <Anchor
                    disabled={disabled}
                    ref={ref}
                    aria-haspopup='listbox'
                    onClick={show}
                    onBlur={hide}
                    order={1}
                    rcx-input-box--undecorated
                    children={!value ? option || placeholder : null}
                  />
                  {currentValue.map((value) => (
                    <SelectedOptions
                      {...(withTitle && {
                        title:
                          value.label ||
                          options.find((val) => val.value === value)?.label,
                      })}
                      tabIndex={-1}
                      role='option'
                      key={value && value.value}
                      onMouseDown={(e) => {
                        prevent(e);
                        internalChanged([value]);
                        return false;
                      }}
                      children={
                        value.label ||
                        options.find((val) => val.value === value)?.label
                      }
                    />
                  ))}
                </Margins>
              </Box>
            </Box>
          </Flex.Container>
        </Margins>
      </Flex.Item>
      <Flex.Item grow={0} shrink={0}>
        <Margins inline='x4'>
          <Addon
            children={
              <Icon
                name={
                  visible === AnimatedVisibility.VISIBLE
                    ? 'cross'
                    : 'chevron-down'
                }
                size='x20'
              />
            }
          />
        </Margins>
      </Flex.Item>
      <AnimatedVisibility visibility={visible}>
        <Position anchor={containerRef}>
          <_Options
            {...(withTitle && { title: withTitle })}
            width={borderBoxSize.inlineSize}
            onMouseDown={prevent}
            multiple
            filter={filter}
            role='listbox'
            options={options}
            onSelect={internalChanged}
            endReached={endReached}
          />
        </Position>
      </AnimatedVisibility>
    </Box>
  );
};

export const PaginatedMultiSelectFiltered = ({
  filter,
  setFilter,
  options,
  placeholder,
  ...props
}) => {
  const anchor = useCallback(
    React.forwardRef(({ children, filter, ...props }, ref) => (
      <Flex.Item grow={1}>
        <InputBox.Input
          ref={ref}
          placeholder={placeholder}
          value={filter}
          onInput={(e) => setFilter(e.currentTarget.value)}
          {...props}
          rcx-input-box--undecorated
        />
      </Flex.Item>
    )),
    []
  );
  return (
    <PaginatedMultiSelect
      filter={filter}
      options={options}
      {...props}
      anchor={anchor}
    />
  );
};
