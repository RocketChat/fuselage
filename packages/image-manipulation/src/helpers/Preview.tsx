import { Box } from '@rocket.chat/fuselage';
import { useResizeObserver } from '@rocket.chat/fuselage-hooks';
import React, { useEffect, useContext, ComponentProps, FC } from 'react';

import { ActionType } from '../context/action';
import { ManipulationContext } from '../context/manipulationContext';
import { getDimensions } from './getDimensions';

type PreviewProps = ComponentProps<typeof Box>;

export const Preview: FC<PreviewProps> = ({ ...props }) => {
  const { state, dispatch } = useContext(ManipulationContext);
  const {
    imageSrc,
    dimensions: {
      parentDimensions,
      originalImageDimensions,
      cropDimensions,
      previewDimensions,
    },
  } = state;

  const {
    ref: resizeRef,
    contentBoxSize: { inlineSize, blockSize },
  } = useResizeObserver();

  // console.log(resizeRef, inlineSize, blockSize);

  useEffect(() => {
    const limitWidth = parentDimensions.width * 0.9;
    const limitHeight = parentDimensions.height * 0.9;
    const dimensions = getDimensions(
      originalImageDimensions?.width,
      originalImageDimensions?.height,
      {
        width: limitWidth,
        height: limitHeight,
      }
    );
    // console.log({
    //   width: limitWidth,
    //   height: limitHeight,
    // });
    dispatch({
      type: ActionType.SET_PREVIEW_DIMENSIONS,
      payload: dimensions,
    });
  }, [
    imageSrc.current,
    parentDimensions,
    originalImageDimensions,
    inlineSize,
    blockSize,
  ]);

  useEffect(() => {
    dispatch({
      type: ActionType.SET_IMAGE_REF,
      payload: resizeRef,
    });
  }, []);
  useEffect(() => {
    dispatch({
      type: ActionType.SET_CROP_DIMENSIONS,
      payload: { width: inlineSize, height: blockSize },
    });
  }, [inlineSize, blockSize]);

  console.log({ cropDimensions, previewDimensions });

  return (
    <>
      {cropDimensions.height > cropDimensions.width ? (
        <Box
          is='img'
          src={imageSrc.current}
          ref={resizeRef}
          height={previewDimensions.height}
          {...props}
        />
      ) : (
        <Box
          is='img'
          src={imageSrc.current}
          ref={resizeRef}
          width={previewDimensions.width}
          {...props}
        />
      )}
    </>
  );
};
