import type { AriaSelectProps } from '@react-types/select';
import { useMergedRefs, useResizeObserver } from '@rocket.chat/fuselage-hooks';
import type { Key, Ref } from 'react';
import React, { forwardRef } from 'react';
import {
  useSelect,
  HiddenSelect,
  useButton,
  mergeProps,
  useFocusRing,
} from 'react-aria';
import { useSelectState } from 'react-stately';

import Box from '../Box/Box';
import { Icon } from '../Icon';
import { OptionContainer } from '../Options';
import { Popover } from '../Popover';
import { ListBox } from './Listbox';

export { Item } from 'react-stately';

export const SelectAria = forwardRef(function SelectAria<T extends object>(
  {
    disabled,
    error,
    placeholder,
    value,
    onChange,
    small,
    ...props
  }: Omit<AriaSelectProps<T>, 'value' | 'onChange'> & {
    error?: string;
    placeholder?: string;
    value?: Key | null;
    onChange?: ((key: Key) => any) | undefined;
    small?: boolean;
  } & React.AllHTMLAttributes<HTMLElement>,
  outerRef: Ref<HTMLElement>
) {
  const state = useSelectState({
    isDisabled: disabled,
    selectedKey: value,
    onSelectionChange: onChange,
    ...props,
  });

  const { ref, borderBoxSize } = useResizeObserver<any>();

  const { triggerProps, valueProps, menuProps } = useSelect(props, state, ref);

  const { buttonProps } = useButton(triggerProps, ref);

  const { focusProps, isFocusVisible } = useFocusRing();

  const mergedRef = useMergedRefs(outerRef, ref);

  return (
    <>
      <Box
        {...props}
        disabled={disabled}
        rcx-select
        {...mergeProps(buttonProps, focusProps)}
        is='button'
        display='flex'
        flexDirection='row'
        fontScale='p2'
        ref={mergedRef}
        justifyContent='space-between'
        rcx-input-box--small={small}
        className={[
          error && 'invalid',
          disabled && 'disabled',
          (isFocusVisible || state.isOpen) && 'focus',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <HiddenSelect
          state={state}
          triggerRef={ref}
          label={props.label}
          name={props.name}
        />
        <Box
          is='span'
          {...valueProps}
          color={state.selectedItem ? 'default' : 'hint'}
          {...(small && { fontScale: 'c1' })}
        >
          {state.selectedItem ? state.selectedItem.rendered : placeholder}
        </Box>

        <Icon
          color='default'
          name={state.isOpen ? 'chevron-up' : 'chevron-down'}
          size='x20'
        />
      </Box>
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
});
