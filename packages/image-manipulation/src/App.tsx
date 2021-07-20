import { useRef, ComponentProps, useEffect, useContext } from 'react';
import { Box, ButtonGroup } from '@rocket.chat/fuselage';
import { Crop, Text, Doodle, Check, Cross } from './components';
import { Preview, CropRenderingLayer } from './helpers';
import { ManipulationContext } from './context/manipulationContext';
import { ActionType } from './context/action';

type AppProps = ComponentProps<typeof Box> & {
  imgSrc: string;
};

const App = ({ imgSrc, ...props }: AppProps) => {
  const parentRef = useRef<typeof Box & HTMLDivElement>(null);
  const imageRef = useRef<typeof Box & HTMLImageElement>(null);
  const { state, dispatch } = useContext(ManipulationContext);

  const { modifierSelected } = state;

  useEffect(() => {
    let img = new Image();
    img.src = imgSrc;
    img.onload = function (e: any) {
      dispatch({
        type: ActionType.SET_ORIGINAL_IMAGE_DIMENSIONS,
        payload: { width: e.path[0].width, height: e.path[0].height },
      });
      dispatch({
        type: ActionType.SET_IMAGE_SRC,
        payload: {
          current: img.src,
          original: img.src,
        },
      });
    };
  }, []);

  useEffect(() => {
    dispatch({
      type: ActionType.SET_PARENT_DIMENSIONS,
      payload: {
        width: parentRef.current!.clientWidth,
        height: parentRef.current!.clientHeight,
      },
    });
    dispatch({
      type: ActionType.SET_PARENT_REF,
      payload: parentRef,
    });
  }, [parentRef]);

  useEffect(() => {
    dispatch({
      type: ActionType.SET_IMAGE_REF,
      payload: imageRef,
    });
  }, [imageRef]);

  const handleModifier = (modifier: string | null) => {
    dispatch({
      type: ActionType.SET_MODIFIER,
      payload: modifier,
    });
  };

  return (
    <Box
      {...props}
      display='flex'
      justifyContent='space-evenly'
      alignItems='center'
      border='2px solid black'
      ref={parentRef}
    >
      <Preview
        imgSrc={imgSrc}
        ref={imageRef}
        display={
          modifierSelected === null || typeof modifierSelected === 'undefined'
            ? 'block'
            : 'none'
        }
      />

      {modifierSelected === 'crop' && <CropRenderingLayer />}

      {(typeof modifierSelected === 'undefined' ||
        modifierSelected === null) && (
        <ButtonGroup alignSelf='flex-start' margin='5px'>
          <Crop onClick={() => handleModifier('crop')} />
          <Doodle onClick={() => handleModifier('doodle')} />
          <Text onClick={() => handleModifier('text')} />
        </ButtonGroup>
      )}

      {modifierSelected !== null && typeof modifierSelected !== 'undefined' && (
        <ButtonGroup alignSelf='flex-start' margin='5px'>
          <Check />
          <Cross />
        </ButtonGroup>
      )}
    </Box>
  );
};

export default App;
