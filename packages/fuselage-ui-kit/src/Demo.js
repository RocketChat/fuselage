import React from 'react';
import {
  Modal,
  ButtonGroup,
  Button,
  AnimatedWrapper,
} from '@rocket.chat/fuselage';

const thumb = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
export const Demo = ({ children, visible }) => <AnimatedWrapper visible={visible}><Modal open={visible}>
  <Modal.Header><Modal.Thumb url={thumb}/> <Modal.Title>Modal Header</Modal.Title><Modal.Close/></Modal.Header>
  <Modal.Content>{children}</Modal.Content>
  <Modal.Footer>
    <ButtonGroup align='end'>
      <Button>Cancel</Button>
      <Button primary>Submit</Button>
    </ButtonGroup>
  </Modal.Footer>
</Modal></AnimatedWrapper>;
