// @ts-nocheck
import {
  useMutableCallback,
  useResizeObserver,
} from '@rocket.chat/fuselage-hooks';
import type { SyntheticEvent, ComponentProps, Ref, ElementType } from 'react';
import React, { useState, useRef, forwardRef, useMemo, useEffect } from 'react';

import type { SelectProps } from '..';
import AnimatedVisibility from '../AnimatedVisibility';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { useVisible } from '../Options/useVisible';
import { OptionsPaginated } from '../OptionsPaginated';
import PositionAnimated from '../PositionAnimated';

type PaginatedOptionType = {
  value: string | number;
  label: string;
};
export type PaginatedSelectProps = Omit<SelectProps, 'options'> & {
  anchor?: ElementType;
  options: PaginatedOptionType[];
  withTitle?: boolean;
  endReached: (index: number) => void;
  setFilter: (value: string | undefined | number) => void;
};

type AddonProps = ComponentProps<typeof Box>;

const Addon = forwardRef((props: AddonProps, ref: Ref<HTMLDivElement>) => (
  <Box is='div' rcx-select__addon ref={ref} {...props} />
));

type WrapperProps = ComponentProps<typeof Box>;

const Wrapper = forwardRef((props: WrapperProps, ref: Ref<HTMLDivElement>) => (
  <Box is='div' rcx-select__wrapper ref={ref} {...props} />
));

type FocusProps = ComponentProps<typeof Box>;

const Focus = forwardRef((props: FocusProps, ref: Ref<HTMLButtonElement>) => (
  <Box
    ref={ref}
    fontScale='p2m'
    color='hint'
    rcx-select__focus
    is='button'
    type='button'
    {...props}
  />
));

const prevent = (e: SyntheticEvent) => {
  e.preventDefault();
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
};

const useDidUpdate = (func: string[]) => {
  const didMount = useRef(false);
  const fn = useMutableCallback(func as any);

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
  setFilter: _setFilter,
  error,
  disabled,
  options = [],
  anchor: Anchor = Focus,
  onChange = () => {},
  placeholder = '',
  renderOptions: _Options = OptionsPaginated,
  endReached,
  ...props
}: PaginatedSelectProps) => {
  const [internalValue, setInternalValue] = useState(value);

  const currentValue = value !== undefined ? value : internalValue;

  const option = options.find((option) => option?.value === currentValue);

  const [visible, hide, show] = useVisible();

  const internalChangedByClick = useMutableCallback(([value]) => {
    setInternalValue(value);
    onChange(value);
    hide();
  });

  const ref = useRef<HTMLInputElement>(null);

  const { ref: containerRef, borderBoxSize } = useResizeObserver();

  useDidUpdate([filter, internalValue]);

  const valueLabel = option?.label;

  const visibleText =
    (filter === undefined || visible === AnimatedVisibility.HIDDEN) &&
    (valueLabel || placeholder || typeof placeholder === 'string');

  const handleClick = useMutableCallback(() => {
    if (visible === AnimatedVisibility.VISIBLE) {
      return hide();
    }
    if (ref && ref.current) {
      ref.current.focus();
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
            fontScale='p2m'
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
