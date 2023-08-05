import {
  useMutableCallback,
  useResizeObserver,
} from '@rocket.chat/fuselage-hooks';
import type {
  SyntheticEvent,
  ComponentProps,
  Ref,
  ReactElement,
  FormEvent,
} from 'react';
import React, { useState, useRef, useCallback, forwardRef, memo } from 'react';

import { prevent } from '../../helpers/prevent';
import AnimatedVisibility from '../AnimatedVisibility';
import Box from '../Box';
import Chip from '../Chip';
import Flex from '../Flex';
import { Icon } from '../Icon';
import { InputBox } from '../InputBox';
import Margins from '../Margins';
import { useVisible } from '../Options/useVisible';
import { OptionsPaginated } from '../OptionsPaginated';
import Position from '../Position';
import SelectAddon from '../Select/SelectAddon';
import SelectFocus from '../Select/SelectFocus';

const SelectedOptions = memo<ComponentProps<typeof Chip>>((props) => (
  <Chip maxWidth='x150' withTruncatedText {...props} />
));

export type PaginatedMultiSelectOption = {
  value: string | number;
  label: string;
};

type PaginatedMultiSelectProps = Omit<
  ComponentProps<typeof Box>,
  'onChange' | 'value'
> & {
  error?: boolean;
  options: PaginatedMultiSelectOption[];
  withTitle?: boolean;
  placeholder?: string;
  endReached?: (start?: number, end?: number) => void;
  value?: PaginatedMultiSelectOption[];
  onChange: (values: PaginatedMultiSelectOption[]) => void;
  renderOptions?: (
    props: ComponentProps<typeof OptionsPaginated>
  ) => ReactElement | null;
  anchor?: any;
};

export const PaginatedMultiSelect = ({
  withTitle,
  value,
  filter,
  options = [],
  error,
  disabled,
  anchor: Anchor = SelectFocus,
  onChange = () => {},
  placeholder,
  renderOptions: _Options = OptionsPaginated,
  endReached,
  ...props
}: PaginatedMultiSelectProps) => {
  const [internalValue, setInternalValue] = useState(value || []);

  const currentValue = value !== undefined ? value : internalValue;

  const selectedOptions = options.filter((option) =>
    currentValue.some((opt) => opt.value === option.value)
  );

  const internalChanged = (option: PaginatedMultiSelectOption) => {
    if (currentValue.some((opt) => opt.value === option.value)) {
      const newValue = currentValue.filter((opt) => opt.value !== option.value);

      setInternalValue(newValue);
      return onChange(newValue);
    }

    const newValue = [...currentValue, option];
    setInternalValue(newValue);
    return onChange(newValue);
  };

  const [visible, hide, show] = useVisible();

  const ref = useRef<HTMLInputElement>(null);
  const { ref: containerRef, borderBoxSize } = useResizeObserver();

  const handleClick = useMutableCallback(() => {
    if (visible === AnimatedVisibility.VISIBLE) {
      return hide();
    }
    if (ref && ref.current) {
      ref.current.focus();
      return show();
    }
  });

  const handleMouseDown = useMutableCallback(
    (option: PaginatedMultiSelectOption) => (e: SyntheticEvent) => {
      prevent(e);
      internalChanged(option);
      return false;
    }
  );

  return (
    <Box
      is='div'
      rcx-select
      className={[error && 'invalid', disabled && 'disabled']}
      ref={containerRef}
      onClick={handleClick}
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
                    children={placeholder ?? null}
                  />

                  {selectedOptions.map((option, index: number) => (
                    <SelectedOptions
                      {...(withTitle && {
                        title: option.label,
                      })}
                      tabIndex={-1}
                      role='option'
                      key={index}
                      onMouseDown={handleMouseDown(option)}
                      children={option.label}
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
          <SelectAddon
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
            withTitle={withTitle}
            width={borderBoxSize.inlineSize}
            onMouseDown={prevent}
            multiple
            filter={filter}
            role='listbox'
            options={options}
            cursor={-1}
            endReached={endReached}
            onSelect={([value, label]) =>
              internalChanged({ value: value as string, label })
            }
          />
        </Position>
      </AnimatedVisibility>
    </Box>
  );
};

type PaginatedMultiSelectFilteredProps = Omit<
  PaginatedMultiSelectProps,
  'filter'
> & {
  filter?: string;
  setFilter?: (value: string) => void;
};

export const PaginatedMultiSelectFiltered = ({
  filter,
  setFilter,
  options,
  placeholder,
  ...props
}: PaginatedMultiSelectFilteredProps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const anchor = useCallback(
    forwardRef(
      (
        {
          children: _children,
          filter,
          ...props
        }: ComponentProps<typeof InputBox>,
        ref: Ref<HTMLInputElement>
      ) => (
        <Flex.Item grow={1}>
          <InputBox.Input
            ref={ref}
            placeholder={placeholder}
            value={filter}
            onInput={(e: FormEvent<HTMLInputElement>) =>
              setFilter?.(e.currentTarget.value)
            }
            {...props}
            rcx-input-box--undecorated
          />
        </Flex.Item>
      )
    ),
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
