import type { ReactNode } from 'react';

import IconButton, { type IconButtonProps } from './IconButton';

export type IconButtonWithBadgeProps = {
  badge?: ReactNode;
} & IconButtonProps;

/**
 * An icon button carrying a badge in its corner, for what is waiting behind the button.
 *
 * The badge is hidden from assistive technology, always: `aria-label` replaces a button's contents rather than
 * adding to them, so a badge inside a labelled button is never read out. What it says has to reach the button's
 * own name instead, which is the caller's to write.
 */
function IconButtonWithBadge({
  badge,
  children,
  ...props
}: IconButtonWithBadgeProps) {
  const hasBadge = badge !== undefined && badge !== null;

  return (
    <IconButton rcx-button--with-badge={hasBadge} {...props}>
      {hasBadge && (
        // Hit-testable, because a badge carrying a `title` promises a tooltip and `pointer-events: none` is
        // precisely what stops one appearing. The badge sits inside the button, so a click on it is a click on
        // the button.
        <span className='rcx-button__badge' aria-hidden='true'>
          {badge}
        </span>
      )}
      {children}
    </IconButton>
  );
}

export default IconButtonWithBadge;
