import type { AriaSelectProps } from '@react-types/select';
import { useResizeObserver } from '@rocket.chat/fuselage-hooks';
import * as React from 'react';
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
import { ListBox } from './Listbox';
import { Popover } from './Popover';

export { Item } from 'react-stately';

export const SelectAria = function SelectAria<T extends object>({
  disabled,
  error,
  placeholder,
  ...props
}: AriaSelectProps<T> & {
  error?: string;
  placeholder?: string;
} & React.AllHTMLAttributes<HTMLElement>) {
  const state = useSelectState({ isDisabled: disabled, ...props });

  const { ref, borderBoxSize } = useResizeObserver<any>();

  const { triggerProps, valueProps, menuProps } = useSelect(props, state, ref);

  const { buttonProps } = useButton(triggerProps, ref);

  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <Box w='100%'>
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <Box
        disabled={disabled}
        rcx-select
        {...mergeProps(buttonProps, focusProps)}
        is='button'
        display='flex'
        flexDirection='row'
        fontScale='p2'
        ref={ref}
        justifyContent='space-between'
        w='100%'
        className={[
          error && 'invalid',
          disabled && 'disabled',
          (isFocusVisible || state.isOpen) && 'focus',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <Box
          is='span'
          {...valueProps}
          color={state.selectedItem ? 'default' : 'hint'}
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
        <Popover state={state} triggerRef={ref} placement='bottom' offset={4}>
          <OptionContainer
            style={{
              width: borderBoxSize?.inlineSize,
            }}
          >
            <ListBox {...menuProps} state={state} />
          </OptionContainer>
        </Popover>
      )}
    </Box>
  );
};
