import type { AriaSelectProps } from '@react-types/select';
import { useMergedRefs, useResizeObserver } from '@rocket.chat/fuselage-hooks';
import type { AllHTMLAttributes, Key } from 'react';
import { forwardRef } from 'react';
import { useSelect, HiddenSelect, mergeProps, useFocusRing } from 'react-aria';
import { useSelectState } from 'react-stately';

import { styled } from '@tamagui/core';

import { RcxText } from '../../primitives';
import { Icon } from '../Icon';
import { OptionContainer } from '../Options';
import { Popover } from '../Popover';

import { ListBox } from './Listbox';
import { SelectTrigger } from './SelectTrigger';

export { Item } from 'react-stately';

// Value text display — replaces <Box is='span' ...valueProps>
const SelectValueText = styled(RcxText, {
  name: 'SelectValue',

  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  letterSpacing: '$p2',

  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',

  variants: {
    small: {
      true: {
        fontSize: '$c1',
        fontWeight: '$c1',
        lineHeight: '$c1',
        letterSpacing: '$c1',
      },
    },
  } as const,
});

export type SelectAriaProps<T extends object> = AriaSelectProps<T> & {
  error?: string;
  placeholder?: string;
  value?: Key | null;
  onChange?: (key: Key) => void;
  small?: boolean;
} & AllHTMLAttributes<HTMLElement>;

export const SelectAria = forwardRef<HTMLElement, SelectAriaProps<object>>(
  function SelectAria(
    {
      error,
      placeholder,
      value,
      onChange,
      small,
      isDisabled: isDisabledProps,
      disabled,
      id,
      ...props
    },
    outerRef,
  ) {
    const isDisabled = isDisabledProps || disabled;

    const state = useSelectState({
      isDisabled,
      selectedKey: typeof value !== 'bigint' ? value : null,
      onSelectionChange: onChange,
      ...props,
    });

    const { ref, borderBoxSize } = useResizeObserver<any>();
    const mergedRef = useMergedRefs(outerRef, ref);

    const { triggerProps, valueProps, menuProps } = useSelect(
      { isDisabled, ...props },
      state,
      ref,
    );

    const { focusProps, isFocusVisible } = useFocusRing();

    return (
      <>
        <SelectTrigger
          {...mergeProps(focusProps, triggerProps)}
          ref={mergedRef}
          small={small}
          focus={isFocusVisible || state.isOpen}
          error={error}
          id={id}
        >
          <HiddenSelect
            state={state}
            triggerRef={ref}
            label={props.label}
            name={props.name}
            isDisabled={isDisabled}
          />
          <SelectValueText
            color={state.selectedItem ? '$fontDefault' : '$fontHint'}
            small={small || undefined}
            {...(valueProps as any)}
          >
            {state.selectedItem ? state.selectedItem.rendered : placeholder}
          </SelectValueText>
          <Icon
            color='default'
            name={state.isOpen ? 'chevron-up' : 'chevron-down'}
            size='x20'
          />
        </SelectTrigger>
        {state.isOpen && (
          <Popover
            state={state}
            triggerRef={ref}
            placement='bottom'
            offset={4}
            containerPadding={8}
          >
            <OptionContainer
              style={{
                width: borderBoxSize?.inlineSize,
              }}
            >
              <ListBox {...menuProps} state={state} />
            </OptionContainer>
          </Popover>
        )}
      </>
    );
  },
);
