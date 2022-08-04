import { action } from '@storybook/addon-actions';
import React from 'react';

import { Button, Modal } from '../..';

export default {
  title: 'Containers/Modal',
  component: Modal,
  parameters: {
    jest: ['Modal/Modal.spec.tsx'],
  },
};

export const Default = () => (
  <Modal>
    <Modal.Header>
      <Modal.HeaderText>
        <Modal.Title>Modal Header</Modal.Title>
      </Modal.HeaderText>
      <Modal.Close />
    </Modal.Header>
    <Modal.Content>Modal Body</Modal.Content>
    <Modal.Footer>
      <Modal.FooterControllers>
        <Button>Cancel</Button>
        <Button primary onClick={action('click')}>
          Submit
        </Button>
      </Modal.FooterControllers>
    </Modal.Footer>
  </Modal>
);

export const _WithThumb = () => (
  <Modal>
    <Modal.Header>
      <Modal.Thumb url='data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==' />
      <Modal.HeaderText>
        <Modal.Title>Modal Header</Modal.Title>
      </Modal.HeaderText>
      <Modal.Close />
    </Modal.Header>
    <Modal.Content>Modal Body</Modal.Content>
    <Modal.Footer>
      <Modal.FooterControllers>
        <Button>Cancel</Button>
        <Button primary onClick={action('click')}>
          Submit
        </Button>
      </Modal.FooterControllers>
    </Modal.Footer>
  </Modal>
);

export const _WithIcon = () => (
  <Modal>
    <Modal.Header>
      <Modal.Icon name='info' />
      <Modal.HeaderText>
        <Modal.Title>Modal Header</Modal.Title>
      </Modal.HeaderText>
      <Modal.Close />
    </Modal.Header>
    <Modal.Content>Modal Body</Modal.Content>
    <Modal.Footer>
      <Modal.FooterControllers>
        <Button>Cancel</Button>
        <Button primary onClick={action('click')}>
          Submit
        </Button>
      </Modal.FooterControllers>
    </Modal.Footer>
  </Modal>
);

export const _WithTagline = () => (
  <Modal>
    <Modal.Header>
      <Modal.HeaderText>
        <Modal.Tagline>Tagline</Modal.Tagline>
        <Modal.Title>Modal Header</Modal.Title>
      </Modal.HeaderText>
      <Modal.Close />
    </Modal.Header>
    <Modal.Content>Modal Body</Modal.Content>
    <Modal.Footer>
      <Modal.FooterControllers>
        <Button>Cancel</Button>
        <Button primary onClick={action('click')}>
          Submit
        </Button>
      </Modal.FooterControllers>
    </Modal.Footer>
  </Modal>
);

export const _WithIconAndTagline = () => (
  <Modal>
    <Modal.Header>
      <Modal.Icon alignItems='end' name='info' />
      <Modal.HeaderText>
        <Modal.Tagline>Tagline</Modal.Tagline>
        <Modal.Title>Modal Header</Modal.Title>
      </Modal.HeaderText>
      <Modal.Close />
    </Modal.Header>
    <Modal.Content>Modal Body</Modal.Content>
    <Modal.Footer>
      <Modal.FooterControllers>
        <Button>Cancel</Button>
        <Button primary onClick={action('click')}>
          Submit
        </Button>
      </Modal.FooterControllers>
    </Modal.Footer>
  </Modal>
);

export const _WithAnnotation = () => (
  <Modal>
    <Modal.Header>
      <Modal.HeaderText>
        <Modal.Title>Modal Header</Modal.Title>
      </Modal.HeaderText>
      <Modal.Close />
    </Modal.Header>
    <Modal.Content>Modal Body</Modal.Content>
    <Modal.Footer justifyContent='space-between'>
      <Modal.FooterAnnotation>Anototation</Modal.FooterAnnotation>
      <Modal.FooterControllers>
        <Button>Cancel</Button>
        <Button primary onClick={action('click')}>
          Submit
        </Button>
      </Modal.FooterControllers>
    </Modal.Footer>
  </Modal>
);
