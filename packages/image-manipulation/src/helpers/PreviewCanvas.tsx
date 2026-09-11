import { Box } from '@rocket.chat/fuselage';
import { fabric } from 'fabric';
import { useEffect, Dispatch, SetStateAction, FC } from 'react';

import { useManipulation } from '../context/ManipulationContext';

type PreviewCanvasProps = {
  setCanvas: Dispatch<SetStateAction<fabric.Canvas | null | undefined>>;
};

export const PreviewCanvas: FC<PreviewCanvasProps> = ({
  setCanvas,
}: PreviewCanvasProps) => {
  const { state } = useManipulation();
  const { width, height } = state.dimensions?.cropDimensions;
  const { modifierSelected } = state;

  useEffect(() => {
    const canvas = new fabric.Canvas('canvas', {
      height,
      width,
      isDrawingMode: modifierSelected === 'doodle',
    });
    // snippet to hide the rotation controls
    fabric.Object.prototype.controls.mtr = new fabric.Control({
      visible: false,
    });
    // eslint-disable-next-line new-cap
    new (fabric.Image as any).fromURL(
      state.imageSrc?.current,
      (item: fabric.Image) => {
        item.selectable = false;
        canvas?.add(item);
        canvas?.width && item.scaleToWidth(canvas.width);
        canvas?.sendToBack(item);
      }
    );
    canvas?.on('object:moving', (e) => {
      const obj = e.target as any;
      // if object is too big ignore
      if (obj.height > obj.canvas.height || obj?.width > obj.canvas.width) {
        return;
      }
      obj.setCoords();
      // top-left  corner
      if (obj.getBoundingRect().top < 0 || obj.getBoundingRect().left < 0) {
        obj.top = Math.max(obj.top, obj.top - obj.getBoundingRect().top);
        obj.left = Math.max(obj.left, obj.left - obj.getBoundingRect().left);
      }
      // bot-right corner
      if (
        obj.getBoundingRect().top + obj.getBoundingRect().height >
          obj.canvas.height ||
        obj.getBoundingRect().left + obj.getBoundingRect().width >
          obj.canvas.width
      ) {
        obj.top = Math.min(
          obj.top,
          obj.canvas.height -
            obj.getBoundingRect().height +
            obj.top -
            obj.getBoundingRect().top
        );
        obj.left = Math.min(
          obj.left,
          obj.canvas.width -
            obj.getBoundingRect().width +
            obj.left -
            obj.getBoundingRect().left
        );
      }
    });

    setCanvas(canvas);
  }, []);

  return <Box is='canvas' id='canvas'></Box>;
};
