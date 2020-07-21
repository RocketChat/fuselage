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
  const { style: positionStyle, placement: positionPlacement } = usePosition(anchor, target, useMemo(() => ({ placement, margin }), [placement, margin])) || {};

  const style = useMemo(() => ({ position: 'fixed', ...positionStyle }), [positionStyle]);
  const portalContainer = useMemo(() => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    return element;
  }, []);

  useEffect(() => () => document.body.removeChild(portalContainer), [portalContainer]);

  return ReactDOM.createPortal(
    React.cloneElement(children, {
      ref: target,
      style,
      ...props,
      placement: positionPlacement,
    }),
    portalContainer,
  );
};

export const PositionAnimated = ({ width, margin, placement, visible, children, ...props }) => (
  <AnimatedVisibility visibility={visible}><Position margin={margin} placement={placement} {...props}>{children}</Position></AnimatedVisibility>
);

export default Position;
