import { css } from '@rocket.chat/css-in-js';
import PropTypes from 'prop-types';
import React, { useContext, createContext } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { appendClassName } from '../../helpers/appendClassName';
import { createPropType } from '../../helpers/createPropType';
import { prependClassName } from '../../helpers/prependClassName';
import { useStyle } from '../../hooks/useStyle';
import { size } from '../../styleTokens';
import { Box } from '../Box';

const AvatarContext = createContext({
  baseUrl: '',
});

const usePropsToClass = (props) => {
  const style = useStyle(css`
    width: ${props.size ? size(props.size) : size('x36')};
    height: ${props.size ? size(props.size) : size('x36')};
  `);

  props.className = appendClassName(props.className, style);
};

const usePropsToImgClass = (props) => {
  return props.className.replace('rcx-avatar', 'rcx-avatar__element');
};

export function Avatar({ title, rounded = false, url, ...props }) {
  const { baseUrl } = useContext(AvatarContext);

  props.className = prependClassName(
    props.className,
    'rcx-box rcx-box--full rcx-avatar'
  );

  usePropsToClass(props);

  const imgClass = usePropsToImgClass(props);

  rounded = rounded ? 'rcx-avatar__element--rounded' : '';

  return (
    <figure aria-label={title} {...props}>
      <img src={`${baseUrl}${url}`} className={`${imgClass} ${rounded}`} />
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
