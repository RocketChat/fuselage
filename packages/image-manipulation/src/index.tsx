import { Box } from '@rocket.chat/fuselage';
import { ComponentProps, FC } from 'react';

import App from './components';
import ManipulationContextProvider from './context/ManipulationContext';

type ImageManipulationProps = ComponentProps<typeof Box> & {
  imgSrc: string;
};

const ImageManipulation: FC<ImageManipulationProps> = ({
  imgSrc,
  ...props
}) => (
  <ManipulationContextProvider>
    <App imgSrc={imgSrc} {...props} />
  </ManipulationContextProvider>
);

export default ImageManipulation;
