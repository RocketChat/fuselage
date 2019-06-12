import React, { useEffect, useRef, useState } from 'react';

import { useLayoutMediaQuery, useStyle } from '../../helpers/hooks';
import styles from './styles.scss';


function SideBarBackdrop({
  open,
  ...props
}) {
  const backdropRef = useRef(null);
  const [mounted, setMounted] = useState(open);
  const sideBarBackdropVisibleClassName = useStyle(styles, 'SideBar__Backdrop', { visible: true });
  const sideBarBackdropHiddenClassName = useStyle(styles, 'SideBar__Backdrop', { visible: false });

  useEffect(() => {
    if (open) {
      setMounted(true);
    }

    if (!open && backdropRef.current) {
      backdropRef.current.addEventListener('transitionend', ({ propertyName }) => {
        if (propertyName === 'visibility') {
          setMounted(false);
        }
      }, false);
    }
  }, [open]);

  if (!open && !mounted) {
    return null;
  }

  return <div
    ref={backdropRef}
    className={open && mounted ? sideBarBackdropVisibleClassName : sideBarBackdropHiddenClassName}
    {...props}
  />;
}

export function SideBar({
  children,
  docked,
  open,
  responsive = true,
  className,
  ...props
}) {
  const isProbablyDocked = useLayoutMediaQuery('(min-width: 64.5rem)');

  if (responsive) {
    docked = docked || isProbablyDocked;
  }

  const sideBarClassName = useStyle(styles, 'SideBar', {
    docked,
    open,
  }, className);

  return (
    <>
      <div className={sideBarClassName} {...props}>
        {children}
      </div>
      <SideBarBackdrop open={open} />
    </>
  );
}

export { SideBarHeader } from './Header';
export { SideBarMenu } from './Menu';
export { SideBarMenuItem } from './MenuItem';
