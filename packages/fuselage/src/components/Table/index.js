import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

import { Box } from '../Box';
import { Button } from '../Button';
import Margins from '../Margins';

const style = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

export function TableSelection({ children, text, ...props }) {
  return (
    <Box
      color='alternative'
      rcx-table__selection
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      {...props}
      pi='x24'
    >
      <Box fontScale='p4' mb='x16' flexShrink={1} style={style}>
        {text}
      </Box>
      {children && (
        <Box mi='neg-x8' fontScale='p4' flexShrink={0}>
          <Margins inline='x4'>{children}</Margins>
        </Box>
      )}
    </Box>
  );
}

export function TableSelectionButton(props) {
  return <Button small primary flexShrink={0} {...props} />;
}

Selection.Button = TableSelectionButton;

export function Table({ striped, sticky, fixed = false, ...props }) {
  return (
    <Box rcx-table__wrapper>
      <Box
        is='table'
        rcx-table
        rcx-table--fixed={fixed}
        rcx-table--sticky={sticky}
        rcx-table--striped={striped}
        {...props}
      />
    </Box>
  );
}

Table.Selection = Selection;

const TableHeadContext = createContext(false);

export function TableHead(props) {
  return (
    <TableHeadContext.Provider value={true}>
      <Box is='thead' rcx-table__head {...props}></Box>
    </TableHeadContext.Provider>
  );
}

export function TableBody(props) {
  return <Box is='tbody' rcx-table__body {...props} />;
}

export function TableFoot(props) {
  return <Box is='tfoot' rcx-table__foot {...props} />;
}

export function TableRow({ action, selected, ...props }) {
  return (
    <Box
      is='tr'
      rcx-table__row
      rcx-table__row--selected={selected}
      rcx-table__row--action={action}
      {...props}
    />
  );
}

export function TableCell({ align, clickable, ...props }) {
  const isInsideHead = useContext(TableHeadContext);
  return (
    <Box
      is={isInsideHead ? 'th' : 'td'}
      rcx-table__cell
      rcx-table__cell--align={align}
      rcx-table__cell--header={isInsideHead}
      rcx-table__cell--clickable={clickable}
      {...props}
    />
  );
}

TableCell.propTypes = {
  align: PropTypes.oneOfType([
    PropTypes.oneOf(['start', 'end', 'center', 'justify']),
    PropTypes.object,
  ]),
  fixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

Table.Head = TableHead;
Table.Body = TableBody;
Table.Foot = TableFoot;
Table.Row = TableRow;
Table.Cell = TableCell;
