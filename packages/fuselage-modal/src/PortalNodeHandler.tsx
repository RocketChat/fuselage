import type { ReactElement, CSSProperties } from 'react';
import { useRef, useEffect, useCallback } from 'react';

type PortalNodeHandlerProps = {
  node: HTMLDivElement;
  style?: CSSProperties;
};

const PortalNodeHandler = ({
  node,
  style,
}: PortalNodeHandlerProps): ReactElement => {
  const ref = useRef<any>(null);

  const callbackRef = useCallback(
    (div) => {
      div?.appendChild(node);
      if (ref.current) {
        return;
      }
      ref.current = div;
    },
    [node]
  );

  useEffect(() => {
    ref?.current?.appendChild(node);
    () => node.remove();
  }, [node]);

  return <div style={style} ref={callbackRef} />;
};

export default PortalNodeHandler;
