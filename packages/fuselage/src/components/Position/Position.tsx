import type { UsePositionOptions } from '@rocket.chat/fuselage-hooks';
import { usePosition } from '@rocket.chat/fuselage-hooks';
import type { RefObject, ReactElement } from 'react';
import { useRef, useMemo, cloneElement, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useTargetDocument } from '../../contexts';
import type { BoxProps } from '../Box';

export type PositionProps = {
  anchor: RefObject<Element>;
  children: ReactElement;
  margin?: number;
  placement?: UsePositionOptions['placement'];
} & Omit<BoxProps, 'children' | 'margin'>;

const Position = ({
  anchor,
  children,
  placement,
  margin,
  className: _className,
  ...props
}: PositionProps) => {
  const target = useRef(null);
  const { style: positionStyle, placement: positionPlacement } =
    usePosition(
      anchor,
      target,
      useMemo(() => ({ placement, margin }), [placement, margin]),
    ) || {};

  const style = useMemo(
    () => ({ position: 'fixed', ...positionStyle }),
    [positionStyle],
  );

  const { document: targetDocument } = useTargetDocument();

  const [portalContainer] = useState(() => {
    const prev = targetDocument.getElementById('position-container');
    if (prev) {
      return prev;
    }
    const element = targetDocument.createElement('div');

    element.id = 'position-container';

    targetDocument.body.appendChild(element);
    return element;
  });

  useEffect(
    () => () => {
      if (portalContainer.childNodes.length === 0) {
        targetDocument.body.removeChild(portalContainer);
      }
    },
    [portalContainer, targetDocument],
  );

  return createPortal(
    cloneElement(children, {
      ref: target,
      style,
      ...props,
      placement: positionPlacement,
    }),
    portalContainer,
  );
};

export default Position;
