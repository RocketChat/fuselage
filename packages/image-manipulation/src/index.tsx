import { Box } from '@rocket.chat/fuselage';
import { ComponentProps } from 'react';

import App from './components/App';
import ManipulationContextProvider from './context/manipulationContext';

type ImageManipulationProps = ComponentProps<typeof Box> & {
  imgSrc: string;
};

const ImageManipulation: ({
  imgSrc,
  ...props
}: ImageManipulationProps) => JSX.Element = ({
  imgSrc,
  ...props
}: ImageManipulationProps) => (
  <ManipulationContextProvider>
    <App imgSrc={imgSrc} {...props} />
  </ManipulationContextProvider>
);

export default ImageManipulation;
