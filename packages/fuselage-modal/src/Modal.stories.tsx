import { Modal, Button, ButtonGroup, Box } from '@rocket.chat/fuselage';
import type { Story } from '@storybook/react';

import { useModal } from './ModalContext';

export default {
  title: 'Containers/Modal',
  component: Modal,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    jest: ['Modal/Modal.spec.js'],
  },
};

export const WithContext: Story = () => {
  const { pop, push, clear } = useModal();

  const ModalExample = ({
    onSubmit,
    onClose,
    title,
    text,
  }: {
    onClose: () => void;
    onSubmit: (e: any) => void;
    title: string;
    text?: string;
  }) => {
    const { isOpen } = useModal();
    const openText = isOpen
      ? 'There are open modals'
      : 'Ooops, no modal open! Wait, how are you seeing this?';
    return (
      <Modal onSubmit={onSubmit}>
        <Modal.Header>
          <Modal.Icon name='info' />
          <Modal.Title>{title}</Modal.Title>
          <Modal.Close onClick={onClose} />
        </Modal.Header>
        <Modal.Content>
          <Box style={{ wordBreak: 'break-word' }}>
            {openText} {text}
          </Box>
        </Modal.Content>
        <Modal.Footer>
          <ButtonGroup align='end'>
            <Button onClick={onClose}>Cancel</Button>
            <Button type='submit' primary>
              Submit
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </Modal>
    );
  };

  const openNext = () => {
    push(<ModalExample onClose={pop} onSubmit={clear} title='SECOND MODAL' />);
  };

  const open = () =>
    push(
      <ModalExample
        onClose={pop}
        onSubmit={openNext}
        title='FIRST MODAL'
        text={
          'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
        }
      />
    );

  return (
    <Button onClick={open} primary>
      Open Modal
    </Button>
  );
};
