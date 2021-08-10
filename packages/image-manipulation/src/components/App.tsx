import { Box, Button, ButtonGroup, margin } from '@rocket.chat/fuselage';
import { useRef, ComponentProps, useEffect, useContext } from 'react';

import { IconButton } from '.';
import { ActionType } from '../context/action';
import { ManipulationContext } from '../context/manipulationContext';
import { Preview, CropRenderingLayer, TextRenderingLayer } from '../helpers';
import { DoodleRenderingLayer } from '../helpers/DoodleRenderingLayer';

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
    dispatch({
      type: ActionType.SET_FUNCTION,
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
      type: ActionType.SET_FUNCTION,
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

      <ButtonGroup>
        {(typeof modifierSelected === 'undefined' ||
          modifierSelected === null) && (
          <ButtonGroup alignSelf='flex-start' margin='5px'>
            <IconButton
              icon='chevron-expand'
              onClick={() => handleModifier('crop')}
            />
            <IconButton
              icon='pencil'
              onClick={() => handleModifier('doodle')}
            />
            <Button onClick={() => handleModifier('text')} ghost>
              <h3 style={{ fontWeight: 500, margin: '0px' }}>T</h3>
            </Button>
          </ButtonGroup>
        )}

        {modifierSelected !== null && typeof modifierSelected !== 'undefined' && (
          <ButtonGroup alignSelf='flex-start' margin='5px'>
            {modifierSelected !== 'crop' && (
              <>
                <ButtonGroup
                  alignItems='center'
                  flexDirection='row'
                  alignSelf='flex-start'
                >
                  <b style={{ margin: '0px' }}>T</b>
                  <ButtonGroup flexDirection='column' alignSelf='flex-start'>
                    <IconButton
                      mini={true}
                      onClick={() => {
                        handleFunction('size inc');
                      }}
                      margin='0px'
                      padding='0px'
                      icon='chevron-up'
                    />
                    <IconButton
                      mini={true}
                      onClick={() => {
                        handleFunction('size dec');
                      }}
                      padding='0px'
                      margin='0px'
                      icon='chevron-down'
                    />
                  </ButtonGroup>
                </ButtonGroup>
                <input
                  onChange={(e) => {
                    handleFunction(`color ${e.target.value}`);
                  }}
                  style={{ width: '20px', border: 'none', marginRight: '10px' }}
                  type='color'
                  name=''
                  id=''
                />
              </>
            )}
            {modifierSelected === 'text' && (
              <>
                {' '}
                <IconButton
                  onClick={() => {
                    handleFunction('bold');
                  }}
                  icon='bold'
                />
                <IconButton
                  onClick={() => {
                    handleFunction('italic');
                  }}
                  icon='italic'
                />
                <IconButton
                  onClick={() => {
                    handleFunction('underline');
                  }}
                  icon='underline'
                />
              </>
            )}

            <IconButton icon='check' onClick={handleCheck} />
            <IconButton icon='cross' onClick={() => handleModifier(null)} />
          </ButtonGroup>
        )}
      </ButtonGroup>
    </Box>
  );
};

export default App;
