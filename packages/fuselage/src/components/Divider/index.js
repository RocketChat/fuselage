import React from 'react';

import { Box } from '../Box';

export function Divider({ children, ...props }) {
  if (children) {
    return (
      <Box role='separator' aria-label={children} rcx-divider {...props} />
    );
  }
  return <Box is='hr' role='separator' rcx-divider {...props} />;
}
