import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
} from 'react';
import ReactDOM from 'react-dom';

import { AnimatedWrapper } from '../Animated';

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
    return left(anchorPosition.left - elementPosition.width > 0 ? anchorPosition.left + anchorPosition.width / 2 - elementPosition.width / 2 : 0);
  default:
    return left(anchorPosition.left);
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
      const anchorPosition = offset(anchor.current);
      const elementPosition = offset(ref.current.parentElement);
      setPosition({
        ...width === 'stretch' && anchor.current && {
          width: offsetWidth,
        },
        ...getVertical(anchorPosition, elementPosition, vertical),
        ...getHorizontal(anchorPosition, elementPosition, horizontal),
      });
    }, 100);

    const resizeObserver = new ResizeObserver(handlePosition);

    window.addEventListener('scroll', handlePosition);
    window.addEventListener('resize', handlePosition);
    const { current } = anchor;

    resizeObserver.observe(current);

    handlePosition();
    return () => {
      window.removeEventListener('scroll', handlePosition);
      window.removeEventListener('resize', handlePosition);
      resizeObserver.unobserve(current);
    };
  }, [placement, offsetWidth]);

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
  <AnimatedWrapper visible={visible}><Position placement={placement} width={width} {...props}>{children}</Position></AnimatedWrapper>
);
