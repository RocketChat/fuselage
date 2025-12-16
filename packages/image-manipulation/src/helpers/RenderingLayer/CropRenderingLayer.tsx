import { Box } from '@rocket.chat/fuselage';
import { fabric } from 'fabric';
import { useState, useEffect, ComponentProps, FC } from 'react';

import { useManipulation } from '../../context/ManipulationContext';
import { ActionType } from '../../context/action';
import { PreviewCanvas } from '../index';

type CropRenderingLayerProps = ComponentProps<typeof Box>;

export const CropRenderingLayer: FC<CropRenderingLayerProps> = ({
  ...props
}) => {
  const { state, dispatch } = useManipulation();
  const [canvas, setCanvas] = useState<fabric.Canvas | null>();
  const [userClipPath, setUserClipPath] = useState<fabric.Rect>(
    {} as fabric.Rect
  );

  useEffect(() => {
    const { croppingLayerDimnesions, previewDimensions } = state.dimensions;
    const layerHeight = croppingLayerDimnesions.height;
    const layerWidth = croppingLayerDimnesions.width;
    const layer = new fabric.Rect({
      height: layerHeight,
      width: layerWidth,
      left: (previewDimensions.width * 0.1) / 2,
      top: (previewDimensions.height * 0.1) / 2,
      fill: 'rgb(178, 178, 178, 0.4)',
      transparentCorners: true,
      lockRotation: true,
      cornerColor: 'rgb(178, 178, 178, 0.8)',
      strokeWidth: 2,
      cornerStrokeColor: '#DC143C',
      borderColor: '#fdfdfd',
      borderDashArray: [5, 5],
      cornerStyle: 'circle',
      minScaleLimit: 0.3,
      lockScalingFlip: true,
    });
    canvas?.add(layer);
    canvas?.bringToFront(layer);
    // canvas?.on('object:modified', (options: any) => {
    //   const obj = options.target as any;
    //   const boundingRect = obj.getBoundingRect();
    //   if (
    //     boundingRect.left < 0 ||
    //     boundingRect.top < 0 ||
    //     boundingRect.left + boundingRect.width > canvas?.getWidth() ||
    //     boundingRect.top + boundingRect.height > canvas?.getHeight()
    //   ) {
    //     obj.top = undefined;
    //     obj.left = undefined;
    //     obj.scaleX = undefined;
    //     obj.scaleY = undefined;
    //     obj.setCoords();
    //   }
    // });
    let left1 = 0;
    let top1 = 0;
    let scale1x = 0;
    let scale1y = 0;
    let width1 = 0;
    let height1 = 0;

    canvas?.on('object:scaling', (e) => {
      const obj = e.target as any;
      obj.setCoords();
      const brNew = obj.getBoundingRect();

      if (
        brNew.width + brNew.left >= obj.canvas.width ||
        brNew.height + brNew.top >= obj.canvas.height ||
        brNew.left < 0 ||
        brNew.top < 0
      ) {
        obj.left = left1;
        obj.top = top1;
        obj.scaleX = scale1x;
        obj.scaleY = scale1y;
        obj.width = width1;
        obj.height = height1;
      } else {
        left1 = obj.left;
        top1 = obj.top;
        scale1x = obj.scaleX;
        scale1y = obj.scaleY;
        width1 = obj.width;
        height1 = obj.height;
      }
    });
    // canvas?.on('object:scaling', (e) => {
    //   var obj = e.target as any;
    //   obj.setCoords();
    //   var brNew = obj.getBoundingRect();
    //   if (
    //     brNew.width + brNew.left >= obj.canvas.width ||
    //     brNew.height + brNew.top >= obj.canvas.height ||
    //     brNew.left < 0 ||
    //     brNew.top < 0
    //   ) {
    //     console.log('bahar gaya if se');
    //     // obj.left = 0;
    //     // obj.right = 0;
    //     layer.width = 400;
    //     // obj.scale = 0.5;
    //     obj.setCoords();
    //   } else {
    //     // scale1x = obj.scaleX;
    //     // scale1y = obj.scaleY;
    //     // width1 = obj.width;
    //     // height1 = obj.height;
    //   }
    // });

    setUserClipPath(layer);
  }, [canvas]);

  const clipImage = (): void => {
    const newImgCrop = userClipPath.getBoundingRect();

    const layer = canvas?.getObjects()[1];
    canvas?.remove(layer || ({} as any));

    const imgUrl = canvas?.toDataURL({
      format: 'png',
      left: newImgCrop.left,
      top: newImgCrop.top,
      width: newImgCrop.width,
      height: newImgCrop.height,
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
  };

  useEffect(() => {
    if (state.actionSelected === 'crop') {
      clipImage();
    }
  }, [state.actionSelected]);

  return (
    <Box {...props}>
      {state.modifierSelected === 'crop' && (
        <PreviewCanvas setCanvas={setCanvas} />
      )}
    </Box>
  );
};
