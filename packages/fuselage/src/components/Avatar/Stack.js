import React from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { prependClassName } from '../../helpers/prependClassName';
import { Avatar } from './index';

export function AvatarStack({ children, className, ...props }) {
  return (
    <div className={prependClassName('rcx-avatar-stack', className)} {...props}>
      {flattenChildren(children).reverse()}
    </div>
  );
}

Avatar.Stack = AvatarStack;
