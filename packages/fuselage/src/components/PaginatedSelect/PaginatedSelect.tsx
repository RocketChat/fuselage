// @ts-nocheck
import {
  useMutableCallback,
  useResizeObserver,
} from '@rocket.chat/fuselage-hooks';
import type { Keys } from '@rocket.chat/icons';
import type { SyntheticEvent, ElementType, ComponentProps } from 'react';
import React, { useState, useRef, useMemo, useEffect } from 'react';

import AnimatedVisibility from '../AnimatedVisibility';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { useVisible } from '../Options/useVisible';
import { OptionsPaginated } from '../OptionsPaginated';
import PositionAnimated from '../PositionAnimated';
import PaginatedSelectAddon from './PaginatedSelectAddon';
import PaginatedSelectFocus from './PaginatedSelectFocus';
import PaginatedSelectWrapper from './PaginatedSelectWrapper';

type PaginatedOptionType = {
  value: string | number;
  label: string;
};
export type PaginatedSelectProps = Omit<
  ComponentProps<typeof Box>,
  'onChange'
> & {
  anchor?: ElementType;
  error?: string;
  options: PaginatedOptionType[];
  onChange: (value: PaginatedOptionType['value']) => void;
  getLabel?: (params: PaginatedOptionType) => PaginatedOptionType['label'];
  getValue?: (params: PaginatedOptionType) => PaginatedOptionType['value'];
  filter?: string;
  renderOptions?: ElementType;
  renderItem?: ElementType;
  renderSelected?: ElementType;
  customEmpty?: string;
  addonIcon?: Keys;
  isControlled?: boolean;
  anchor?: ElementType;
  options: PaginatedOptionType[];
  withTitle?: boolean;
  endReached: (index: number) => void;
  setFilter?: (value: string | undefined | number) => void;
};

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
  anchor: Anchor = PaginatedSelectFocus,
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
      rcx-paginated-select
      disabled={disabled}
      ref={containerRef}
      onClick={handleClick}
      className={useMemo(
        () => [error && 'invalid', disabled && 'disabled'],
        [error, disabled]
      )}
      {...props}
    >
      <PaginatedSelectWrapper
        display='flex'
        mi='neg-x4'
        rcx-paginated-select__wrapper--hidden={!!visibleText}
      >
        {visibleText && (
          <Box
            flexGrow={1}
            is='span'
            mi='x4'
            rcx-paginated-select__item
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
        <PaginatedSelectAddon mi='x4'>
          <Icon
            name={
              visible === AnimatedVisibility.VISIBLE ? 'cross' : 'chevron-down'
            }
            size='x20'
          />
        </PaginatedSelectAddon>
      </PaginatedSelectWrapper>
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
