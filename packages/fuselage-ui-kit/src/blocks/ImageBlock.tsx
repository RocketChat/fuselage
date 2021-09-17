import { Box, Skeleton } from '@rocket.chat/fuselage';
import * as UiKit from '@rocket.chat/ui-kit';
import React, {
  ComponentProps,
  memo,
  ReactElement,
  useEffect,
  useState,
} from 'react';

import { useSurfaceType } from '../surfaces/SurfaceContext';
import { Image } from './ImageBlock.styles';

const maxSize = 360;

const fetchImageState = (img: HTMLImageElement) => {
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

type ImageBlockProps = {
  className?: ComponentProps<typeof Box>['className'];
  blockElement: UiKit.ImageBlock;
  parser: UiKit.SurfaceRenderer<ReactElement>;
};

const ImageBlock = ({
  className,
  blockElement,
  parser,
}: ImageBlockProps): ReactElement => {
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

    const handleLoad = () => {
      setState(fetchImageState(img));
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
            {parser.renderTextObject(
              blockElement.title,
              0,
              -1 as UiKit.BlockContext
            )}
          </Box>
        )}
        {loading ? (
          <Skeleton variant='rect' width={width} height={height} />
        ) : (
          <Image
            imageUrl={blockElement.imageUrl}
            width={width}
            height={height}
            aria-label={blockElement.altText}
          />
        )}
      </Box>
    </Box>
  );
};

export default memo(ImageBlock);
