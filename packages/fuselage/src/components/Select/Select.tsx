import {
  useMergedRefs,
  useMutableCallback,
  useResizeObserver,
} from '@rocket.chat/fuselage-hooks';
import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useMemo,
  ComponentProps,
} from 'react';

import { PositionAnimated, Box, AnimatedVisibility } from '../Box';
import { Icon } from '../Icon';
import { Options, useCursor, OptionType } from '../Options';

export type SelectOptions = readonly [OptionType[0], string][];

export type SelectProps = Omit<ComponentProps<typeof Box>, 'onChange'> & {
  error?: string;
  options: SelectOptions;
  onChange: (value: SelectOptions[number][0]) => void;
  getLabel?: (params: SelectOptions[number]) => SelectOptions[number][1];
  getValue?: (params: SelectOptions[number]) => SelectOptions[number][0];
  filter?: string;
};

export const Addon = forwardRef<HTMLDivElement, ComponentProps<typeof Box>>(
  (props, ref) => <Box is='div' rcx-select__addon ref={ref} {...props} />
);

const Wrapper = forwardRef<HTMLDivElement, ComponentProps<typeof Box>>(
  (props, ref) => <Box is='div' rcx-select__wrapper ref={ref} {...props} />
);

export const Focus = forwardRef<HTMLDivElement, ComponentProps<typeof Box>>(
  (props, ref) => (
    <Box
      ref={ref}
      fontScale='p2m'
      color='hint'
      rcx-select__focus
      is='button'
      type='button'
      {...props}
    />
  )
);

const useDidUpdate = (
  func: () => void,
  deps: React.DependencyList | undefined
) => {
  const didMount = useRef(false);
  const fn = useMutableCallback(func);

  useEffect(() => {
    if (didMount.current) {
      fn();
    }
    didMount.current = true;
  }, deps || []);
};

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  (
    {
      value,
      filter,
      error,
      disabled,
      options,
      anchor: Anchor = Focus,
      onChange = () => {},
      getValue = ([value] = ['', '']) => value,
      getLabel = ([_, label] = ['', '']) => label,
      placeholder = '',
      renderOptions: _Options = Options,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState<
      string | string[] | number | undefined
    >(value);

    const currentValue = value !== undefined ? value : internalValue;

    const internalChangedByKeyboard = useMutableCallback(([value]) => {
      setInternalValue(value);
      onChange(value);
    });

    const option = options.find(
      (option) => getValue(option) === currentValue
    ) as SelectOptions[number];

    const index = options.indexOf(option);

    const filteredOptions = useMemo<OptionType[]>((): OptionType[] => {
      const mapOptions = ([
        value,
        label,
      ]: SelectOptions[number]): OptionType => {
        if (currentValue === value) {
          return [value, label, true];
        }
        return [value, label];
      };

      const applyFilter = ([, option]: SelectOptions[number]) =>
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

    const innerRef = useRef<HTMLInputElement | null>(null);
    const anchorRef = useMergedRefs(ref, innerRef);

    const { ref: containerRef, borderBoxSize } = useResizeObserver();

    useDidUpdate(reset, [filter, internalValue]);

    const valueLabel = getLabel(option);

    const visibleText =
      (filter === undefined || visible === AnimatedVisibility.HIDDEN) &&
      (valueLabel || placeholder || typeof placeholder === 'string');

    const handleClick = useMutableCallback(() => {
      if (visible === AnimatedVisibility.VISIBLE) {
        return hide();
      }
      if (innerRef && innerRef.current) {
        innerRef.current.focus();
        return show();
      }
    });

    return (
      <Box
        rcx-select
        disabled={disabled}
        ref={containerRef}
        onClick={handleClick}
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
