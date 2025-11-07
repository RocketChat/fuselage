import type { Ref, ReactNode, MouseEvent, AllHTMLAttributes } from 'react';
import { forwardRef, memo } from 'react';

import { prevent } from '../../helpers/prevent.js';
import type { BoxProps } from '../Box/index.js';
import type { IconProps } from '../Icon/index.js';

import OptionAvatar from './OptionAvatar.js';
import OptionColumn from './OptionColumn.js';
import OptionContent from './OptionContent.js';
import OptionIcon from './OptionIcon.js';

export type OptionProps = {
  is?: BoxProps['is'];
  id?: string;
  children?: ReactNode;
  label?: ReactNode;
  focus?: boolean;
  selected?: boolean;
  className?: BoxProps['className'];
  ref?: Ref<Element>;
  icon?: IconProps['name'];
  gap?: boolean;
  avatar?: ReactNode;
  title?: string;
  disabled?: boolean;
  value?: string;
  variant?: 'danger' | 'success' | 'warning' | 'primary';
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  description?: ReactNode;
} & Omit<AllHTMLAttributes<HTMLElement>, 'label'>;

/**
 * The generic `Option` item of options. Can be freely used or inside the `Options` as well.
 */
const Option = forwardRef(function Option(
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
  }: OptionProps,
  ref,
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
      onClick={(e: MouseEvent<HTMLDivElement>) => {
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
