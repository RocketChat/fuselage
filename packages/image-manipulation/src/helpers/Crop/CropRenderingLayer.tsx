import {
  useState,
  useEffect,
  ComponentProps,
  useContext,
  RefObject,
} from 'react';
import { Box } from '@rocket.chat/fuselage';
import { Canvas, Rect } from 'fabric/fabric-impl';
import { fabric } from 'fabric';
import { InitCanvas } from '../index';
import { ManipulationContext } from '../../context/manipulationContext';
import { Check } from '../../components';

type CropRenderingLayerProps = ComponentProps<typeof Box>;

export const CropRenderingLayer = ({ ...props }: CropRenderingLayerProps) => {
  const { state, dispatch } = useContext(ManipulationContext);
  const [canvas, setCanvas] = useState<null | Canvas>();
  const [userClipPath, setUserClipPath] = useState<null | Rect>();
  console.log(state);
  const [properties, setproperties] = useState({});

  useEffect(() => {
    // console.log('RENDERING LAYER');
    const { croppingLayerDimnesions, previewDimensions } = state.dimensions;

    let layerHeight = croppingLayerDimnesions.height;
    let layerWidth = croppingLayerDimnesions.width;
    const layer = new fabric.Rect({
      height: layerHeight,
      width: layerWidth,
      left: (previewDimensions.width * 0.1) / 2,
      top: (previewDimensions.height * 0.1) / 2,
      fill: 'rgb(178, 178, 178, 0.4)',
      transparentCorners: true,
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
    // console.log(userClipPath);
  }, [canvas]);

  const clipImage = (): void => {
    const newImgCrop = userClipPath!.getBoundingRect();
    // canvas.setWidth(newImgCrop.width);
    // canvas.setHeight(newImgCrop.height);

    console.log({
      cropX: newImgCrop.left,
      cropY: newImgCrop.top,
      width: newImgCrop.width,
      height: newImgCrop.height,
    });
    setproperties({
      cropX: newImgCrop.left,
      cropY: newImgCrop.top,
      width: newImgCrop.width,
      height: newImgCrop.height,
    });
    // const { width, height } = state.dimensions?.previewDimensions;

    // const canvas = new fabric.Canvas('canvas', {
    //   width: newImgCrop.width,
    //   height: newImgCrop.height,
    // });
    // new (fabric.Image as any).fromURL(state.imageSrc.current, (item: Image) => {
    //   item.scale(1);
    //   item.selectable = false;
    //   item.cropX = newImgCrop.left;
    //   item.cropY = newImgCrop.top;
    //   item.width = newImgCrop.width;
    //   item.height = newImgCrop.height;
    //   canvas?.add(item);
    //   canvas?.sendToBack(item);
    // });

    // const dataURL = canvas.toDataURL({
    //   format: `image/jpeg`,
    //   top: 0,
    //   left: 0,
    //   width: canvas.width,
    //   height: canvas.height,
    //   multiplier: 1,
    // });
    // console.log(dataURL);
    // canvas.clear();
  };

  return (
    <Box {...props}>
      <Check onClick={clipImage} />
      <InitCanvas properties={properties} setCanvas={setCanvas} />
    </Box>
  );
};
