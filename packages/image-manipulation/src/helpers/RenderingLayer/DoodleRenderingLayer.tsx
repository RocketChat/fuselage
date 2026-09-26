import { Box } from '@rocket.chat/fuselage';
import { useState, useEffect, ComponentProps, FC } from 'react';

import { PreviewCanvas } from '..';
import { useManipulation } from '../../context/ManipulationContext';
import { ActionType } from '../../context/action';

type DoodleRenderingLayerProps = ComponentProps<typeof Box>;

export const DoodleRenderingLayer: FC<DoodleRenderingLayerProps> = ({
  ...props
}) => {
  const { state, dispatch } = useManipulation();
  const [strokeWidth, setstrokeWidth] = useState(1);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>();
  const [removedObjects, setremovedObjects] = useState<
    Array<fabric.Object> | []
  >([]);

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
    if (canvas)
      switch (state.functionSelected?.split(' ')[0]) {
        case 'color':
          canvas.freeDrawingBrush.color = state.functionSelected?.split(' ')[1];
          break;
        case 'undo':
          const objects = canvas?.getObjects();
          const toRemove = objects.pop() as fabric.Object;
          if (objects.length > 0) {
            canvas?.remove(toRemove as fabric.Object);
            setremovedObjects([...removedObjects, toRemove]);
          }
          break;
        case 'redo':
          if (removedObjects.length > 0) {
            const remove = removedObjects.pop();
            canvas?.add(remove as fabric.Object);
          }
          break;
        case 'size':
          canvas?.setActiveObject(canvas?.getObjects()[1]);
          switch (state.functionSelected?.split(' ')[1]) {
            case 'inc':
              setstrokeWidth(strokeWidth + 1);
              canvas.freeDrawingBrush.width = strokeWidth + 1;
              break;
            case 'dec':
              if (strokeWidth > 1) {
                setstrokeWidth(strokeWidth - 1);
                canvas.freeDrawingBrush.width = strokeWidth - 1;
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
