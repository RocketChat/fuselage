import {
  useMergedRefs,
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
import { Options, useCursor } from '../Options';

export const Addon = forwardRef((props, ref) => (
  <Box is='div' rcx-select__addon ref={ref} {...props} />
));

const Wrapper = forwardRef((props, ref) => (
  <Box is='div' rcx-select__wrapper ref={ref} {...props} />
));

export const Focus = forwardRef((props, ref) => (
  <Box
    ref={ref}
    fontScale='p4'
    color='hint'
    rcx-select__focus
    is='button'
    type='button'
    {...props}
  />
));

const useDidUpdate = (func, deps = []) => {
  const didMount = useRef(false);
  const fn = useMutableCallback(func);

  useEffect(() => {
    if (didMount.current) {
      fn();
    }
    didMount.current = true;
  }, deps);
};

export const Select = forwardRef(
  (
    {
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
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(value);

    const currentValue = value !== undefined ? value : internalValue;

    const internalChangedByKeyboard = useMutableCallback(([value]) => {
      setInternalValue(value);
      onChange(value);
    });

    const option = options.find((option) => getValue(option) === currentValue);

    const index = options.indexOf(option);

    const filteredOptions = useMemo(() => {
      const mapOptions = ([value, label]) => {
        if (currentValue === value) {
          return [value, label, true];
        }
        return [value, label];
      };

      const applyFilter = ([, option]) =>
        !filter || ~option.toLowerCase().indexOf(filter.toLowerCase());
      return options.filter(applyFilter).map(mapOptions);
    }, [options, currentValue, filter]);

    const [cursor, handleKeyDown, handleKeyUp, reset, [visible, hide, show]] =
      useCursor(index, filteredOptions, internalChangedByKeyboard);

    const internalChangedByClick = useMutableCallback(([value]) => {
      setInternalValue(value);
      onChange(value);
      hide();
    });

    const innerRef = useRef();
    const anchorRef = useMergedRefs(ref, innerRef);

    const { ref: containerRef, borderBoxSize } = useResizeObserver();

    useDidUpdate(reset, [filter, internalValue]);

    const valueLabel = getLabel(option);

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
            : innerRef.current.focus() & show()
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
              fontScale='p3'
              color={valueLabel ? 'default' : 'hint'}
            >
              {visibleText}
            </Box>
          )}
          <Anchor
            disabled={disabled}
            rcx-input-box--undecorated
            filter={filter}
            ref={anchorRef}
            aria-haspopup='listbox'
            onClick={show}
            onBlur={hide}
            onKeyUp={handleKeyUp}
            onKeyDown={handleKeyDown}
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
            width={borderBoxSize.inlineSize}
            role='listbox'
            filter={filter}
            options={filteredOptions}
            onSelect={internalChangedByClick}
            cursor={cursor}
          />
        </PositionAnimated>
      </Box>
    );
  }
);

export const SelectFiltered = ({ options, placeholder, ...props }) => {
  const [filter, setFilter] = useState('');
  const anchor = useCallback(
    forwardRef(({ children, filter, ...props }, ref) => (
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
    <Select
      placeholder={null}
      filter={filter}
      options={options}
      {...props}
      anchor={anchor}
    />
  );
};
