import { useEffectEvent, useResizeObserver } from '@rocket.chat/fuselage-hooks';
import { type ElementType, useState, useRef, useMemo } from 'react';

import { type SelectProps } from '..';
import { prevent } from '../../helpers/prevent';
import AnimatedVisibility from '../AnimatedVisibility';
import Box from '../Box';
import { Icon } from '../Icon';
import Margins from '../Margins';
import Option from '../Option';
import { useVisible } from '../Options/useVisible';
import { OptionsPaginated } from '../OptionsPaginated';
import PositionAnimated from '../PositionAnimated';
import SelectAddon from '../Select/SelectAddon';
import SelectFocus from '../Select/SelectFocus';
import PaginatedSelectWrapper from './PaginatedSelectWrapper';

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
  placeholder = '',
  renderOptions: _Options = OptionsPaginated,
  renderItem = Option,
  endReached,
  ...props
}: PaginatedSelectProps) => {
  const [internalValue, setInternalValue] = useState(value);

  const currentValue = value !== undefined ? value : internalValue;

  const option = options.find((option) => option?.value === currentValue);

  const [visible, hide, show] = useVisible();

  const internalChangedByClick = useEffectEvent(([value]) => {
    setInternalValue(value);
    onChange(value);
    hide();
  });

  const ref = useRef<HTMLInputElement>(null);

  const { ref: containerRef, borderBoxSize } = useResizeObserver();

  const valueLabel = option?.label;

  const visibleText =
    (filter === undefined || visible === AnimatedVisibility.HIDDEN) &&
    (valueLabel || placeholder || typeof placeholder === 'string');

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
        [error, disabled]
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
