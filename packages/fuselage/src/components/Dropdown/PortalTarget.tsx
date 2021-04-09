import React, { useContext, useLayoutEffect, forwardRef, ForwardRefExoticComponent, ComponentType, RefObject } from 'react';

import DropdownContext from './DropdownContext';

const PortalTarget = forwardRef<HTMLDivElement, ComponentType<HTMLDivElement>>((props, ref) => {
  const { updateItemOrder } = useContext(DropdownContext);

  useLayoutEffect(() => {
    if (ref && typeof ref === 'object' && ref.current) {
      const newOrder = [
        ...ref.current.querySelectorAll('[dropdown-id]'),
      ].map((item) => item.getAttribute('dropdown-id'));
      updateItemOrder(newOrder);
    }
  }, [updateItemOrder, ref]);

  return <div ref={ref} {...props} />;
});

export default PortalTarget;
