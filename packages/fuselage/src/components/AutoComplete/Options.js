
import React from 'react';

import { Margins, Tile, Text, CheckBox } from '../..';
import { Box, Scrollable } from '../Box';

const merge = (...args) => args.filter((e) => e).join(' ');

const prevent = (e) => e.preventDefault() & e.stopPropagation();

const Li = Box.extend('rcx-option', 'li');

export const Empty = React.memo(() => <Text hintColor>Empty</Text>);

export const Option = React.memo(({ id, children: label, focus, selected, ...options }) => <Li key={id} mod-focus={focus} id={id} mod-selected={selected} aria-selected={selected} {...options}>{label}</Li>);
export const CheckOption = React.memo(({ id, children: label, focus, selected, ...options }) => <Li key={id} mod-focus={focus} id={id} aria-selected={selected} {...options}><Margins inline={4}><CheckBox checked={selected} /></Margins><Margins inline={4}><Text>{label}</Text></Margins></Li>);


export const Options = ({ multiple, renderEmpty: EmptyComponent = Empty, className, options, cursor, renderItem: OptionComponent = Option, onSelect, ...props }) => (
  <Box className={merge('rcx-options', className)} is='div' {...props}>
    <Scrollable vertical>
      <Margins blockStart={4}>
        <Tile onMouseDown={prevent} onClick={prevent} is='ol' aria-multiselectable={multiple} role='listbox' padding='8' aria-multiselectable='true' aria-activedescendant={options && options[cursor] && options[cursor][0]} elevation={'2'}>
          {!options.length && <EmptyComponent/>}
          {options.map(([value, label, selected], i) => <OptionComponent role='option' onMouseDown={(e) => prevent(e) & onSelect([value, label]) && false} key={value} value={value} selected={selected || (multiple !== true && null)} focus={cursor === i || null}>{label}</OptionComponent>)}
        </Tile>
      </Margins>
    </Scrollable>
  </Box>
);
