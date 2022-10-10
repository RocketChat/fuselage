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

export const _WithHeroImage = () => (
  <Modal>
    <Modal.Header>
      <Modal.HeaderText>
        <Modal.Title>Modal Header</Modal.Title>
      </Modal.HeaderText>
      <Modal.Close />
    </Modal.Header>
    <Modal.HeroImage src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z' />
    <Modal.Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non
      urna posuere, tempor urna nec, lacinia lacus. Vivamus ac lobortis arcu.
      Morbi malesuada, diam sed congue aliquet, dui elit tincidunt leo, a
      fermentum ante augue nec ex. Vestibulum feugiat aliquam sem vel porta.
      Praesent varius aliquet consequat. Mauris id nisl egestas, egestas ipsum
      sit amet, vestibulum elit. Cras vel dapibus lacus. Sed congue interdum
      lobortis. In vitae consectetur enim, eu varius leo. Quisque rhoncus nulla
      a rhoncus lobortis. Sed eu nulla libero. Donec lacus ante, vehicula eget
      eros molestie, ullamcorper tincidunt arcu. Suspendisse eget pulvinar
      lacus.
    </Modal.Content>
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
