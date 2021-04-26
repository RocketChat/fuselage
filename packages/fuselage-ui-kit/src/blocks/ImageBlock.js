import { Box, Skeleton } from '@rocket.chat/fuselage';
import React, { memo, useEffect, useMemo, useState } from 'react';

import { useSurfaceType } from '../surfaces/SurfaceContext';

const maxSize = 360;

const fetchImageState = (img) => {
  if (!img.complete) {
    return {
      loading: true,
      width: maxSize,
      height: (maxSize * 9) / 21,
    };
  }

  const { naturalWidth, naturalHeight } = img;

  const scaleRatio =
    naturalWidth > naturalHeight
      ? Math.min(naturalWidth, maxSize) / naturalWidth
      : Math.min(naturalHeight, maxSize) / naturalHeight;

  return {
    loading: false,
    width: naturalWidth * scaleRatio,
    height: naturalHeight * scaleRatio,
  };
};

const ImageBlock = ({ className, blockElement, parser }) => {
  const surface = useSurfaceType();

  const alignment =
    surface === 'banner' || surface === 'message' ? 'flex-start' : 'center';

  const [{ loading, width, height }, setState] = useState(() => {
    const img = document.createElement('img');
    img.src = blockElement.imageUrl;
    return fetchImageState(img);
  });

  useEffect(() => {
    const img = document.createElement('img');

    const handleLoad = (e) => {
      setState(fetchImageState(e.target));
    };

    img.addEventListener('load', handleLoad);
    img.src = blockElement.imageUrl;

    if (img.complete) {
      img.removeEventListener('load', handleLoad);
      setState(fetchImageState(img));
    }

    return () => {
      img.removeEventListener('load', handleLoad);
    };
  }, [blockElement.imageUrl]);

  const style = useMemo(
    () => ({
      boxShadow: '0 0 0px 1px rgba(204, 204, 204, 38%)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      backgroundSize: 'cover',
      backgroundColor: 'rgba(204, 204, 204, 38%)',
      backgroundImage: `url(${blockElement.imageUrl})`,
    }),
    [blockElement.imageUrl]
  );

  return (
    <Box
      className={className}
      display='flex'
      flexDirection='column'
      flexWrap='nowrap'
      alignItems={alignment}
    >
      <Box overflow='hidden' width={width}>
        {blockElement.title && (
          <Box fontScale='c1' color='info' withTruncatedText marginBlockEnd={4}>
            {parser.plainText(blockElement.title, -1, 0)}
          </Box>
        )}
        {loading ? (
          <Skeleton variant='rect' width={width} height={height} />
        ) : (
          <Box
            is='div'
            overflow='hidden'
            width={width}
            height={height}
            style={style}
            aria-label={blockElement.altText}
          />
        )}
      </Box>
    </Box>
  );
};

export default memo(ImageBlock);
