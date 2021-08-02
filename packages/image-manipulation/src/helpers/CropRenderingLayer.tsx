import { Box } from '@rocket.chat/fuselage';
import { fabric } from 'fabric';
// eslint-disable-next-line import/no-unresolved
import { Canvas, Rect } from 'fabric/fabric-impl';
import { useState, useEffect, ComponentProps, useContext, FC } from 'react';

import { ActionType } from '../context/action';
import { ManipulationContext } from '../context/manipulationContext';
import { PreviewCanvas } from './index';

type CropRenderingLayerProps = ComponentProps<typeof Box>;

export const CropRenderingLayer: FC = ({
  ...props
}: CropRenderingLayerProps) => {
  const { state, dispatch } = useContext(ManipulationContext);
  const [canvas, setCanvas] = useState<Canvas | null>();
  const [userClipPath, setUserClipPath] = useState<Rect>({} as Rect);

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
    });
    canvas?.add(layer);
    canvas?.bringToFront(layer);

    setUserClipPath(layer);
    console.log(userClipPath);
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
