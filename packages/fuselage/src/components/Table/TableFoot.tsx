import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

export type TableFootProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLTableSectionElement>;

const tfootStyle: React.CSSProperties = {
  display: 'table-footer-group',
};

const TableFoot = forwardRef<HTMLTableSectionElement, TableFootProps>(
  ({ children, className, style, ...props }, ref) => (
    <tfoot
      ref={ref}
      className={['rcx-box', className].filter(Boolean).join(' ')}
      style={{ ...tfootStyle, ...style }}
      {...props}
    >
      {children}
    </tfoot>
  ),
);

TableFoot.displayName = 'TableFoot';

export default TableFoot;
