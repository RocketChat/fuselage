import type { AllHTMLAttributes, ElementType, RefAttributes } from 'react';

import { cx, cxx } from '../../helpers/composeClassNames';

export type ItemActionsProps = {
  is?: ElementType;
  /**
   * `hover` hides the actions until the row is hovered, holds focus or has an expanded menu.
   * They stay in the tab order, and touch screens always show them.
   */
  reveal?: 'always' | 'hover';
} & Omit<AllHTMLAttributes<HTMLElement>, 'is'> &
  RefAttributes<HTMLElement>;

/**
 * The trailing buttons, icon buttons or menu trigger of an `Item` or `ItemGroupHeader`.
 */
const ItemActions = ({
  is: Tag = 'div',
  reveal = 'always',
  className,
  children,
  ...props
}: ItemActionsProps) => (
  <Tag
    {...props}
    className={cx(
      cxx('rcx-item__actions')({ 'reveal-hover': reveal === 'hover' }),
      className,
    )}
  >
    {reveal === 'hover' ? (
      <div className='rcx-item__actions-inner'>{children}</div>
    ) : (
      children
    )}
  </Tag>
);

export default ItemActions;
