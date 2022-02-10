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
  DependencyList,
  Ref,
  ElementType,
} from 'react';

import { PositionAnimated, Box, AnimatedVisibility } from '../Box';
import { Icon } from '../Icon';
import { Options, useCursor, OptionType } from '../Options';

export type SelectOptions = readonly [value: string, label: string][];

type AddonProps = ComponentProps<typeof Box>;

export const Addon = forwardRef(
  (props: AddonProps, ref: Ref<HTMLDivElement>) => (
    <Box is='div' rcx-select__addon ref={ref} {...props} />
  )
);

type WrapperProps = ComponentProps<typeof Box>;

const Wrapper = forwardRef((props: WrapperProps, ref: Ref<HTMLDivElement>) => (
  <Box is='div' rcx-select__wrapper ref={ref} {...props} />
));

type FocusProps = ComponentProps<typeof Box>;

export const Focus = forwardRef(
  (props: FocusProps, ref: Ref<HTMLButtonElement>) => (
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

const useDidUpdate = (func: () => void, deps: DependencyList | undefined) => {
  const didMount = useRef(false);
  const fn = useMutableCallback(func);

  useEffect(() => {
    if (didMount.current) {
      fn();
    }
    didMount.current = true;
  }, deps || []);
};

export type SelectProps = Omit<ComponentProps<typeof Box>, 'onChange'> & {
  anchor?: ElementType;
  error?: string;
  options: SelectOptions;
  onChange: (value: SelectOptions[number][0]) => void;
  getLabel?: (params: SelectOptions[number]) => SelectOptions[number][1];
  getValue?: (params: SelectOptions[number]) => SelectOptions[number][0];
  filter?: string;
  renderOptions?: ElementType;
  customEmpty?: string;
  addonIcon?: ComponentProps<typeof Icon>['name'];
};

export const Select = forwardRef(
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
      addonIcon,
      customEmpty,
      ...props
    }: SelectProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [internalValue, setInternalValue] = useState(value);

    const internalChangedByKeyboard = useMutableCallback(([value]) => {
      setInternalValue(value);
      onChange(value);
    });

    const option = options.find(
      (option) => getValue(option) === internalValue
    ) as SelectOptions[number];

    const index = options.indexOf(option);

    const filteredOptions = useMemo<OptionType[]>((): OptionType[] => {
      const mapOptions = ([
        value,
        label,
      ]: SelectOptions[number]): OptionType => {
        if (internalValue === value) {
          return [value, label, true];
        }
        return [value, label];
      };

      const applyFilter = ([, option]: SelectOptions[number]) =>
        !filter || ~option.toLowerCase().indexOf(filter.toLowerCase());

      return options.filter(applyFilter).map(mapOptions);
    }, [options, internalValue, filter]);

    const [cursor, handleKeyDown, handleKeyUp, reset, [visible, hide, show]] =
      useCursor(index, filteredOptions, internalChangedByKeyboard);

    const internalChangedByClick = useMutableCallback(([value]) => {
      setInternalValue(value);
      onChange(value);
      hide();
    });

    const innerRef = useRef<HTMLInputElement | null>(null);
    const addonRef = useRef<HTMLElement | null>(null);
    const anchorRef = useMergedRefs(ref, innerRef);

    const { ref: containerRef, borderBoxSize } = useResizeObserver();

    useDidUpdate(reset, [filter, internalValue]);

    const valueLabel = getLabel(option);

    const visibleText =
      (filter === undefined || visible === AnimatedVisibility.HIDDEN) &&
      (valueLabel || placeholder || typeof placeholder === 'string');

    const handleClick = useMutableCallback((e) => {
      const addonClicked = addonRef.current === e.target;
      if (visible === AnimatedVisibility.VISIBLE) {
        return hide();
      }

      if (!addonClicked) {
        innerRef.current?.focus();
      }

      return show();
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
                ref={addonRef}
                name={
                  visible === AnimatedVisibility.VISIBLE
                    ? 'cross'
                    : addonIcon || 'chevron-down'
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
            customEmpty={customEmpty}
          />
        </PositionAnimated>
      </Box>
    );
  }
);
