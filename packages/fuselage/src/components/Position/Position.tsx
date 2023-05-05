import type { UsePositionOptions } from '@rocket.chat/fuselage-hooks';
import { usePosition } from '@rocket.chat/fuselage-hooks';
import type {
  RefObject,
  ComponentProps,
  ReactPortal,
  ReactElement,
} from 'react';
import { useRef, useMemo, cloneElement, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import type Box from '../Box';

type PositionProps = {
  anchor: RefObject<Element>;
  children: ReactElement;
  margin?: number;
  placement?: UsePositionOptions['placement'];
} & Omit<ComponentProps<typeof Box>, 'children' | 'margin'>;

const Position = ({
  anchor,
  children,
  placement,
  margin,
  className: _className,
  ...props
}: PositionProps): ReactPortal => {
  const target = useRef(null);
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
  const [portalContainer] = useState(() => {
    const prev = document.getElementById('position-container');
    if (prev) {
      return prev;
    }
    const element = document.createElement('div');

    element.id = 'position-container';

    document.body.appendChild(element);
    return element;
  });

  useEffect(
    () => () => {
      if (portalContainer.childNodes.length === 0) {
        document.body.removeChild(portalContainer);
      }
    },
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
