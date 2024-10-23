import { Box } from '@rocket.chat/fuselage';
import { fabric } from 'fabric';
import { useState, useEffect, ComponentProps, FC } from 'react';

import { PreviewCanvas } from '..';
import { useManipulation } from '../../context/ManipulationContext';
import { ActionType } from '../../context/action';

type TextRenderingLayerProps = ComponentProps<typeof Box>;

export const TextRenderingLayer: FC<TextRenderingLayerProps> = ({
  ...props
}) => {
  const { state, dispatch } = useManipulation();

  const [canvas, setCanvas] = useState<fabric.Canvas | null>();
  const [bold, setBold] = useState('bold');
  const [italic, setItalic] = useState('italic');
  const [underline, setUnderline] = useState('true');
  const [fontSize, setfontSize] = useState(30);

  useEffect(() => {
    switch (state.functionSelected?.split(' ')[0]) {
      case 'bold':
        canvas?.setActiveObject(canvas?.getObjects()[1]);
        handleFormatting('fontWeight' as keyof fabric.Object, bold);
        setBold((prevState) => (prevState === '' ? 'bold' : ''));
        break;
      case 'italic':
        canvas?.setActiveObject(canvas?.getObjects()[1]);
        handleFormatting('fontStyle' as keyof fabric.Object, italic);
        setItalic((prevState) => (prevState === '' ? 'italic' : ''));
        break;
      case 'underline':
        canvas?.setActiveObject(canvas?.getObjects()[1]);
        handleFormatting('underline' as keyof fabric.Object, underline);
        setUnderline((prevState) => (prevState === '' ? 'true' : ''));
        break;
      case 'color':
        canvas?.setActiveObject(canvas?.getObjects()[1]);
        canvas
          ?.getActiveObject()
          ?.set(
            'fill' as keyof fabric.Object,
            state.functionSelected?.split(' ')[1]
          );
        canvas?.renderAll();
        break;
      case 'size':
        canvas?.setActiveObject(canvas?.getObjects()[1]);
        switch (state.functionSelected?.split(' ')[1]) {
          case 'inc':
            setfontSize(fontSize + 5);
            canvas
              ?.getActiveObject()
              ?.set('fontSize' as keyof fabric.Object, fontSize + 5);
            canvas?.renderAll();
            break;
          case 'dec':
            if (fontSize > 5) {
              setfontSize(fontSize - 5);
              canvas
                ?.getActiveObject()
                ?.set('fontSize' as keyof fabric.Object, fontSize - 5);
              canvas?.renderAll();
            }
            break;
        }
        break;
    }
  }, [state]);

  useEffect(() => {
    const text = new fabric.IText('Double Tap and\nType', {
      left: 100,
      top: 100,
      fontSize,
    });
    canvas?.add(text);
  }, [canvas]);

  const handleFormatting = (property: keyof fabric.Object, value: string) => {
    canvas?.getActiveObject()?.set(property, value);
    canvas?.renderAll();
  };

  useEffect(() => {
    if (state.actionSelected === 'text') {
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

  return (
    <Box {...props}>
      <PreviewCanvas setCanvas={setCanvas} />
    </Box>
  );
};
