import {
  useMutableCallback,
  useResizeObserver,
} from '@rocket.chat/fuselage-hooks';
import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  forwardRef,
  useMemo,
} from 'react';

import { PositionAnimated, Box, AnimatedVisibility } from '../Box';
import { Icon } from '../Icon';
import { InputBox } from '../InputBox';
import { OptionsPaginated, useVisible } from '../OptionsPaginated';

const Addon = forwardRef((props, ref) => (
  <Box is='div' rcx-select__addon ref={ref} {...props} />
));

const Wrapper = forwardRef((props, ref) => (
  <Box is='div' rcx-select__wrapper ref={ref} {...props} />
));

const Focus = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    fontScale='p2'
    color='hint'
    rcx-select__focus
    is='button'
    type='button'
    {...props}
  />
));

const prevent = (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
};

const useDidUpdate = (func = []) => {
  const didMount = useRef(false);
  const fn = useMutableCallback(func);

  useEffect(() => {
    if (didMount.current) {
      fn();
    }
    didMount.current = true;
  }, [fn]);
};

export const PaginatedSelect = ({
  value,
  withTitle,
  filter,
  setFilter,
  error,
  disabled,
  options = [],
  anchor: Anchor = Focus,
  onChange = () => {},
  placeholder = '',
  renderOptions: _Options = OptionsPaginated,
  endReached,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(value);

  const currentValue = value !== undefined ? value : internalValue;

  const option = options.find((option) => option?.value === currentValue);

  const [visible, hide, show] = useVisible();

  const internalChangedByClick = useMutableCallback(([value]) => {
    setInternalValue(value);
    onChange(value);
    hide();
  });

  const ref = useRef();

  const { ref: containerRef, borderBoxSize } = useResizeObserver();

  useDidUpdate([filter, internalValue]);

  const valueLabel = option?.label;

  const visibleText =
    (filter === undefined || visible === AnimatedVisibility.HIDDEN) &&
    (valueLabel || placeholder || typeof placeholder === 'string');
  return (
    <Box
      rcx-select
      disabled={disabled}
      ref={containerRef}
      onClick={useMutableCallback(() =>
        visible === AnimatedVisibility.VISIBLE
          ? hide()
          : ref.current.focus() & show()
      )}
      className={useMemo(
        () => [error && 'invalid', disabled && 'disabled'],
        [error, disabled]
      )}
      {...props}
    >
      <Wrapper
        display='flex'
        mi='neg-x4'
        rcx-select__wrapper--hidden={!!visibleText}
      >
        {visibleText && (
          <Box
            flexGrow={1}
            is='span'
            mi='x4'
            rcx-select__item
            fontScale='p2'
            color={valueLabel ? 'default' : 'hint'}
          >
            {visibleText}
          </Box>
        )}
        <Anchor
          disabled={disabled}
          rcx-input-box--undecorated
          filter={filter}
          ref={ref}
          aria-haspopup='listbox'
          onClick={show}
          onBlur={hide}
        />
        <Addon
          mi='x4'
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
      </Wrapper>
      <PositionAnimated visible={visible} anchor={containerRef}>
        <_Options
          {...(withTitle && { title: withTitle })}
          width={borderBoxSize.inlineSize}
          role='listbox'
          filter={filter}
          options={options}
          onSelect={internalChangedByClick}
          endReached={endReached}
          onMouseDown={prevent}
        />
      </PositionAnimated>
    </Box>
  );
};

export const PaginatedSelectFiltered = ({
  filter,
  setFilter,
  options,
  placeholder,
  ...props
}) => {
  const anchor = useCallback(
    React.forwardRef(({ children, filter, ...props }, ref) => (
      <InputBox.Input
        mi='x4'
        flexGrow={1}
        className='rcx-select__focus'
        ref={ref}
        placeholder={placeholder}
        value={filter}
        onChange={useMutableCallback((e) => setFilter(e.currentTarget.value))}
        {...props}
        rcx-input-box--undecorated
      />
    )),
    []
  );
  return (
    <PaginatedSelect
      placeholder={null}
      filter={filter}
      options={options}
      {...props}
      anchor={anchor}
    />
  );
};
