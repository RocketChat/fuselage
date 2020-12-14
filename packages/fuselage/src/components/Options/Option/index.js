import React from 'react';

import { Icon } from '../../Icon';
import { Skeleton } from '../../Skeleton';

const OptionColumn = ({ children }) => (
  <div className='rcx-option__column'>{children}</div>
);
const OptionContent = ({ children }) => (
  <div className='rcx-option__content'>{children}</div>
);
const OptionAvatar = ({ children }) => (
  <div className='rcx-option__avatar'>{children}</div>
);
const OptionIcon = ({ icon }) => (
  <OptionContent>
    <Icon size='x16' name={icon} />
  </OptionContent>
);

const OptionSkeleton = () => {
  return (
    <Option>
      <Option.Avatar>
        <Skeleton variant='rect' width={28} height={28} />
      </Option.Avatar>
      <Option.Content>
        <Skeleton width='100%' />
      </Option.Content>
    </Option>
  );
};

export const OptionMenu = ({ children }) => (
  <div className='rcx-box--animated rcx-option__menu-wraper'>{children}</div>
);

export const Option = React.memo(
  ({
    id,
    presence,
    children,
    label,
    focus,
    selected,
    className,
    ref,
    ...options
  }) => (
    <li
      key={id}
      id={id}
      ref={ref}
      aria-selected={selected}
      {...options}
      className={`rcx-option ${className}
        ${focus ? 'rcx-option--focus' : ''}
        ${selected ? 'rcx-option--selected' : ''}
      `}
    >
      <div className='rcx-option__wrapper'>
        {label && <Option.Content>{label}</Option.Content>}
        {label !== children && children}
      </div>
    </li>
  )
);

Option.Skeleton = OptionSkeleton;
Option.Avatar = OptionAvatar;
Option.Menu = OptionMenu;
Option.Icon = OptionIcon;
Option.Column = OptionColumn;
Option.Content = OptionContent;
