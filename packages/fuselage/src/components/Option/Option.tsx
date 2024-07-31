import type { IconName } from '@rocket.chat/icons';
import type { Ref, ReactNode, MouseEvent, AllHTMLAttributes } from 'react';
import React, { forwardRef, memo } from 'react';

import { prevent } from '../../helpers/prevent';
import type { BoxProps } from '../Box';
import OptionAvatar from './OptionAvatar';
import OptionColumn from './OptionColumn';
import OptionContent from './OptionContent';
import OptionIcon from './OptionIcon';

/** @public */
export type OptionProps = {
  is?: BoxProps['is'];
  id?: string;
  children?: ReactNode;
  label?: ReactNode;
  focus?: boolean;
  selected?: boolean;
  className?: BoxProps['className'];
  ref?: Ref<Element>;
  icon?: IconName;
  gap?: boolean;
  avatar?: ReactNode;
  title?: string;
  disabled?: boolean;
  value?: string;
  variant?: 'danger' | 'success' | 'warning' | 'primary';
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  description?: ReactNode;
} & Omit<AllHTMLAttributes<HTMLElement>, 'label'>;

/** @public */
const Option = forwardRef<unknown, OptionProps>(function Option(
  {
    is: Tag = 'li',
    id,
    children,
    label,
    focus,
    selected,
    className,
    icon,
    gap,
    avatar,
    title,
    disabled,
    variant,
    onClick,
    description,
    ...props
  },
  ref
) {
  return (
    <Tag
      {...props}
      key={id}
      id={id}
      ref={ref}
      aria-selected={!!selected}
      aria-disabled={!!disabled}
      title={title}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        if (disabled) {
          prevent(e);
          return;
        }
        onClick?.(e);
      }}
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
      <div
        className={[
          'rcx-option__wrapper',
          !!description && 'rcx-option__wrapper--align-top',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {avatar && <OptionAvatar>{avatar}</OptionAvatar>}
        {icon && <OptionIcon name={icon} />}
        {gap && <OptionColumn />}
        {label && <OptionContent>{label}</OptionContent>}
        {label !== children && children}
      </div>
    </Tag>
  );
});

export default memo(Option);
