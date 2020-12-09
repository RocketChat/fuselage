import React, { forwardRef } from 'react';

import { Box } from '../../Box';
import { Icon } from '../../Icon';
import Margins from '../../Margins';

const Li = forwardRef(function Li({ children, ...props }, ref) {
  return (
    <Box rcx-option withTruncatedText is='li' ref={ref} {...props}>
      <Box withTruncatedText display='flex' alignItems='center' mi='neg-x4'>
        <Margins inline='x4'>{children}</Margins>
      </Box>
    </Box>
  );
});

export const Option = React.memo(
  ({
    id,
    avatar,
    presence,
    children,
    label = children,
    focus,
    selected,
    icon,
    className,
    ...options
  }) => (
    <Li
      key={id}
      rcx-option--focus={focus}
      id={id}
      rcx-option--selected={selected}
      aria-selected={selected}
      {...options}
    >
      {avatar}
      {presence && (
        <Box marginInline='x8' marginInlineEnd='x4'>
          {presence}
        </Box>
      )}
      {icon && <Icon size='x16' name={icon} />}{' '}
      <Box
        is='span'
        className={className}
        withTruncatedText
        flexGrow={1}
        fontScale='p1'
        color='default'
      >
        {label}
      </Box>
      {label !== children && children}
    </Li>
  )
);
