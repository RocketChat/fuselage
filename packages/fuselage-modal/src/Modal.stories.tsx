import { Modal, Button, ButtonGroup } from '@rocket.chat/fuselage';
import { action } from '@storybook/addon-actions';
import type { Story } from '@storybook/react';

import { useSetModal } from './ModalContext';

export default {
  title: 'Containers/Modal',
  component: Modal,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    jest: ['Modal/Modal.spec.js'],
  },
};

export const WithContext: Story = () => {
  const setModal = useSetModal();

  const ModalExample = ({ onClose }: { onClose: () => void }) => (
    <Modal onSubmit={action('Submit form')}>
      <Modal.Header>
        <Modal.Icon name='info' />
        <Modal.Title>Modal Header</Modal.Title>
        <Modal.Close onClick={onClose} />
      </Modal.Header>
      <Modal.Content>Modal Body</Modal.Content>
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

  const handleCloseModal = () => setModal();
  const handleOpenModal = () =>
    setModal(<ModalExample onClose={handleCloseModal} />);

  return (
    <Button onClick={handleOpenModal} primary>
      Open Modal
    </Button>
  );
};
