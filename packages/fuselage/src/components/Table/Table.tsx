import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { createContext, forwardRef, useMemo } from 'react';

export type TableProps = {
  striped?: boolean;
  sticky?: boolean;
  fixed?: boolean;
  children?: ReactNode;
} & HTMLAttributes<HTMLTableElement>;

export const TableContext = createContext<{
  striped?: boolean;
  sticky?: boolean;
}>({});

const wrapperStyle: CSSProperties = {
  position: 'relative',
};

const tableBaseStyle: CSSProperties = {
  display: 'table',
  width: '100%',
  borderSpacing: '0',
  borderCollapse: 'collapse',
};

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ striped, sticky, fixed = false, children, className, style, ...props }, ref) => {
    const mergedStyle = useMemo<CSSProperties>(
      () => ({
        ...tableBaseStyle,
        ...(fixed ? { tableLayout: 'fixed' as const } : undefined),
        ...style,
      }),
      [fixed, style],
    );

    const contextValue = useMemo(
      () => ({ striped, sticky }),
      [striped, sticky],
    );

    return (
      <TableContext.Provider value={contextValue}>
        <div className='rcx-box' style={wrapperStyle}>
          <table
            ref={ref}
            className={['rcx-box', className].filter(Boolean).join(' ')}
            style={mergedStyle}
            {...props}
          >
            {children}
          </table>
        </div>
      </TableContext.Provider>
    );
  },
);

Table.displayName = 'Table';

export default Table;
