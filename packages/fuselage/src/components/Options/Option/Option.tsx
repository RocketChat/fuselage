import React, { Ref, ComponentProps, ReactNode } from 'react';

import { Icon } from '../..';
import { Box } from '../../Box';
import OptionAvatar from './OptionAvatar';
import OptionContent from './OptionContent';
import OptionIcon from './OptionIcon';

export type OptionProps = {
  is?: ComponentProps<typeof Box>['is'];
  id?: string;
  children?: ReactNode;
  label?: string;
  focus?: boolean;
  selected?: boolean;
  className?: ComponentProps<typeof Box>['className'];
  ref?: Ref<Element>;
  icon?: ComponentProps<typeof Icon>['name'];
  avatar?: ReactNode;
  title?: string;
  value?: string;
  variant?: 'danger' | 'success' | 'warning' | 'primary';
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Option = React.memo(
  ({
    is: Tag = 'li',
    id,
    children,
    label,
    focus,
    selected,
    className,
    ref,
    icon,
    avatar,
    title,
    onClick,
    variant,
    ...options
  }: OptionProps) => (
    <Tag
      key={id}
      id={id}
      ref={ref}
      aria-selected={selected}
      title={title}
      onClick={onClick}
      {...options}
      className={[
        'rcx-option',
        className,
        focus && 'rcx-option--focus',
        selected && 'rcx-option--selected',
        variant && `rcx-option--${variant}`,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className='rcx-option__wrapper'>
        {avatar && <OptionAvatar>{avatar}</OptionAvatar>}
        {icon && <OptionIcon name={icon} />}
        {label && <OptionContent>{label}</OptionContent>}
        {label !== children && children}
      </div>
    </Tag>
  )
);

export default Option;
