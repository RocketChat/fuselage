import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef, useMemo } from 'react';

export type TableRowProps = {
  action?: boolean;
  selected?: boolean;
  children?: ReactNode;
} & HTMLAttributes<HTMLTableRowElement>;

const rowBaseStyle: React.CSSProperties = {
  display: 'table-row',
};

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ action, selected, children, className, style, ...props }, ref) => {
    const mergedStyle = useMemo<React.CSSProperties>(
      () => ({
        ...rowBaseStyle,
        ...(selected ? { backgroundColor: 'var(--surfaceTint)' } : undefined),
        ...(action ? { cursor: 'pointer' } : undefined),
        ...style,
      }),
      [action, selected, style],
    );

    return (
      <tr
        ref={ref}
        className={['rcx-box', className].filter(Boolean).join(' ')}
        style={mergedStyle}
        {...props}
      >
        {children}
      </tr>
    );
  },
);

TableRow.displayName = 'TableRow';

export default TableRow;
