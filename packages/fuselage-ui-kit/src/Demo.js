import {
  Modal,
  ButtonGroup,
  Button,
  AnimatedVisibility,
} from '@rocket.chat/fuselage';
import React from 'react';

const thumb = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
export const Demo = ({ children, visible }) => <AnimatedVisibility visibility={visible ? AnimatedVisibility.VISIBLE : AnimatedVisibility.HIDDEN}><Modal open={visible}>
  <Modal.Header><Modal.Thumb url={thumb}/> <Modal.Title>Modal Header</Modal.Title><Modal.Close/></Modal.Header>
  <Modal.Content>{children}</Modal.Content>
  <Modal.Footer>
    <ButtonGroup align='end'>
      <Button>Cancel</Button>
      <Button primary>Submit</Button>
    </ButtonGroup>
  </Modal.Footer>
</Modal></AnimatedVisibility>;
