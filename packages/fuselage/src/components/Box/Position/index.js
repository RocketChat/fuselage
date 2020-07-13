import React, {
  useRef,
  useMemo,
  useEffect,
} from 'react';
import { usePosition } from '@rocket.chat/fuselage-hooks';
import ReactDOM from 'react-dom';

import AnimatedVisibility from '../AnimatedVisibility';

const Position = ({ anchor, children, placement, margin, className, ...props }) => {
  const target = useRef();
  const style = usePosition(anchor.current, target.current, useMemo(() => ({ placement, margin }), [placement, margin]));

  const portalContainer = useMemo(() => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    return element;
  }, []);

  useEffect(() => () => document.body.removeChild(portalContainer), [portalContainer]);

  if (!style) {
    return null;
  }

  return ReactDOM.createPortal(
    React.cloneElement(children, {
      ref: target,
      style,
      ...props,
    }),
    portalContainer,
  );
};

export const PositionAnimated = ({ width, margin, placement, visible, children, ...props }) => (
  <AnimatedVisibility visibility={visible}><Position margin={margin} placement={placement} {...props}>{children}</Position></AnimatedVisibility>
);

export default Position;
