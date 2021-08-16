import { Box } from '@rocket.chat/fuselage';
import { useRef, ComponentProps, useEffect, FC } from 'react';

import { Toolbar } from '.';
import { useManipulation } from '../context/ManipulationContext';
import { ActionType } from '../context/action';
import {
  Preview,
  CropRenderingLayer,
  TextRenderingLayer,
  DoodleRenderingLayer,
} from '../helpers';

type AppProps = ComponentProps<typeof Box> & {
  imgSrc: string;
};

const App: FC<AppProps> = ({ imgSrc, ...props }) => {
  const parentRef = useRef<typeof Box & HTMLDivElement>(null);
  const imageRef = useRef<typeof Box & HTMLImageElement>(null);
  const { state, dispatch } = useManipulation();
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
    dispatch({
      type: ActionType.SET_CONTROL,
      payload: null,
    });
  };

  const handleCheck = () => {
    dispatch({
      type: ActionType.SET_ACTION_SELECTED,
      payload: state.modifierSelected,
    });
  };

  const handleFunction = (type: string) => {
    dispatch({
      type: ActionType.SET_CONTROL,
      payload: type,
    });
  };

  return (
    <Box
      {...props}
      display='flex'
      flexDirection='column-reverse'
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
      {modifierSelected === 'text' && <TextRenderingLayer />}
      {modifierSelected === 'doodle' && <DoodleRenderingLayer />}

      <Toolbar
        {...{ modifierSelected, handleModifier, handleCheck, handleFunction }}
      />
    </Box>
  );
};

export default App;
