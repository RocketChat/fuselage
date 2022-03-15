import {
  useBorderBoxSize,
  useMergedRefs,
  useMutableCallback,
} from '@rocket.chat/fuselage-hooks';
import type { Keys } from '@rocket.chat/icons';
import type {
  ComponentProps,
  SyntheticEvent,
  ElementType,
  Ref,
  ReactNode,
} from 'react';
import React, { useMemo, useState, useRef, useEffect, forwardRef } from 'react';

import { renderComponentOrFunction } from '../../helpers/renderComponentOrFunction';
import type { OptionType } from '../../types/OptionType';
import type { SelectOption } from '../../types/SelectOption';
import AnimatedVisibility from '../AnimatedVisibility';
import { Box } from '../Box';
import { Icon } from '../Icon';
import Margins from '../Margins';
import { CheckOption, useCursor } from '../Options';
import MultiSelectAddon from './MultiSelectAddon';
import MultiSelectAnchor from './MultiSelectAnchor';
import type { MultiSelectAnchorParams } from './MultiSelectAnchorParams';
import MultiSelectContainer from './MultiSelectContainer';
import MultiSelectDropdown from './MultiSelectDropdown';
import { SelectedOptions } from './SelectedOptions';

const defaultRenderAnchor = (params: MultiSelectAnchorParams) => (
  <MultiSelectAnchor {...params} />
);

const prevent = (e: SyntheticEvent) => {
  e.preventDefault();
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
};

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
  renderItem?: ElementType;
  renderSelected?: ElementType;
  addonIcon?: Keys;
};

export const MultiSelect = forwardRef(function MultiSelect(
  {
    value,
    options = [],
    error,
    disabled = false,
    anchor: renderAnchor = defaultRenderAnchor,
    onChange = () => {},
    getLabel = ([, label] = ['', '']) => label,
    getValue = ([value]) => value,
    placeholder,
    renderItem = CheckOption,
    customEmpty,
    renderSelected: RenderSelected,
    addonIcon,
    ...props
  }: MultiSelectProps,
  ref: Ref<HTMLInputElement>
) {
  const [internalValue, setInternalValue] = useState<SelectOption[0][]>(
    value || []
  );
  const [currentOptionValue, setCurrentOption] = useState<SelectOption[0]>();

  const option = options.find(
    (option) => getValue(option) === currentOptionValue
  );

  const index = options.findIndex(
    (option) => getValue(option) === currentOptionValue
  );

  const internalChanged = useMutableCallback(([value]) => {
    if (internalValue.includes(value)) {
      setCurrentOption(undefined);
      const newValue = internalValue.filter((item) => item !== value);
      setInternalValue(newValue);
      return onChange(newValue);
    }
    setCurrentOption(value);
    const newValue = [...internalValue, value];
    setInternalValue(newValue);
    return onChange(newValue);
  });

  const mappedOptions = useMemo(
    () =>
      options.map(([value, label]: SelectOption): OptionType => {
        if (internalValue.includes(value)) {
          return [value, label, true];
        }
        return [value, label];
      }),
    [options, internalValue]
  );

  const [cursor, handleKeyDown, handleKeyUp, reset, [visibility, hide, show]] =
    useCursor(index, mappedOptions, internalChanged);

  const prevOptions = useRef<OptionType[]>();

  useEffect(
    () => () => {
      if (prevOptions.current === mappedOptions) {
        return;
      }

      reset();
      prevOptions.current = mappedOptions;
    },
    [mappedOptions, reset]
  );

  const innerRef = useRef<HTMLElement>(null);
  const anchorRef = useMergedRefs(ref, innerRef);

  const containerRef = useRef<HTMLElement>(null);
  const { inlineSize } = useBorderBoxSize(containerRef);

  const handleClick = useMutableCallback(() => {
    if (visibility === AnimatedVisibility.VISIBLE) {
      hide();
      return;
    }

    innerRef.current?.focus();
    show();
  });

  return (
    <MultiSelectContainer
      ref={containerRef}
      disabled={disabled}
      invalid={Boolean(error)}
      onClick={handleClick}
      {...props}
    >
      <Box display='flex' flexGrow={1} marginInline={4}>
        <Box display='flex' alignItems='center' flexWrap='wrap' margin={-8}>
          <Margins all={4}>
            {internalValue.map((value: SelectOption[0]) => {
              const currentOption = options.find(
                ([val]) => val === value
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
                  }}
                  children={getLabel(currentOption)}
                />
              );
            })}
            {renderComponentOrFunction(renderAnchor, {
              ref: anchorRef,
              children: !value ? option || placeholder : null,
              disabled: disabled ?? false,
              onClick: show,
              onBlur: hide,
              onKeyDown: handleKeyDown,
              onKeyUp: handleKeyUp,
            })}
          </Margins>
        </Box>
      </Box>
      <MultiSelectAddon>
        {visibility === AnimatedVisibility.VISIBLE ? (
          <Icon name='cross' size={20} />
        ) : (
          <Icon name={addonIcon ?? 'chevron-down'} size={20} />
        )}
      </MultiSelectAddon>
      <MultiSelectDropdown
        anchorRef={containerRef}
        cursor={cursor}
        inlineSize={inlineSize}
        onSelect={internalChanged}
        options={mappedOptions}
        renderItem={renderItem}
        customEmpty={customEmpty}
        visibility={visibility}
      />
    </MultiSelectContainer>
  );
});
