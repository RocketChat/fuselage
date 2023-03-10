import type {
  Ref,
  ComponentProps,
  ReactNode,
  MouseEvent,
  AllHTMLAttributes,
} from 'react';
import React, { memo } from 'react';

import type { Icon } from '../..';
import { prevent } from '../../helpers/prevent';
import type Box from '../Box';
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
  disabled?: boolean;
  value?: string;
  variant?: 'danger' | 'success' | 'warning' | 'primary';
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
} & AllHTMLAttributes<HTMLElement>;

const Option = memo(
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
    disabled,
    onClick,
    variant,
    ...options
  }: OptionProps) => (
    <Tag
      key={id}
      id={id}
      ref={ref}
      aria-selected={selected}
      aria-disabled={String(disabled)}
      title={title}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        if (disabled) {
          prevent(e);
          return;
        }
        onClick?.(e);
      }}
      {...options}
      className={[
        'rcx-option',
        className,
        focus && 'rcx-option--focus',
        selected && 'rcx-option--selected',
        disabled && 'rcx-option--disabled',
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
