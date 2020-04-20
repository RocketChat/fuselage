import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

import { Box, Margins } from '../Box';
import { Button } from '../Button';


export function Selection({ children, text, ...props }) {
  return <Box textColor='alternative' componentClassName='rcx-table__selection' display='flex' alignItems='center' justifyContent='space-between' {...props} pi='x24'>
    <Box textStyle='p2' mb='x16'>{text}</Box>
    <Box mi='neg-x8' textStyle='p2'>{children}<Margins inline='x4'><Button small primary>oiasdase</Button><Button small primary>oie</Button></Margins></Box>
  </Box>;
}

export function Table({
  striped,
  sticky,
  fixed = false,
  ...props
}) {
  return <Box componentClassName='rcx-table__wrapper'>
    <Box
      is='table'
      componentClassName='rcx-table'
      mod-fixed={fixed}
      mod-sticky={sticky}
      mod-striped={striped}
      {...props}
    />
  </Box>;
}

Table.Selection = Selection;

const TableHeadContext = createContext(false);

export function TableHead(props) {
  return <TableHeadContext.Provider value={true}>
    <Box is='thead' componentClassName='rcx-table__head' {...props}></Box>
  </TableHeadContext.Provider>;
}

export function TableBody(props) {
  return <Box is='tbody' componentClassName='rcx-table__body' {...props} />;
}

export function TableFoot(props) {
  return <Box is='tfoot' componentClassName='rcx-table__foot' {...props} />;
}

export function TableRow({ hasAction, selected, ...props }) {
  return <Box is='tr' componentClassName='rcx-table__row' mod-selected={selected} mod-action={hasAction} {...props} />;
}

export function TableCell({
  align,
  action,
  clickable,
  ...props
}) {
  const isInsideHead = useContext(TableHeadContext);
  return <Box
    is={isInsideHead ? 'th' : 'td'}
    componentClassName='rcx-table__cell'
    textStyle='paragraph'
    textColor='default'
    mod-align={align}
    mod-header={isInsideHead}
    mod-clickable={clickable}
    {...props}
  />;
}

TableCell.propTypes = {
  align: PropTypes.oneOfType([PropTypes.oneOf(['start', 'end', 'center', 'justify']), PropTypes.object]),
  fixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

Table.Head = TableHead;
Table.Body = TableBody;
Table.Foot = TableFoot;
Table.Row = TableRow;
Table.Cell = TableCell;
