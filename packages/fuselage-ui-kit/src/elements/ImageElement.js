import { Box } from '@rocket.chat/fuselage';
import { BlockContext } from '@rocket.chat/ui-kit';
import React from 'react';

const ThumbContext = (args) => <Thumb size={20} {...args} />;

const Thumb = ({ element, size = 88 }) => (
  <Box
    is='div'
    style={{
      boxShadow: '0 0 0px 1px #cccccc61',
      borderRadius: '4px',
      marginLeft: '4px',
      overflow: 'hidden',
      width: `${size}px`,
      height: `${size}px`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      backgroundSize: 'cover',
      backgroundImage: `url(${element.imageUrl})`,
    }}
  />
);

const ImageElement = ({ element, context }) => {
  switch (context) {
    case BlockContext.SECTION:
      return <Thumb element={element} />;

    case BlockContext.CONTEXT:
      return <ThumbContext element={element} />;

    default:
      return null;
  }
};

export default ImageElement;
