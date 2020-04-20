import PropTypes from 'prop-types';
import React, { useContext, createContext } from 'react';

import { sizePropType } from '../../propTypes/sizes';
import { Box } from '../Box';

const AvatarContext = createContext({
  baseUrl: '',
});

export function Avatar({
  title,
  rounded = false,
  url,
  size = 'x32',
  ...props
}) {
  const { baseUrl } = useContext(AvatarContext);

  return <Box
    is='figure'
    componentClassName='rcx-avatar'
    aria-label={title}
    {...props}
    width={size}
    height={size}
  >
    <Box
      is='img'
      componentClassName='rcx-avatar__element'
      src={`${ baseUrl }${ url }`}
      mod-rounded={rounded}
      width={size}
      height={size}
    />
  </Box>;
}

Avatar.Context = AvatarContext;

Avatar.propTypes = {
  rounded: PropTypes.bool,
  size: sizePropType,
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
};

const AvatarStack = ({ children, ...props }) =>
  <Box componentClassName='rcx-avatar-stack' { ...props }>
    {React.Children.toArray(children).reverse()}
  </Box>;

Avatar.Stack = AvatarStack;
