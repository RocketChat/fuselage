import PropTypes from 'prop-types';
import React from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { prependClassName } from '../../helpers/prependClassName';

export function Avatar({
  title,
  size = 'x36',
  rounded = false,
  objectFit = false,
  url,
  ...props
}) {
  props.className = prependClassName(
    props.className,
    ['rcx-box rcx-box--full rcx-avatar', size && `rcx-avatar--${size}`]
      .filter(Boolean)
      .join(' ')
  );
  const innerClass = [
    'rcx-avatar__element',
    rounded && 'rcx-avatar__element--rounded',
    objectFit && 'rcx-avatar__element--object-fit',
    size && `rcx-avatar--${size}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <figure aria-label={title} {...props}>
      <img src={`${url}`} className={`${innerClass}`} />
    </figure>
  );
}

Avatar.propTypes = {
  rounded: PropTypes.bool,
  size: PropTypes.oneOf([
    'x16',
    'x18',
    'x20',
    'x24',
    'x28',
    'x32',
    'x36',
    'x40',
    'x48',
    'x124',
    'x200',
    'x332',
  ]),
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export const AvatarStack = ({ children, className, ...props }) => (
  <div className={prependClassName('rcx-avatar-stack', className)} {...props}>
    {flattenChildren(children).reverse()}
  </div>
);

AvatarStack.propTypes = {
  children: PropTypes.element,
  className: String,
};

Avatar.Stack = AvatarStack;
