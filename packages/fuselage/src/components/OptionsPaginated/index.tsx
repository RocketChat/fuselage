import {
  useMutableCallback,
  useDebouncedState,
} from '@rocket.chat/fuselage-hooks';
import React, { useState } from 'react';
import { Virtuoso } from 'react-virtuoso';

import { AnimatedVisibility, Box } from '../Box';
import { CheckBox } from '../CheckBox';
import { Tile } from '../Tile';
import { Option } from './Option';

console.log(Virtuoso);

export const ACTIONS = {
  ESC: 27,
  KEY_UP: 38,
  KEY_DOWN: 40,
  HOME: 36,
  END: 35,
  TAB: 9,
  ENTER: 13,
};

const prevent = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

export const Empty = React.memo(() => <Option color='hint' label='Empty' />);

export const CheckOption = React.memo(
  ({ selected, children: label, ...options }) => (
    <Option label={label} selected={selected} {...options}>
      <CheckBox checked={selected} />
    </Option>
  )
);

export const OptionsPaginated = React.forwardRef(
  (
    {
      multiple,
      renderEmpty: EmptyComponent = Empty,
      options,
      cursor,
      renderItem: OptionComponent = Option,
      onSelect,
      ...props
    },
    ref
  ) => {
    const OptionsComponentWithData = ({ index, data }) => {
      const { value, label, selected } = data;
      console.log(options);
      return (
        <OptionComponent
          role='option'
          label={label}
          onMouseDown={(e) => prevent(e) & onSelect([value, label]) && false}
          key={value}
          value={value}
          selected={selected || (multiple !== true && null)}
          focus={cursor === index || null}
        />
      );
    };

    return (
      <Box rcx-options {...props} ref={ref}>
        <Tile padding={0} paddingBlock={'x12'} paddingInline={0} elevation='2'>
          {!options.length ? (
            <EmptyComponent />
          ) : (
            <Virtuoso
              style={{ height: '144px' }}
              totalCount={options.length}
              data={options}
              itemContent={(index, data) => (
                <OptionsComponentWithData index={index} data={data} ref={ref} />
              )}
              // components={{ Scroller: Scrollable }}
            />
          )}
          {/* <Scrollable vertical smooth>
            <Tile
              ref={ref}
              elevation='0'
              padding='none'
              maxHeight={maxHeight}
              onMouseDown={prevent}
              onClick={prevent}
              is='ol'
              aria-multiselectable={multiple}
              role='listbox'
              aria-multiselectable='true'
              aria-activedescendant={
                options && options[cursor] && options[cursor][0]
              }
            >
              {optionsMemoized}
            </Tile>
          </Scrollable> */}
        </Tile>
      </Box>
    );
  }
);

export const useVisible = (initialVisibility = AnimatedVisibility.HIDDEN) => {
  const [visible, setVisible] = useDebouncedState(initialVisibility, 10);
  const hide = useMutableCallback(() => setVisible(AnimatedVisibility.HIDDEN));
  const show = useMutableCallback(() => setVisible(AnimatedVisibility.VISIBLE));

  return [visible, hide, show];
};

OptionsPaginated.AvatarSize = 'x20';
