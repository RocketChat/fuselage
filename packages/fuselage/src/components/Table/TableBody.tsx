import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

export type TableBodyProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLTableSectionElement>;

const tbodyStyle: React.CSSProperties = {
  display: 'table-row-group',
};

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, className, style, ...props }, ref) => (
    <tbody
      ref={ref}
      className={['rcx-box', className].filter(Boolean).join(' ')}
      style={{ ...tbodyStyle, ...style }}
      {...props}
    >
      {children}
    </tbody>
  ),
);

TableBody.displayName = 'TableBody';

export default TableBody;
