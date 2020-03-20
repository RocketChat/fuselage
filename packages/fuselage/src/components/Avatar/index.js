import PropTypes from 'prop-types';
import React, { useContext, createContext } from 'react';

import { Box } from '../Box';

const AvatarContext = createContext({
  baseUrl: '',
});

export function Avatar({ title, rounded, url, size = 'x32', ...props }) {
  const { baseUrl } = useContext(AvatarContext);

  return <Box
    is='figure'
    componentClassName='rcx-avatar'
    aria-label={title}
    mod-size={size}
    {...props}
  >
    <Box
      is='img'
      componentClassName='rcx-avatar__element'
      src={`${ baseUrl }${ url }`}
      mod-size={size}
      mod-rounded={rounded}
    />
  </Box>;
}

Avatar.Context = AvatarContext;

Avatar.propTypes = {
  rounded: PropTypes.bool,
  url: PropTypes.string,
  title: PropTypes.string,
  is: PropTypes.elementType,
  size: PropTypes.string,
};

const Stack = ({ children }) => <Box componentClassName='rcx-avatar-stack'>{React.Children.toArray(children).reverse()}</Box>;

Avatar.Stack = Stack;
