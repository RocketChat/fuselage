import React, { useRef, ComponentProps } from 'react';
import { Box, ButtonGroup } from '@rocket.chat/fuselage';



const ImageManipulation = () => {
  const imageEle = useRef<typeof Box>(null);

  return (
    <Box
      {...props}
      display='flex'
      justifyContent='space-evenly'
      alignItems='center'
    >
    </Box>
  );
};

export default ImageManipulation;
