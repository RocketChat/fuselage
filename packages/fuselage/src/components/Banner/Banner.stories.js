import { action } from '@storybook/addon-actions';
import React from 'react';

import { Icon } from '../Icon';
import Banner from './Banner';

export default {
  title: 'Containers/Banner',
  component: Banner,
};

export const _Banner = () => (
  <Banner
    closeable
    icon={<Icon name='info' size={24} />}
    title='Sed ut perspiciatis unde'
    onClose={action('close')}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor
  </Banner>
);
_Banner.storyName = 'Banner';

export const Normal = () => (
  <>
    <Banner
      closeable
      icon={<Icon name='info' size={24} />}
      title='Sed ut perspiciatis unde'
      variant='neutral'
      onClose={action('close')}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor
    </Banner>
    <br />
    <Banner
      closeable
      icon={<Icon name='info' size={24} />}
      title='Sed ut perspiciatis unde'
      variant='info'
      onClose={action('close')}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor
    </Banner>
    <br />
    <Banner
      closeable
      icon={<Icon name='circle-check' size={24} />}
      title='Sed ut perspiciatis unde'
      variant='success'
      onClose={action('close')}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor
    </Banner>
    <br />
    <Banner
      closeable
      icon={<Icon name='warning' size={24} />}
      title='Sed ut perspiciatis unde'
      variant='warning'
      onClose={action('close')}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor
    </Banner>
    <br />
    <Banner
      closeable
      icon={<Icon name='ban' size={24} />}
      title='Sed ut perspiciatis unde'
      variant='danger'
      onClose={action('close')}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor
    </Banner>
    <br />
  </>
);

export const Inline = () => (
  <>
    <Banner
      inline
      closeable
      icon={<Icon name='info' size={24} />}
      title='Sed ut perspiciatis unde'
      variant='neutral'
      onClose={action('close')}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor
    </Banner>
    <br />
    <Banner
      inline
      closeable
      icon={<Icon name='info' size={24} />}
      title='Sed ut perspiciatis unde'
      variant='info'
      onClose={action('close')}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor
    </Banner>
    <br />
    <Banner
      inline
      closeable
      icon={<Icon name='circle-check' size={24} />}
      title='Sed ut perspiciatis unde'
      variant='success'
      onClose={action('close')}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor
    </Banner>
    <br />
    <Banner
      inline
      closeable
      icon={<Icon name='warning' size={24} />}
      title='Sed ut perspiciatis unde'
      variant='warning'
      onClose={action('close')}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor
    </Banner>
    <br />
    <Banner
      inline
      closeable
      icon={<Icon name='ban' size={24} />}
      title='Sed ut perspiciatis unde'
      variant='danger'
      onClose={action('close')}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor
    </Banner>
    <br />
  </>
);
