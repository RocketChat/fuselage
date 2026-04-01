import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef, useContext, useMemo } from 'react';

import { TableContext } from './Table';
import { TableHeadContext } from './TableHead';

export type TableCellProps = {
  align?: 'start' | 'center' | 'end' | 'justify';
  clickable?: boolean;
  children?: ReactNode;
} & HTMLAttributes<HTMLTableCellElement>;

const cellBaseStyle: React.CSSProperties = {
  display: 'table-cell',
  padding: '8px',
  userSelect: 'text',
  textAlign: 'unset',
  verticalAlign: 'middle',
  color: 'var(--fontSecondaryInfo)',
  fontFamily: 'var(--font-family_body)',
  fontSize: 'var(--fontSize_p2)',
  fontWeight: 'var(--fontWeight_p2)' as any,
  lineHeight: 'var(--lineHeight_p2)',
  letterSpacing: '0',
};

const headerExtraStyle: React.CSSProperties = {
  position: 'relative',
  fontSize: 'var(--fontSize_c2)',
  fontWeight: 'var(--fontWeight_c2)' as any,
  lineHeight: 'var(--lineHeight_c2)',
};

const stickyHeaderStyle: React.CSSProperties = {
  position: 'sticky',
  zIndex: 10,
  top: 0,
  backgroundColor: 'var(--surfaceLight)',
};

const headerAfterStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  borderBlockEnd: '1px solid var(--strokeLight)',
};

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ align, clickable, children, className, style, ...props }, ref) => {
    const isInsideHead = useContext(TableHeadContext);
    const { sticky } = useContext(TableContext);

    const innerElement =
      children ??
      (!isInsideHead ? (
        <hr
          className='rcx-box'
          style={{
            display: 'inline-block',
            width: '14px',
            borderWidth: '1px',
          }}
        />
      ) : undefined);

    const mergedStyle = useMemo<React.CSSProperties>(
      () => ({
        ...cellBaseStyle,
        ...(isInsideHead ? headerExtraStyle : undefined),
        ...(isInsideHead && sticky ? stickyHeaderStyle : undefined),
        ...(align ? { textAlign: align } : undefined),
        ...(clickable ? { cursor: 'pointer' } : undefined),
        ...style,
      }),
      [isInsideHead, sticky, align, clickable, style],
    );

    const Element = isInsideHead ? 'th' : 'td';

    return (
      <Element
        ref={ref as any}
        className={['rcx-box', className].filter(Boolean).join(' ')}
        style={mergedStyle}
        {...(props as any)}
      >
        {innerElement}
        {isInsideHead && <span style={headerAfterStyle} aria-hidden='true' />}
      </Element>
    );
  },
);

TableCell.displayName = 'TableCell';

export default TableCell;
