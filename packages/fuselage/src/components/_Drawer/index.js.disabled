import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { useLayoutMediaQuery, useStyle } from '../../hooks/styles';
import styles from './styles.scss';


function DrawerBackdrop({
  open,
  opacity,
  ...props
}) {
  const backdropRef = useRef(null);
  const [mounted, setMounted] = useState(open);
  const drawerBackdropClassName = useStyle(styles, 'rcx-drawer__backdrop', { visible: open && mounted });

  useEffect(() => {
    if (open) {
      setMounted(true);
    }

    if (!backdropRef.current) {
      return;
    }

    if (!open) {
      backdropRef.current.addEventListener('transitionend', ({ propertyName }) => {
        if (propertyName === 'visibility') {
          setMounted(false);
        }
      }, false);
    }
  }, [open]);

  useLayoutEffect(() => {
    if (!backdropRef.current) {
      return;
    }

    backdropRef.current.style.transition = opacity ? 'unset' : '';
  }, [opacity]);

  if (!open && !mounted) {
    return null;
  }

  return <div ref={backdropRef} className={drawerBackdropClassName} style={{ opacity }} {...props} />;
}

export function Drawer({
  children,
  docked = false,
  dockWhen = '',
  hysteresis = 0.55,
  open = false,
  reverse = false,
  swipeAreaWidth = 20,
  onOpening = null,
  onClosing = null,
  onDockStateChange = null,
  className,
  ...props
}) {
  const drawerRef = useRef(null);
  const [slidingValue, setSlidingValue] = useState(null);

  const initialPositionRef = useRef(null);
  const displacementRef = useRef(null);

  useLayoutEffect(() => {
    if (docked) {
      return;
    }

    const getNormalizedValue = (x) => (
      reverse ? drawerRef.current.parentElement.getBoundingClientRect().width - x : x
    );

    const computeSlidingValue = () => {
      const { width } = drawerRef.current.getBoundingClientRect();
      return Math.max(Math.min((open ? width : 0) + displacementRef.current, width), 0) / width;
    };

    const handleTouchStart = (event) => {
      const [{ clientX }] = event.touches;
      const x = getNormalizedValue(clientX);

      if (!open && x > swipeAreaWidth) {
        return;
      }

      initialPositionRef.current = x;
      displacementRef.current = 0;

      setSlidingValue(open ? 1 : 0);
    };

    const handleTouchMove = (event) => {
      if (initialPositionRef.current === null) {
        return;
      }

      const [{ clientX }] = event.touches;
      displacementRef.current = getNormalizedValue(clientX) - initialPositionRef.current;

      const value = computeSlidingValue();

      setSlidingValue(value);

      const translation = (reverse ? 100 : -100) * (1 - value);
      drawerRef.current.style.transform = `translateX(${ translation }%)`;
      drawerRef.current.style.transition = 'unset';
    };

    const handleTouchEnd = () => {
      const value = computeSlidingValue();

      if (value < hysteresis) {
        open && onClosing && onClosing();
      } else {
        !open && onOpening && onOpening();
      }

      drawerRef.current.style.transform = '';
      drawerRef.current.style.transition = '';

      initialPositionRef.current = null;
      displacementRef.current = null;

      setSlidingValue(null);
    };

    window.addEventListener('touchstart', handleTouchStart, false);
    window.addEventListener('touchmove', handleTouchMove, false);
    window.addEventListener('touchend', handleTouchEnd, false);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart, false);
      window.removeEventListener('touchmove', handleTouchMove, false);
      window.removeEventListener('touchend', handleTouchEnd, false);
    };
  }, [docked, open, reverse, onOpening, onClosing]);

  useLayoutEffect(() => {
    if (!open || docked || !onClosing) {
      return;
    }

    const handleEscapeKey = ({ key }) => {
      key === 'Escape' && onClosing();
    };

    document.addEventListener('keydown', handleEscapeKey, false);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey, false);
    };
  }, [open, docked, onClosing]);

  const canDockIt = useLayoutMediaQuery(`${ dockWhen }`);

  if (dockWhen) {
    docked = docked || canDockIt;
  }

  useEffect(() => {
    onDockStateChange && onDockStateChange(docked);
  }, [docked]);

  const drawerClassName = useStyle(styles, 'rcx-drawer', {
    docked,
    open,
    reverse,
  }, className);

  return <>
    <div ref={drawerRef} className={drawerClassName} {...props}>
      {children}
    </div>
    {!docked && <DrawerBackdrop open={open || slidingValue} opacity={slidingValue} onClick={onClosing} />}
  </>;
}
