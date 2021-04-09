import React, { useContext, useLayoutEffect, forwardRef } from 'react';

import DropdownContext from './DropdownContext';

const PortalTarget = forwardRef((props, ref) => {
  const { updateItemOrder } = useContext(DropdownContext);

  useLayoutEffect(() => {
    if (ref && ref.current) {
      const newOrder = [
        ...ref.current.querySelectorAll('[dropdown-id]'),
      ].map((item) => item.getAttribute('dropdown-id'));
      updateItemOrder(newOrder);
    }
  }, [updateItemOrder, ref]);

  return <div ref={ref} {...props} />;
});

export default PortalTarget;
