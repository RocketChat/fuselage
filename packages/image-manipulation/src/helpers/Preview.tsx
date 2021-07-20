import { useEffect, forwardRef, ComponentProps, useContext } from 'react';
import { getDimensions } from '.';
import { Box } from '@rocket.chat/fuselage';
import { ActionType } from '../context/action';
import { ManipulationContext } from '../context/manipulationContext';

type PreviewProps = ComponentProps<typeof Box> & {
  imgSrc: string;
};

export const Preview = forwardRef<typeof Box, PreviewProps>(
  ({ imgSrc, ...props }, ref) => {
    const { state, dispatch } = useContext(ManipulationContext);

    const {
      dimensions: {
        parentDimensions,
        originalImageDimensions,
        previewDimensions,
      },
    } = state;

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
      dispatch({
        type: ActionType.SET_PREVIEW_DIMENSIONS,
        payload: dimensions,
      });
    }, [imgSrc, parentDimensions, originalImageDimensions]);

    // console.log(state);

    return (
      <Box is='img' src={imgSrc} ref={ref} {...previewDimensions} {...props} />
    );
  }
);
