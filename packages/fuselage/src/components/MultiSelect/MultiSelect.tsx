import {
  useMergedRefs,
  useEffectEvent,
  useResizeObserver,
  useOutsideClick,
} from '@rocket.chat/fuselage-hooks';
import type {
  ComponentProps,
  SyntheticEvent,
  ElementType,
  Ref,
  ReactNode,
} from 'react';
import { useState, useRef, useEffect, forwardRef } from 'react';

import { isForwardRefType } from '../../helpers/isForwardRefType.js';
import { prevent } from '../../helpers/prevent.js';
import AnimatedVisibility from '../AnimatedVisibility/index.js';
import Box from '../Box/index.js';
import Flex from '../Flex/index.js';
import { Icon } from '../Icon/index.js';
import Margins from '../Margins/index.js';
import { CheckOption } from '../Option/index.js';
import { Options, useCursor } from '../Options/index.js';
import Position from '../Position/index.js';
import SelectAddon from '../Select/SelectAddon.js';
import type { SelectOption } from '../index.js';

import MultiSelectAnchor from './MultiSelectAnchor.js';
import type { MultiSelectAnchorParams } from './MultiSelectAnchorParams.js';
import { SelectedOptions } from './SelectedOptions.js';

type MultiSelectProps = Omit<
  ComponentProps<typeof Box>,
  'onChange' | 'value'
> & {
  value?: SelectOption[0][];
  error?: string;
  options: SelectOption[];
  onChange: (params: SelectOption[0][]) => void;
  getLabel?: (params: SelectOption) => SelectOption[1];
  getValue?: (params: SelectOption) => SelectOption[0];
  customEmpty?: string;
  anchor?:
    | ElementType<MultiSelectAnchorParams>
    | ((params: MultiSelectAnchorParams) => ReactNode);
  renderOptions?: ElementType;
  renderItem?: ElementType;
  renderSelected?: ElementType;
  addonIcon?: ComponentProps<typeof Icon>['name'];
  setFilter?: (filter: string) => void;
};

/**
 * An input for selection of options.
 */
export const MultiSelect = forwardRef(
  (
    {
      value,
      filter,
      setFilter,
      options = [],
      error,
      disabled,
      anchor: Anchor = MultiSelectAnchor,
      onChange = () => {},
      getLabel = ([, label] = ['', '']) => label,
      getValue = ([value]) => value,
      placeholder,
      renderOptions: _Options = Options,
      renderItem,
      customEmpty,
      renderSelected: RenderSelected,
      addonIcon,
      ...props
    }: MultiSelectProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const [internalValue, setInternalValue] = useState<SelectOption[0][]>(
      value || [],
    );

    useEffect((): void => setInternalValue(value || []), [value]);

    const [currentOptionValue, setCurrentOption] = useState<SelectOption[0]>();

    const index = options.findIndex(
      (option) => getValue(option) === currentOptionValue,
    );

    const removeFocusClass = () =>
      innerRef.current?.classList.remove('focus-visible');

    const internalChanged = ([value]: SelectOption) => {
      if (internalValue.includes(value)) {
        setCurrentOption(undefined);
        const newValue = internalValue.filter((item) => item !== value);
        setInternalValue(newValue);
        return onChange(newValue);
      }
      setFilter?.('');
      setCurrentOption(value);
      const newValue = [...internalValue, value];
      setInternalValue(newValue);
      return onChange(newValue);
    };

    const mapOptions = ([value, label]: SelectOption): SelectOption => {
      if (internalValue.includes(value)) {
        return [value, label, true];
      }
      return [value, label];
    };

    const applyFilter = ([, option]: SelectOption) =>
      !filter || option.toLowerCase().includes(filter.toLowerCase());

    const filteredOptions: SelectOption[] = options
      .filter(applyFilter)
      .map(mapOptions);

    const [cursor, handleKeyDown, handleKeyUp, reset, [visible, hide, show]] =
      useCursor(index, filteredOptions, internalChanged);

    useEffect(reset, [filter]);

    const innerRef = useRef<HTMLElement>(null);
    const anchorRef = useMergedRefs(ref, innerRef);

    const { ref: containerRef, borderBoxSize } = useResizeObserver();
    useOutsideClick([containerRef], removeFocusClass);

    const renderAnchor = (params: MultiSelectAnchorParams) => {
      if (isForwardRefType(Anchor)) {
        return <Anchor {...params} />;
      }

      if (typeof Anchor === 'function') {
        return (Anchor as (params: MultiSelectAnchorParams) => ReactNode)(
          params,
        );
      }

      return null;
    };

    const handleClick = useEffectEvent(() => {
      if (visible === AnimatedVisibility.VISIBLE) {
        return hide();
      }
      innerRef.current?.focus();
      return show();
    });

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
                    {renderAnchor({
                      ref: anchorRef,
                      children: internalValue.length === 0 ? placeholder : null,
                      disabled: disabled ?? false,
                      onClick: show,
                      onBlur: hide,
                      onKeyDown: handleKeyDown,
                      onKeyUp: handleKeyUp,
                    })}
                    {internalValue.map((value: SelectOption[0]) => {
                      const currentOption = options.find(
                        ([val]) => val === value,
                      ) as SelectOption;
                      return RenderSelected ? (
                        <RenderSelected
                          role='option'
                          value={value}
                          key={value}
                          label={getLabel(currentOption)}
                          onMouseDown={(e: SyntheticEvent) => {
                            prevent(e);
                            internalChanged(currentOption);
                            removeFocusClass();
                          }}
                          children={getLabel(currentOption)}
                        />
                      ) : (
                        <SelectedOptions
                          tabIndex={-1}
                          role='option'
                          key={String(value)}
                          onMouseDown={(e: SyntheticEvent) => {
                            prevent(e);
                            internalChanged(currentOption);
                            removeFocusClass();
                          }}
                          children={getLabel(currentOption)}
                        />
                      );
                    })}
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
                      ? 'chevron-up'
                      : addonIcon || 'chevron-down'
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
              width={borderBoxSize.inlineSize}
              onMouseDown={prevent}
              multiple
              filter={filter}
              renderItem={renderItem || CheckOption}
              role='listbox'
              options={filteredOptions}
              onSelect={internalChanged}
              cursor={cursor}
              customEmpty={customEmpty}
            />
          </Position>
        </AnimatedVisibility>
      </Box>
    );
  },
);
