import PropTypes from 'prop-types';
import React, { useContext, createContext } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { createPropType } from '../../helpers/createPropType';
import { prependClassName } from '../../helpers/prependClassName';
import { size } from '../../styleTokens';
import { Box } from '../Box';

const AvatarContext = createContext({
  baseUrl: '',
});

const usePropsToStyle = (props) => {
  props.style = {
    width: props.size ? size(props.size) : size('x36'),
    height: props.size ? size(props.size) : size('x36'),
  };

  return props;
};

export function Avatar({
  title,
  rounded = false,
  url,
  className,
  ...props
}) {
  const { baseUrl } = useContext(AvatarContext);
  props = usePropsToStyle(props);
  className = prependClassName(props.className, 'rcx-box rcx-box--full rcx-avatar');
  rounded = rounded ? 'rcx-avatar__element--rounded' : '';

  return (
    <figure
      className={className}
      aria-label={title}
      {...props}
    >
      <img
        className={`${ className }__element ${ rounded }`}
        src={`${ baseUrl }${ url }`}
        {...props}
      />
    </figure>
  );
}

Avatar.Context = AvatarContext;

Avatar.propTypes = {
  rounded: PropTypes.bool,
  size: createPropType(size),
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
};

const AvatarStack = ({ children, ...props }) => (
  <Box rcx-avatar-stack {...props}>
    {flattenChildren(children).reverse()}
  </Box>
);

Avatar.Stack = AvatarStack;
