import React from 'react';

import Box from '../Box/Box';

const CardControls = ({ ...props }) => (
  <Box
    display='flex'
    flexGrow={1}
    alignItems='center'
    rcx-card__controls
    {...props}
  />
);

export default CardControls;
