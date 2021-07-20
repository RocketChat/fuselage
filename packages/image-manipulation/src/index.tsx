import App from './App';
import { ComponentProps } from 'react';
import { Box } from '@rocket.chat/fuselage';
import ManipulationContextProvider from './context/manipulationContext';

type ImageManipulationProps = ComponentProps<typeof Box> & {
  imgSrc: string;
};

const ImageManipulation = ({ imgSrc, ...props }: ImageManipulationProps) => {
  return (
    <ManipulationContextProvider>
      <App imgSrc={imgSrc} {...props} />
    </ManipulationContextProvider>
  );
};

export default ImageManipulation;
