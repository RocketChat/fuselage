import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useLayoutEffect,
} from 'react';
import ReactDOM from 'react-dom';

import { AnimatedVisibility } from '../AnimatedVisibility';

const top = (top) => ({ top });
const left = (left) => ({ left });
const right = (right) => ({ right });

function offset(el) {
  return el.getBoundingClientRect();
}

const getVertical = (anchorPosition, elementPosition, placement = 'bottom') => {
  switch (placement) {
  case 'top':
    return anchorPosition.top - elementPosition.height < 0 ? top(0) : top(anchorPosition.top - elementPosition.height);
  case 'center':
    return top(anchorPosition.top + anchorPosition.height / 2 - elementPosition.height / 2);
  case 'bottom':
  default:
    return anchorPosition.bottom + elementPosition.height > window.innerHeight ? top(window.innerHeight - elementPosition.height) : top(anchorPosition.bottom);
  }
};

const getHorizontal = (anchorPosition, elementPosition, placement = 'right') => {
  switch (placement) {
  case 'right':
    return anchorPosition.right + elementPosition.width > window.innerWidth ? right(0) : left(anchorPosition.right);
  case 'left':
    return anchorPosition.left - elementPosition.width > 0 ? left(anchorPosition.left - elementPosition.width) : left(0);
  case 'center':
    return left(anchorPosition.left + anchorPosition.width / 2 - elementPosition.width / 2 >= 0 ? anchorPosition.left + anchorPosition.width / 2 - elementPosition.width / 2 : 0);
  default:
    return left(anchorPosition.left);
  }
};

const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => { inThrottle = false; }, limit);
    }
  };
};

export const Position = ({ anchor, width = 'stretch', style, className, children, placement = 'bottom center' }) => {
  const [position, setPosition] = useState();
  const ref = useRef();

  const { offsetWidth } = anchor.current || {};

  useLayoutEffect(() => {
    if (!ref.current || !anchor.current) {
      return;
    }
    const [vertical, horizontal] = placement.split(' ');

    if (typeof ResizeObserver === 'undefined') {
      return;
    }
    const handlePosition = throttle(() => {
      const anchorPosition = offset(anchor.current);
      const elementPosition = offset(ref.current.parentElement);
      setPosition({
        ...width === 'stretch' && anchor.current && {
          width: offsetWidth,
        },
        ...getVertical(anchorPosition, elementPosition, vertical),
        ...getHorizontal(anchorPosition, {
          ...elementPosition,
          ...width === 'stretch' && anchor.current && {
            width: offsetWidth,
          } },
        horizontal),
      });
    }, 30);

    handlePosition();
    const resizeObserver = new ResizeObserver(handlePosition);

    window.addEventListener('scroll', handlePosition);
    window.addEventListener('resize', handlePosition);
    const { current } = anchor;

    resizeObserver.observe(current);

    return () => {
      window.removeEventListener('scroll', handlePosition);
      window.removeEventListener('resize', handlePosition);
      resizeObserver.unobserve(current);
    };
  }, [anchor.current, anchor.current, placement, offsetWidth]);

  const portalContainer = useMemo(() => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    return element;
  }, []);

  useEffect(() => () => document.body.removeChild(portalContainer), []);
  return ReactDOM.createPortal(
    React.cloneElement(children, {
      ref,
      style: { ...position, ...children.props.style, ...style },
      className: ['rcx-position', className, children.props.className].filter(Boolean).join(' '),
    }),
    portalContainer,
  );
};

export const PositionAnimated = ({ width, placement, visible, children, ...props }) => (
  <AnimatedVisibility visibility={visible}><Position placement={placement} width={width} {...props}>{children}</Position></AnimatedVisibility>
);
