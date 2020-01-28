import React, {
  useState,
  useEffect,
} from 'react';
import {
  Box,
  Flex,
} from '@rocket.chat/fuselage';
import {
  BLOCK_CONTEXT,
} from '@rocket.chat/ui-kit';

import { Block } from './Block';


const ThumbContext = (args) => <Thumb size={20} {...args} />;

const Thumb = ({ element, size = 88 }) => (
  <Box is='div'
    style={{
      boxShadow: '0 0 0px 1px #cccccc61',
      borderRadius: '4px',
      marginLeft: '4px',
      overflow: 'hidden',
      width: `${ size }px`,
      height: `${ size }px`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      backgroundSize: 'cover',
      backgroundImage: `url(${ element.imageUrl })`,
    }}
  />
);

const maxSize = 360;
export const Media = ({ element }) => {
  const [{ loading, width, height }, setState] = useState({
    loading: true,
    width: maxSize,
  });
  useEffect(() => {
    const img = document.createElement('img');
    img.addEventListener('load', (e) => {
      const { naturalWidth, naturalHeight } = e.target;

      if (naturalWidth > naturalHeight) {
        const width = Math.min(naturalWidth, maxSize);
        const aspect = width / naturalWidth;
        return setState({
          loading: false,
          width,
          height: naturalHeight * aspect,
        });
      }
      const height = Math.min(naturalHeight, maxSize);
      const aspect = height / naturalHeight;
      return setState({
        loading: false,
        width: naturalWidth * aspect,
        height,
      });
    });
    img.src = element.imageUrl;
  }, []);

  if (loading) {
    return 'loading';
  }

  return (
    <div
      aria-label={element.altText}
      style={{
        overflow: 'hidden',
        boxShadow: '0 0 0px 1px #cccccc61',
        width: `${ width }px`,
        height: `${ height }px`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        backgroundImage: `url(${ element.imageUrl })`,
      }}
    />
  );
};

const genericImage = (element, context) => {
  switch (context) {
  case BLOCK_CONTEXT.SECTION:
    return <Thumb element={element} />;
  case BLOCK_CONTEXT.CONTEXT:
    return <ThumbContext element={element}/>;
  }
};

export const ModalImage = ({ element, context }) => genericImage(element, context) || <Block><Flex.Container justifyContent='center'><Box><Media element={element}/></Box></Flex.Container></Block>;

export const MessageImage = ({ element, context }) => genericImage(element, context) || <Block><Flex.Container justifyContent='start'><Box><Media element={element}/></Box></Flex.Container></Block>;
