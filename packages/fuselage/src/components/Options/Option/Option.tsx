import type { Ref, ComponentProps, ReactNode, MouseEvent } from 'react';
import React, { memo } from 'react';

import type { Icon } from '../..';
import type Box from '../../Box';
import OptionAvatar from './OptionAvatar';
import OptionContent from './OptionContent';
import OptionIcon from './OptionIcon';

type OptionProps = {
  is?: ComponentProps<typeof Box>['is'];
  id?: string;
  children?: ReactNode;
  label?: ReactNode;
  focus?: boolean;
  selected?: boolean;
  className?: ComponentProps<typeof Box>['className'];
  ref?: Ref<Element>;
  icon?: ComponentProps<typeof Icon>['name'];
  avatar?: ReactNode;
  title?: string;
  value?: string;
  variant?: 'danger' | 'success' | 'warning' | 'primary';
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
};

const Option = memo(function Option({
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
  ...props
}: OptionProps) {
  return (
    <Tag
      key={id}
      id={id}
      ref={ref}
      aria-selected={selected}
      aria-label={label}
      title={title}
      onClick={onClick}
      {...props}
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
  );
});

export default Option;
