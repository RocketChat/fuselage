import { Box } from '@rocket.chat/fuselage';
import { fabric } from 'fabric';
// eslint-disable-next-line import/no-unresolved
import { Canvas } from 'fabric/fabric-impl';
import { useState, useEffect, ComponentProps, FC, useContext } from 'react';

import { PreviewCanvas } from '.';
import { ActionType } from '../context/action';
import { ManipulationContext } from '../context/manipulationContext';

type TextRenderingLayerProps = ComponentProps<typeof Box>;

export const DoodleRenderingLayer: FC = ({
  ...props
}: TextRenderingLayerProps) => {
  const { state, dispatch } = useContext(ManipulationContext);
  const [strokeWidth, setstrokeWidth] = useState(1);
  const [canvas, setCanvas] = useState<Canvas | null>();

  useEffect(() => {
    if (state.actionSelected === 'doodle') {
      const imgUrl = canvas?.toDataURL({
        format: 'png',
      });
      dispatch({
        type: ActionType.SET_IMAGE_SRC,
        payload: {
          current: imgUrl || '',
          original: state.imageSrc.current,
        },
      });
      dispatch({
        type: ActionType.SET_ACTION_SELECTED,
        payload: null,
      });
      dispatch({
        type: ActionType.SET_MODIFIER,
        payload: null,
      });
    }
  }, [state.actionSelected]);

  useEffect(() => {
    switch (state.functionSelected?.split(' ')[0]) {
      case 'color':
        canvas!.freeDrawingBrush.color = state.functionSelected?.split(' ')[1];
        break;
      case 'size':
        canvas?.setActiveObject(canvas?.getObjects()[1]);
        switch (state.functionSelected?.split(' ')[1]) {
          case 'inc':
            setstrokeWidth(strokeWidth + 1);
            canvas!.freeDrawingBrush.width = strokeWidth + 1;
            break;
          case 'dec':
            if (strokeWidth > 0) {
              setstrokeWidth(strokeWidth - 1);
              canvas!.freeDrawingBrush.width = strokeWidth - 1;
            }
            break;
        }
    }
  }, [state]);

  return (
    <Box {...props}>
      <PreviewCanvas setCanvas={setCanvas} />
    </Box>
  );
};
