import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

import { Box } from '../Box';

export function Table({
  fixed = false,
  ...props
}) {
  return <Box componentClassName='rcx-table__wrapper'>
    <Box
      is='table'
      componentClassName='rcx-table'
      mod-fixed={fixed}
      {...props}
    />
  </Box>;
}

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

export function TableRow({ action, ...props }) {
  return <Box is='tr' componentClassName='rcx-table__row' mod-action={action} {...props} />;
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
    textStyle='p1'
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
