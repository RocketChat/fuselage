import type { AriaAttributes } from 'react';
import React, { memo, useRef } from 'react';
import { HiddenSelect, useButton, useSelect } from 'react-aria';
import { Item, useSelectState } from 'react-stately';

import Box from '../../Box';
import { SelectAddon } from './SelectAddon';
import { SelectListBox } from './SelectListBox';
import { SelectPlaceholder } from './SelectPlaceholder';
import { SelectPopover } from './SelectPopover';
import { SelectTrigger } from './SelectTrigger';
import { SelectValue } from './SelectValue';

export const Select = memo(function Select<
  T extends {
    label?: string;
    name?: string;
    placeholder?: string;
    onSelectionChange?: (value: string | number) => void;
    defaultSelectedKey?: string | number;
  }
>(props: AriaAttributes & T & { children: any }) {
  // Create state based on the incoming props
  const state = useSelectState(props);
  const ref = useRef(null);
  const { triggerProps, valueProps, menuProps } = useSelect(props, state, ref);

  const { buttonProps } = useButton(triggerProps, ref);
  const containerRef = useRef<HTMLElement>(null);

  return (
    <Box rcx-select ref={containerRef}>
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <SelectTrigger {...buttonProps} ref={ref}>
        {state.selectedItem && (
          <SelectValue {...valueProps}>
            {state.selectedItem.rendered}
          </SelectValue>
        )}
        {!state.selectedItem && (
          <SelectPlaceholder {...valueProps}>
            {props.placeholder || 'Select an option'}
          </SelectPlaceholder>
        )}
        <SelectAddon name={state.isOpen ? 'chevron-up' : 'chevron-down'} />
      </SelectTrigger>
      {state.isOpen && (
        <SelectPopover
          isOpen={state.isOpen}
          onClose={state.close}
          anchor={containerRef}
        >
          <SelectListBox {...menuProps} state={state} />
        </SelectPopover>
      )}
    </Box>
  );
});

export const SelectItem = Item;
