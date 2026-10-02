import type { AllHTMLAttributes, ElementType, RefAttributes } from 'react';

import { cx, cxx } from '../../helpers/composeClassNames';

export type ItemMediaProps = {
  is?: ElementType;
  /**
   * `icon` keeps a 20px box at every size, for icons and status bullets.
   */
  variant?: 'default' | 'icon';
} & Omit<AllHTMLAttributes<HTMLElement>, 'is'> &
  RefAttributes<HTMLElement>;

/**
 * The leading avatar, icon or thumbnail of an `Item`. Its box follows the item size.
 */
const ItemMedia = ({
  is: Tag = 'div',
  variant = 'default',
  className,
  ...props
}: ItemMediaProps) => (
  <Tag
    {...props}
    className={cx(
      cxx('rcx-item__media')({ icon: variant === 'icon' }),
      className,
    )}
  />
);

export default ItemMedia;
