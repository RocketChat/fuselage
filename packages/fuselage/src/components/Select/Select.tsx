import {
  useBorderBoxSize,
  useMergedRefs,
  useMutableCallback,
} from '@rocket.chat/fuselage-hooks';
import type { Keys } from '@rocket.chat/icons';
import type { ComponentProps, Ref, ElementType, ReactNode } from 'react';
import React, { useEffect, useState, useRef, forwardRef, useMemo } from 'react';

import { renderComponentOrFunction } from '../../helpers/renderComponentOrFunction';
import type { OptionType } from '../../types/OptionType';
import type { SelectOption } from '../../types/SelectOption';
import AnimatedVisibility from '../AnimatedVisibility';
import { Box } from '../Box';
import { Icon } from '../Icon';
import Margins from '../Margins';
import { Options, useCursor } from '../Options';
import PositionAnimated from '../PositionAnimated';
import SelectAddon from './SelectAddon';
import SelectAnchor from './SelectAnchor';
import type { SelectAnchorParams } from './SelectAnchorParams';
import SelectContainer from './SelectContainer';
import SelectWrapper from './SelectWrapper';

const defaultRenderAnchor = (params: SelectAnchorParams) => (
  <SelectAnchor {...params} />
);

type SelectProps = Omit<ComponentProps<typeof Box>, 'onChange'> & {
  anchor?:
    | ElementType<SelectAnchorParams>
    | ((params: SelectAnchorParams) => ReactNode);
  error?: string;
  options: SelectOption[];
  onChange: (value: SelectOption[0]) => void;
  getLabel?: (params: SelectOption) => SelectOption[1];
  getValue?: (params: SelectOption) => SelectOption[0];
  renderItem?: ElementType;
  renderSelected?: ElementType;
  customEmpty?: string;
  addonIcon?: Keys;
};

export const Select = forwardRef(function Select(
  {
    value,
    error,
    disabled,
    options = [],
    anchor: renderAnchor = defaultRenderAnchor,
    onChange = () => {},
    getValue = ([value] = ['', '']) => value,
    getLabel = ([_, label] = ['', '']) => label,
    placeholder = '',
    renderItem,
    renderSelected: RenderSelected,
    addonIcon,
    customEmpty,
    ...props
  }: SelectProps,
  ref: Ref<HTMLInputElement>
) {
  const [internalValue, setInternalValue] = useState(value || '');

  const internalChangedByKeyboard = useMutableCallback(([value]) => {
    setInternalValue(value);
    onChange(value);
  });

  const index = options.findIndex(
    (option) => getValue(option) === internalValue
  );

  const option = options[index];

  const mappedOptions = useMemo(
    (): OptionType[] =>
      options.map(([value, label]: SelectOption): OptionType => {
        if (internalValue === value) {
          return [value, label, true];
        }

        return [value, label];
      }),
    [options, internalValue]
  );

  const [cursor, handleKeyDown, handleKeyUp, reset, [visibility, hide, show]] =
    useCursor(index, mappedOptions, internalChangedByKeyboard);

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

  const internalChangedByClick = useMutableCallback(([value]) => {
    setInternalValue(value);
    onChange(value);
    hide();
  });

  const innerRef = useRef<HTMLInputElement | null>(null);
  const anchorRef = useMergedRefs(ref, innerRef);

  const containerRef = useRef<HTMLElement>(null);
  const { inlineSize } = useBorderBoxSize(containerRef);

  const valueLabel = getLabel(option);
  const valueValue = getValue(option);

  const visibleText =
    visibility === AnimatedVisibility.HIDDEN &&
    (valueLabel || placeholder || typeof placeholder === 'string');

  const handleClick = useMutableCallback(() => {
    if (visibility === AnimatedVisibility.VISIBLE) {
      return hide();
    }

    innerRef.current?.focus();
    return show();
  });

  return (
    <SelectContainer
      ref={containerRef}
      disabled={Boolean(disabled)}
      invalid={Boolean(error)}
      onClick={handleClick}
      {...props}
    >
      <SelectWrapper hidden={Boolean(visibleText)}>
        {visibleText &&
          (RenderSelected ? (
            <RenderSelected
              role='option'
              value={valueValue}
              label={valueLabel}
              key={valueValue}
              onClick={internalChangedByClick}
            />
          ) : (
            <Box
              flexGrow={1}
              is='span'
              mi={4}
              rcx-select__item
              fontScale='p2'
              color={valueLabel ? 'default' : 'hint'}
            >
              {visibleText}
            </Box>
          ))}
        {renderComponentOrFunction(renderAnchor, {
          ref: anchorRef,
          children: !value ? option || placeholder : null,
          disabled: disabled ?? false,
          onClick: show,
          onBlur: hide,
          onKeyDown: handleKeyDown,
          onKeyUp: handleKeyUp,
        })}
        <Margins inline={4}>
          <SelectAddon>
            {visibility === AnimatedVisibility.VISIBLE ? (
              <Icon name='cross' size={20} />
            ) : (
              <Icon name={addonIcon ?? 'chevron-down'} size={20} />
            )}
          </SelectAddon>
        </Margins>
      </SelectWrapper>
      <PositionAnimated visible={visibility} anchor={containerRef}>
        <Options
          width={inlineSize}
          role='listbox'
          options={mappedOptions}
          onSelect={internalChangedByClick}
          renderItem={renderItem}
          cursor={cursor}
          customEmpty={customEmpty}
        />
      </PositionAnimated>
    </SelectContainer>
  );
});
