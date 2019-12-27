import React, {
  useRef,
  useState,
  useEffect,
} from 'react';

import { AnimatedWrapper } from '../Animated';

const top = (top) => ({ top });
const left = (left) => ({ left });

const getVertical = (anchor, element, placement = 'bottom') => {
  switch (placement) {
  case 'top':
    return top(anchor.current.offsetTop - element.current.offsetHeight);
  case 'center':
    return top((anchor.current.offsetTop - element.current.offsetHeight) / 2);
  case 'bottom':
  default:
    return top(anchor.current.offsetTop + anchor.current.offsetHeight);
  }
};

const getHorizontal = (anchor, element, placement = 'right') => {
  switch (placement) {
  case 'right':
    return left(anchor.current.offsetLeft + anchor.current.offsetWidth);
  case 'left':
    return left(anchor.current.offsetLeft - element.current.offsetWidth);
  case 'center':
  default:
    return left(anchor.current.offsetTop);
  }
};

function debounce(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function() {
      timeout = null;
      if (!immediate) { func.apply(context, args); }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) { func.apply(context, args); }
  };
}

export const Position = ({ anchor, width = 'stretch', style, className, children, placement = 'bottom center' }) => {
  const [position, setPosition] = useState();
  const ref = useRef();

  const { offsetWidth } = anchor.current || {};
  useEffect(() => {
    const [vertical, horizontal] = placement.split(' ');

    if (typeof ResizeObserver === 'undefined') {
      return;
    }

    const handlePosition = debounce(() => {
      setPosition({
        ...width === 'stretch' && anchor.current && {
          width: offsetWidth,
        },
        ...getVertical(anchor, ref, vertical),
        ...getHorizontal(anchor, ref, horizontal),
      });
    }, 100);

    const resizeObserver = new ResizeObserver(handlePosition);

    document.addEventListener('scroll', handlePosition);
    document.addEventListener('resize', handlePosition);
    const { current } = anchor;

    resizeObserver.observe(current);

    return () => {
      document.removeEventListener('scroll', handlePosition);
      document.removeEventListener('resize', handlePosition);
      resizeObserver.unobserve(current);
    };
  }, [placement, offsetWidth]);

  return React.cloneElement(children, {
    style: { ...position, ...children.props.style, ...style },
    className: ['rcx-position', className, children.props.className].filter(Boolean).join(' '),
  });
};

export const PositionAnimated = ({ visible, children, ...props }) => (
  <AnimatedWrapper visible={visible}><Position {...props}>{children}</Position></AnimatedWrapper>
);
