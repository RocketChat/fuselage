import React, {
  RefObject,
  useEffect,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';
import { Box } from '@rocket.chat/fuselage';
import { Canvas, Image } from 'fabric/fabric-impl';
import { fabric } from 'fabric';
import { ManipulationContext } from '../context/manipulationContext';

type InitCanvasProps = {
  setCanvas: Dispatch<SetStateAction<Canvas | null | undefined>>;
  properties: any;
};

export const InitCanvas = ({ setCanvas, properties }: InitCanvasProps) => {
  const { state } = useContext(ManipulationContext);
  const { width, height } = state.dimensions?.previewDimensions;

  useEffect(() => {
    console.log('Initializing Canvas', { width, height });

    const canvas = new fabric.Canvas('canvas', {
      height,
      width,
    });
    const image = new (fabric.Image as any).fromURL(
      state.imageSrc?.current,
      (item: Image) => {
        item.scale(1);
        item.selectable = false;
        // item.scaleToWidth(canvas?.width!);

        item.set(properties);

        canvas?.add(item);
        canvas?.sendToBack(item);
      }
    );

    setCanvas(canvas);
  }, [properties]);

  return <Box is='canvas' id='canvas'></Box>;
};
