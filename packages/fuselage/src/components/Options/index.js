import React, { useLayoutEffect, useMemo } from 'react';

import { Box, Scrollable } from '../Box';
import { CheckBox } from '../CheckBox';
import Tile from '../Tile';
import Option from './Option';
import { useCursor } from './useCursor';

export { useCursor };

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

export const Options = React.forwardRef(
  (
    {
      maxHeight = '144px',
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
    useLayoutEffect(() => {
      const { current } = ref;
      const li = current.querySelector('.rcx-option--focus');
      if (!li) {
        return;
      }
      if (
        li.offsetTop + li.clientHeight >
          current.scrollTop + current.clientHeight ||
        li.offsetTop - li.clientHeight < current.scrollTop
      ) {
        current.scrollTop = li.offsetTop;
      }
    }, [cursor, ref]);
    const optionsMemoized = useMemo(
      () =>
        options.map(([value, label, selected], i) => (
          <OptionComponent
            role='option'
            label={label}
            onMouseDown={(e) => prevent(e) & onSelect([value, label]) && false}
            key={value}
            value={value}
            selected={selected || (multiple !== true && null)}
            focus={cursor === i || null}
          />
        )),
      [options, multiple, cursor, onSelect]
    );
    return (
      <Box rcx-options {...props}>
        <Tile padding={0} paddingBlock={'x12'} paddingInline={0} elevation='2'>
          <Scrollable vertical smooth>
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
              {!options.length && <EmptyComponent />}
              {optionsMemoized}
            </Tile>
          </Scrollable>
        </Tile>
      </Box>
    );
  }
);

Options.AvatarSize = 'x20';
