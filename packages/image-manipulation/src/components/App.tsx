import { Box, ButtonGroup } from '@rocket.chat/fuselage';
import { useRef, ComponentProps, useEffect, useContext } from 'react';

import { IconButton } from '.';
import { ActionType } from '../context/action';
import { ManipulationContext } from '../context/manipulationContext';
import { Preview, CropRenderingLayer } from '../helpers';

type AppProps = ComponentProps<typeof Box> & {
  imgSrc: string;
};

const App: ({ imgSrc, ...props }: AppProps) => JSX.Element = ({
  imgSrc,
  ...props
}) => {
  const parentRef = useRef<typeof Box & HTMLDivElement>(null);
  const imageRef = useRef<typeof Box & HTMLImageElement>(null);
  const { state, dispatch } = useContext(ManipulationContext);

  const { modifierSelected } = state;

  useEffect(() => {
    const img = new Image();
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
    dispatch({
      type: ActionType.SET_PARENT_DIMENSIONS,
      payload: {
        width: parentRef.current ? parentRef.current.clientWidth : 0,
        height: parentRef.current ? parentRef.current.clientHeight : 0,
      },
    });
    dispatch({
      type: ActionType.SET_PARENT_REF,
      payload: parentRef,
    });
    dispatch({
      type: ActionType.SET_IMAGE_REF,
      payload: imageRef,
    });
  }, []);

  const handleModifier = (modifier: string | null) => {
    dispatch({
      type: ActionType.SET_MODIFIER,
      payload: modifier,
    });
  };

  const handleCheck = () => {
    dispatch({
      type: ActionType.SET_ACTION_SELECTED,
      payload: state.modifierSelected,
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
        display={
          modifierSelected === null || typeof modifierSelected === 'undefined'
            ? 'block'
            : 'none'
        }
      />

      {modifierSelected === 'crop' && <CropRenderingLayer />}
      {/* {modifierSelected === 'text' && <TextRenderingLayer />} */}

      {(typeof modifierSelected === 'undefined' ||
        modifierSelected === null) && (
        <ButtonGroup alignSelf='flex-start' margin='5px'>
          <IconButton
            icon='chevron-expand'
            onClick={() => handleModifier('crop')}
          />
          <IconButton icon='pencil' onClick={() => handleModifier('doodle')} />
          <IconButton icon='language' onClick={() => handleModifier('text')} />
        </ButtonGroup>
      )}

      {modifierSelected !== null && typeof modifierSelected !== 'undefined' && (
        <ButtonGroup alignSelf='flex-start' margin='5px'>
          <IconButton icon='check' onClick={handleCheck} />
          <IconButton icon='cross' onClick={() => handleModifier(null)} />
        </ButtonGroup>
      )}
    </Box>
  );
};

export default App;
