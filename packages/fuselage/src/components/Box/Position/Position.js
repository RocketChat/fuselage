import { usePosition } from '@rocket.chat/fuselage-hooks';
import { useRef, useMemo, useEffect, cloneElement } from 'react';
import { createPortal } from 'react-dom';

const Position = ({
  anchor,
  children,
  placement,
  margin,
  className,
  ...props
}) => {
  const target = useRef();
  const { style: positionStyle, placement: positionPlacement } =
    usePosition(
      anchor,
      target,
      useMemo(() => ({ placement, margin }), [placement, margin])
    ) || {};

  const style = useMemo(
    () => ({ position: 'fixed', ...positionStyle }),
    [positionStyle]
  );
  const portalContainer = useMemo(() => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    return element;
  }, []);

  useEffect(
    () => () => document.body.removeChild(portalContainer),
    [portalContainer]
  );

  return createPortal(
    cloneElement(children, {
      ref: target,
      style,
      ...props,
      placement: positionPlacement,
    }),
    portalContainer
  );
};

export default Position;
