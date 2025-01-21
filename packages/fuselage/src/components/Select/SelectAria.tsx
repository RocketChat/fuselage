import type { AriaSelectProps } from '@react-types/select';
import { useMergedRefs, useResizeObserver } from '@rocket.chat/fuselage-hooks';
import type { AllHTMLAttributes, Key, Ref } from 'react';
import { forwardRef } from 'react';
import { useSelect, HiddenSelect, mergeProps, useFocusRing } from 'react-aria';
import { useSelectState } from 'react-stately';

import Box from '../Box/Box';
import { Icon } from '../Icon';
import { OptionContainer } from '../Options';
import { Popover } from '../Popover';

import { ListBox } from './Listbox';
import { SelectTrigger } from './SelectTrigger';

export { Item } from 'react-stately';

type SelectAriaProps<T extends object> = AriaSelectProps<T> & {
  error?: string;
  placeholder?: string;
  value?: Key | null;
  onChange?: (key: Key) => void;
  small?: boolean;
};

export const SelectAria = forwardRef(function SelectAria<T extends object>(
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
  }: SelectAriaProps<T> & AllHTMLAttributes<HTMLElement>,
  outerRef: Ref<HTMLElement>,
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
        <Box
          is='span'
          color={state.selectedItem ? 'default' : 'hint'}
          {...valueProps}
          {...(small && { fontScale: 'c1' })}
        >
          {state.selectedItem ? state.selectedItem.rendered : placeholder}
        </Box>
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
});
