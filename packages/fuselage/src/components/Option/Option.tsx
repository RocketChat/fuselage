import type {
  Ref,
  ComponentProps,
  ReactNode,
  MouseEvent,
  AllHTMLAttributes,
} from 'react';
import { forwardRef, memo } from 'react';

import type { Icon } from '../..';
import { OptionColumn } from '../..';
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
const Option = memo(
  forwardRef(
    (
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
    ) => (
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
    ),
  ),
);

export default Option;
