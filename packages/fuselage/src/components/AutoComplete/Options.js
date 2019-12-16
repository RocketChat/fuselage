
import React from 'react';

import { Box, Scrollable, Margins } from '../Box';
import { Tile } from '../Tile';

const merge = (...args) => args.filter((e) => e).join(' ');

const Li = Box.extend('rcx-option', 'li');
export const Option = React.memo(({ id, children: label, focus, selected, ...options }) => <Li key={id} mod-focus={focus} id={id} mod-selected={selected} aria-selected={selected || null} {...options}>{label}</Li>);

export const Empty = React.memo(() => <Box is='span' textColor='hint'>Empty</Box>);

export const Options = ({ renderEmpty: EmptyComponent = Empty, className, options, cursor, renderItem: OptionComponent = Option, onSelect, ...props }) => (
  <Box className={merge('rcx-options', className)} is='div' {...props}>
    <Scrollable vertical>
      <Margins blockStart={4}>
        <Tile is='ol' role='listbox' padding='8' aria-multiselectable='true' aria-activedescendant={options && options[cursor] && options[cursor][0]} elevation={'2'}>
          {!options.length && <EmptyComponent/>}
          {options.map(([value, label, selected], i) => <OptionComponent role='option' onClick={(e) => e.preventDefault() & e.stopPropagation() & onSelect([value, label]) && false} key={value} value={value} selected={selected} focus={cursor === i || null}>{label}</OptionComponent>)}
        </Tile>
      </Margins>
    </Scrollable>
  </Box>
);
