import React, { forwardRef } from 'react';

import { Box } from '../components';

export const createStyledComponent = (componentClassName, component = 'div') => {
  const StyledComponent = forwardRef(function StyledComponent(props, ref) {
    return <Box is={component} componentClassName={componentClassName} ref={ref} {...props} />;
  });

  StyledComponent.displayName = componentClassName;

  return StyledComponent;
};
