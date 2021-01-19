import { Box, Margins } from '@rocket.chat/fuselage';
import React, { useEffect, useState } from 'react';

const maxSize = 360;
const Media = ({ element }) => {
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
  }, [element.imageUrl]);

  if (loading) {
    return 'loading';
  }

  return (
    <div
      aria-label={element.altText}
      style={{
        overflow: 'hidden',
        boxShadow: '0 0 0px 1px #cccccc61',
        width: `${width}px`,
        height: `${height}px`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        backgroundImage: `url(${element.imageUrl})`,
      }}
    />
  );
};

const ImageBlock = ({ element, surface }) => (
  <Margins blockEnd='x16'>
    <Box
      display='flex'
      justifyContent={
        surface === 'banner' || surface === 'message' ? 'start' : 'center'
      }
    >
      <Media element={element} />
    </Box>
  </Margins>
);

export default ImageBlock;
