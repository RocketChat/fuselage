import React, {
  useRef,
  useState,
  useEffect,
} from 'react';

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

export const Position = ({ anchor, width = 'stretch', style, className, children, placement = 'bottom center' }) => {
  const [position, setPosition] = useState();
  const ref = useRef();
  useEffect(() => {
    const [vertical, horizontal] = placement.split(' ');
    setPosition({
      ...width === 'stretch' && anchor.current && {
        width: anchor.current.offsetWidth,
      },
      ...getVertical(anchor, ref, vertical),
      ...getHorizontal(anchor, ref, horizontal),
    });

    const resizeObserver = new ResizeObserver(() => {
      setPosition({
        ...width === 'stretch' && anchor.current && {
          width: anchor.current.offsetWidth,
        },
        ...getVertical(anchor, ref, vertical),
        ...getHorizontal(anchor, ref, horizontal),
      });
    });

    const { current } = anchor;
    resizeObserver.observe(current);
    return () => resizeObserver.unobserve(current);
  }, []);

  return React.cloneElement(children, {
    style: { ...position, ...children.props.style, ...style },
    className: ['rcx-position', className, children.props.className].filter((e) => e).join(' '),
  });
};
