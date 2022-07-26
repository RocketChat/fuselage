import { useResizeObserver } from '@rocket.chat/fuselage-hooks';
import type { AriaAttributes } from 'react';
import React, { useRef } from 'react';
import { HiddenSelect, useButton, useSelect } from 'react-aria';
import { useSelectState } from 'react-stately';

import Box from '../../Box';
import { SelectAddon } from './SelectAddon';
import { SelectListBox } from './SelectListBox';
import { SelectPlaceholder } from './SelectPlaceholder';
import { SelectPopover } from './SelectPopover';
import { SelectTrigger } from './SelectTrigger';
import { SelectValue } from './SelectValue';

export function Select<
  T extends {
    label?: string;
    name?: string;
    placeholder?: string;
  }
>(props: AriaAttributes & T & { children: any }) {
  // Create state based on the incoming props
  const state = useSelectState(props);
  const ref = useRef(null);
  const { triggerProps, valueProps, menuProps } = useSelect(props, state, ref);

  const { buttonProps } = useButton(triggerProps, ref);
  const { ref: containerRef, borderBoxSize } = useResizeObserver();

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
          <SelectListBox
            width={borderBoxSize.inlineSize}
            {...menuProps}
            state={state}
          />
        </SelectPopover>
      )}
    </Box>
  );
}
