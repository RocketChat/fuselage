import { useEffectEvent, useResizeObserver } from '@rocket.chat/fuselage-hooks';
import { type ElementType, useState, useRef, useMemo } from 'react';

import { prevent } from '../../helpers/prevent.js';
import AnimatedVisibility from '../AnimatedVisibility/index.js';
import Box from '../Box/index.js';
import { Icon } from '../Icon/index.js';
import Margins from '../Margins/index.js';
import { Option } from '../Option/index.js';
import { useVisible } from '../Options/useVisible.js';
import { OptionsPaginated } from '../OptionsPaginated/index.js';
import PositionAnimated from '../PositionAnimated/index.js';
import SelectAddon from '../Select/SelectAddon.js';
import SelectFocus from '../Select/SelectFocus.js';
import type { OptionType, SelectOption, SelectProps } from '../index.js';

import PaginatedSelectWrapper from './PaginatedSelectWrapper.js';

type PaginatedOptionType = {
  value: string | number;
  label: string;
};
export type PaginatedSelectProps = Omit<SelectProps, 'options'> & {
  anchor?: ElementType;
  options: PaginatedOptionType[];
  withTitle?: boolean;
  endReached?: (index: number) => void;
  setFilter?: (value: string | undefined | number) => void;
};

export const PaginatedSelect = ({
  value,
  withTitle,
  filter,
  setFilter: _setFilter,
  error,
  disabled,
  options = [],
  anchor: Anchor = SelectFocus,
  onChange = () => {},
  placeholder,
  renderOptions: _Options = OptionsPaginated,
  renderItem = Option,
  endReached,
  ...props
}: PaginatedSelectProps) => {
  const [internalValue, setInternalValue] = useState(value);

  const currentValue = value !== undefined ? value : internalValue;

  const option = options.find((option) => option?.value === currentValue);

  const [visible, hide, show] = useVisible();

  const internalChangedByClick = useEffectEvent(([value]: OptionType) => {
    setInternalValue(value);
    onChange(value as SelectOption[0]); // FIXME
    hide();
  });

  const ref = useRef<HTMLInputElement>(null);

  const { ref: containerRef, borderBoxSize } = useResizeObserver();

  const valueLabel = option?.label;

  const isUnfilteredOrHidden =
    filter === undefined || visible === AnimatedVisibility.HIDDEN;

  const visibleText = isUnfilteredOrHidden
    ? valueLabel || placeholder
    : undefined;

  const handleClick = useEffectEvent(() => {
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
        [error, disabled],
      )}
      {...props}
    >
      <PaginatedSelectWrapper
        display='flex'
        mi='neg-x4'
        rcx-select__wrapper--hidden={!!visibleText}
      >
        {visibleText && (
          <Box
            flexGrow={1}
            is='span'
            mi={4}
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
        <Margins inline='x4'>
          <SelectAddon>
            <Icon
              name={
                visible === AnimatedVisibility.VISIBLE
                  ? 'chevron-up'
                  : 'chevron-down'
              }
              size='x20'
            />
          </SelectAddon>
        </Margins>
      </PaginatedSelectWrapper>
      <PositionAnimated visible={visible} anchor={containerRef}>
        <_Options
          withTitle={withTitle}
          width={borderBoxSize.inlineSize}
          role='listbox'
          filter={filter}
          options={options}
          onSelect={internalChangedByClick}
          endReached={endReached}
          onMouseDown={prevent}
          renderItem={renderItem}
        />
      </PositionAnimated>
    </Box>
  );
};
