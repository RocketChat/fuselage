import { Box, ButtonGroup } from '@rocket.chat/fuselage';
import React, { useRef, ComponentProps } from 'react';

import { Crop, Text, Doodle } from './components';
import { Preview } from './components/Preview';

type ImageManipulationProps = ComponentProps<typeof Box> & {
  imgSrc: string;
};

const ImageManipulation = ({ imgSrc, ...props }: ImageManipulationProps) => {
  const imageEle = useRef<typeof Box>(null);

  return (
    <Box
      {...props}
      display='flex'
      justifyContent='space-evenly'
      alignItems='center'
    >
      <Preview imgSrc={imgSrc} ref={imageEle} maxWidth='90%' maxHeight='90%' />
      <ButtonGroup alignSelf='flex-start'>
        <Crop />
        <Doodle />
        <Text />
      </ButtonGroup>
    </Box>
  );
};

export default ImageManipulation;
