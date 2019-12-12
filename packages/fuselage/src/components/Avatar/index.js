
import React, { useContext, createContext } from 'react';
import PropTypes from 'prop-types';

import { Box, Flex } from '../Box';

const context = createContext({
  baseUrl: '',
});

const Img = Box.extend('rcx-avatar__element', 'img');

const Container = Box.extend('rcx-avatar', 'figure');
export const Avatar = ({ title, url, size = 'x32', ...props }) => {
  const modifier = { [`mod-${ size }`]: true };

  const { baseUrl } = useContext(context);

  return <Flex.Container><Container {...props} {...modifier} aria-label={title}>
    <Flex.Item grow={1} shrink={1}><Img src={`${ baseUrl }${ url }`}/></Flex.Item>
  </Container></Flex.Container>;
};

Avatar.displayName = 'Avatar';

Avatar.context = context;

Avatar.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  componentClassName: PropTypes.string,
  is: PropTypes.elementType,
  style: PropTypes.object,
  size: PropTypes.oneOf(['x1', 'x2', 'x4', 'x8', 'x12', 'x16', 'x20', 'x24', 'x28', 'x32', 'x36', 'x40', 'x44']),
};
