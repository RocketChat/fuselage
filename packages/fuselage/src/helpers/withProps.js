import React from 'react';


export const withProps = (component, mapProps) =>
  React.forwardRef((props, ref) => React.createElement(component, mapProps({ ...props, ref })));
