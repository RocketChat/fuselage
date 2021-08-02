import {
  Box,
  InputBox,
  Field,
  FieldGroup,
  Select,
  ButtonGroup,
} from '@rocket.chat/fuselage';
import { fabric } from 'fabric';
// eslint-disable-next-line import/no-unresolved
import { Canvas } from 'fabric/fabric-impl';
import { useState, useEffect, ComponentProps, FC, useContext } from 'react';

import { PreviewCanvas } from '.';
import { IconButton } from '../components/IconButton';
import { ActionType } from '../context/action';
import { ManipulationContext } from '../context/manipulationContext';

type TextRenderingLayerProps = ComponentProps<typeof Box>;

export const TextRenderingLayer: FC = ({
  ...props
}: TextRenderingLayerProps) => {
  const { state, dispatch } = useContext(ManipulationContext);

  const [canvas, setCanvas] = useState<Canvas | null>();
  const [bold, setBold] = useState('bold');
  const [italic, setItalic] = useState('italic');
  const [underline, setUnderline] = useState('true');

  useEffect(() => {
    console.log('RENDERING TEXT');
    const text = new fabric.IText('Double Tap and\nType', {
      left: 100,
      top: 100,
    });
    canvas?.add(text);
  }, [canvas]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name as keyof fabric.Object;
    canvas?.getActiveObject()?.set(key, event.target.value);
    canvas?.renderAll();
  };

  const options = [
    ['right', 'right'],
    ['left', 'left'],
    ['center', 'center'],
    ['justify', 'justify'],
  ] as const;

  const handleTextalign = (value: string) => {
    canvas?.getActiveObject()?.set('textAlign' as keyof fabric.Object, value);
    canvas?.renderAll();
  };

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
    <Box
      {...props}
      display='flex'
      alignItems='center'
      justifyContent='space-evenly'
      width='80%'
    >
      <PreviewCanvas setCanvas={setCanvas} />
      <Box>
        <ButtonGroup alignSelf='flex-start' margin='5px'>
          <IconButton
            icon='bold'
            onClick={() => {
              if (canvas?.getActiveObject()) {
                handleFormatting('fontWeight' as keyof fabric.Object, bold);
                setBold((prevState) => (prevState === '' ? 'bold' : ''));
              }
            }}
          />
          <IconButton
            icon='italic'
            onClick={() => {
              if (canvas?.getActiveObject()) {
                handleFormatting('fontStyle' as keyof fabric.Object, italic);
                setItalic((prevState) => (prevState === '' ? 'italic' : ''));
              }
            }}
          />
          <IconButton
            icon='underline'
            onClick={() => {
              if (canvas?.getActiveObject()) {
                handleFormatting('underline' as keyof fabric.Object, underline);
                setUnderline((prevState) => (prevState === '' ? 'true' : ''));
              }
            }}
          />
        </ButtonGroup>
        <FieldGroup>
          <Field>
            <Field.Label>Font Size</Field.Label>
            <Field.Row>
              <InputBox
                type='range'
                min='5'
                max='100'
                name='fontSize'
                onChange={handleChange}
              />
            </Field.Row>
          </Field>
          <Field>
            <Field.Label>Font Color</Field.Label>
            <Field.Row>
              <InputBox type='color' name='fill' onChange={handleChange} />
            </Field.Row>
          </Field>
          <Field>
            <Field.Label>Background Color</Field.Label>
            <Field.Row>
              <InputBox
                type='color'
                name='backgroundColor'
                onChange={handleChange}
              />
            </Field.Row>
          </Field>
          <Field>
            <Field.Label>Text Align</Field.Label>
            <Field.Row>
              <Select
                width='250px'
                placeholder='Select Alignment'
                options={options}
                onChange={handleTextalign}
              />
            </Field.Row>
          </Field>
        </FieldGroup>
      </Box>
    </Box>
  );
};
