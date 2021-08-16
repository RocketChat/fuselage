import { Button, ButtonGroup } from '@rocket.chat/fuselage';
import { FC } from 'react';

import { IconButton } from '.';

export const Toolbar: FC<any> = ({
  modifierSelected,
  handleModifier,
  handleFunction,
  handleCheck,
}) => (
  <ButtonGroup
    width='full'
    paddingInlineEnd='5%'
    paddingInlineStart='5%'
    display='flex'
    justifyContent='space-between'
  >
    <ButtonGroup alignSelf='flex-start' margin='5px'>
      {(typeof modifierSelected === 'undefined' ||
        modifierSelected === null) && (
        <>
          {' '}
          <IconButton
            icon='chevron-expand'
            onClick={() => handleModifier('crop')}
          />
          <IconButton icon='pencil' onClick={() => handleModifier('doodle')} />
          <Button onClick={() => handleModifier('text')} ghost>
            <h3 style={{ fontWeight: 500, margin: '0px' }}>T</h3>
          </Button>
        </>
      )}

      {modifierSelected === 'doodle' && (
        <>
          <ButtonGroup flexDirection='row' alignSelf='center'>
            <ButtonGroup alignItems='center' flexDirection='row'>
              <IconButton
                onClick={() => {
                  handleFunction('size dec');
                }}
                padding='0px'
                margin='0px'
                icon='chevron-down'
              />
              <IconButton
                onClick={() => {
                  handleFunction('size inc');
                }}
                margin='0px'
                padding='0px'
                icon='chevron-up'
              />
            </ButtonGroup>
          </ButtonGroup>
          <input
            onChange={(e) => {
              handleFunction(`color ${e.target.value}`);
            }}
            style={{
              width: '20px',
              border: 'none',
              marginRight: '10px',
            }}
            type='color'
          />
        </>
      )}

      {modifierSelected === 'text' && (
        <>
          <ButtonGroup flexDirection='row' alignSelf='center'>
            <ButtonGroup alignItems='center' flexDirection='row'>
              <IconButton
                onClick={() => {
                  handleFunction('size dec');
                }}
                padding='0px'
                margin='0px'
                icon='chevron-down'
              />
              <IconButton
                onClick={() => {
                  handleFunction('size inc');
                }}
                margin='0px'
                padding='0px'
                icon='chevron-up'
              />
            </ButtonGroup>
          </ButtonGroup>
          <input
            onChange={(e) => {
              handleFunction(`color ${e.target.value}`);
            }}
            style={{
              width: '20px',
              border: 'none',
              marginRight: '10px',
            }}
            type='color'
          />
        </>
      )}
    </ButtonGroup>
    <ButtonGroup alignSelf='flex-start' margin='5px'>
      {modifierSelected !== null && typeof modifierSelected !== 'undefined' && (
        <ButtonGroup display='flex' flexDirection='row'>
          {' '}
          <IconButton icon='cross' onClick={() => handleModifier(null)} />
          <IconButton icon='check' onClick={handleCheck} />
        </ButtonGroup>
      )}
    </ButtonGroup>
  </ButtonGroup>
);
