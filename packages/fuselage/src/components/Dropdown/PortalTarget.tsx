import React, { useContext, useLayoutEffect, forwardRef, ForwardRefExoticComponent, ComponentType, RefObject } from 'react';

import DropdownContext from './DropdownContext';

const PortalTarget = forwardRef<HTMLDivElement, ComponentType<HTMLDivElement>>((props, ref) => {
  const { updateItemOrder } = useContext(DropdownContext);

  useLayoutEffect(() => {
    if (ref && typeof ref === 'object' && ref.current) {
      const newOrder: string[] = [];
      const nodeList = ref.current.querySelectorAll('[dropdown-id]');
      nodeList.forEach((node) => newOrder.push(node.getAttribute('dropdown-id') as string));
      updateItemOrder(newOrder);
    }
  }, [updateItemOrder, ref]);

  return <div ref={ref} {...props} />;
});

export default PortalTarget;
