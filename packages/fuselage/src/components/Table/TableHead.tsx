import type { HTMLAttributes, ReactNode } from 'react';
import { createContext, forwardRef } from 'react';

export const TableHeadContext = createContext(false);

export type TableHeadProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLTableSectionElement>;

const theadStyle: React.CSSProperties = {
  display: 'table-header-group',
};

const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, className, style, ...props }, ref) => (
    <TableHeadContext.Provider value={true}>
      <thead
        ref={ref}
        className={['rcx-box', className].filter(Boolean).join(' ')}
        style={{ ...theadStyle, ...style }}
        {...props}
      >
        {children}
      </thead>
    </TableHeadContext.Provider>
  ),
);

TableHead.displayName = 'TableHead';

export default TableHead;
