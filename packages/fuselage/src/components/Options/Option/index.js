import React from 'react';

import { Icon } from '../../Icon';
import { Skeleton } from '../../Skeleton';

const OptionColumn = (props) => (
  <div className='rcx-option__column' {...props} />
);
const OptionContent = (props) => (
  <div className='rcx-option__content' {...props} />
);
const OptionAvatar = (props) => (
  <div className='rcx-option__avatar' {...props} />
);
const OptionDescription = (props) => (
  <div className='rcx-option__description' {...props} />
);
const OptionIcon = ({ name }) => (
  <OptionColumn>
    <Icon size='x20' name={name} />
  </OptionColumn>
);

const OptionSkeleton = (props) => (
  <Option {...props}>
    <Option.Avatar>
      <Skeleton variant='rect' width={28} height={28} />
    </Option.Avatar>
    <Option.Content>
      <Skeleton width='100%' />
    </Option.Content>
  </Option>
);

export const OptionMenu = (props) => (
  <div className='rcx-box--animated rcx-option__menu-wraper' {...props} />
);

export const Option = React.memo(
  ({
    is: Tag = 'li',
    id,
    presence,
    children,
    label,
    focus,
    selected,
    className,
    ref,
    icon,
    avatar,
    ...options
  }) => (
    <Tag
      key={id}
      id={id}
      ref={ref}
      aria-selected={selected}
      {...options}
      className={[
        'rcx-option',
        className,
        focus && 'rcx-option--focus',
        selected && 'rcx-option--selected',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className='rcx-option__wrapper'>
        {avatar && <Option.Avatar>{avatar}</Option.Avatar>}
        {icon && <Option.Icon name={icon} />}
        {label && <Option.Content>{label}</Option.Content>}
        {label !== children && children}
      </div>
    </Tag>
  )
);

Option.Description = OptionDescription;
Option.Skeleton = OptionSkeleton;
Option.Avatar = OptionAvatar;
Option.Menu = OptionMenu;
Option.Icon = OptionIcon;
Option.Column = OptionColumn;
Option.Content = OptionContent;
