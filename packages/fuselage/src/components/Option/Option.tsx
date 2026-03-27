import type { Ref, ReactNode, MouseEvent, AllHTMLAttributes } from 'react';
import { forwardRef, memo } from 'react';
import { styled } from 'tamagui';

import { prevent } from '../../helpers/prevent';
import { RcxText, RcxView } from '../../primitives';
import type { BoxProps } from '../Box';
import type { IconProps } from '../Icon';

import OptionAvatar from './OptionAvatar';
import OptionColumn from './OptionColumn';
import OptionContent from './OptionContent';
import OptionIcon from './OptionIcon';

// .rcx-option
const OptionFrame = styled(RcxView, {
  name: 'OptionFrame',

  display: 'list-item',
  margin: 0,
  cursor: 'pointer',

  paddingBlock: '$x4',
  paddingInlineStart: '$x12',
  paddingInlineEnd: '$x24',

  listStyleType: 'none',

  color: '$fontDefault',

  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  letterSpacing: '$p2',

  hoverStyle: {
    backgroundColor: '$surfaceHover',
  },

  variants: {
    focus: {
      true: {
        backgroundColor: '$surfaceHover',
      },
    },

    selected: {
      true: {
        backgroundColor: '$surfaceSelected',
      },
    },

    isDisabled: {
      true: {
        cursor: 'not-allowed',
        color: '$fontDisabled',
      },
    },

    variant: {
      success: {
        color: '$statusFontOnSuccess',
      },
      danger: {
        color: '$statusFontOnDanger',
      },
      warning: {
        color: '$statusFontOnWarning',
      },
      primary: {
        color: '$statusFontOnInfo',
      },
    },
  } as const,
});

// .rcx-option__wrapper
const OptionWrapper = styled(RcxText, {
  name: 'OptionWrapper',

  display: 'flex',
  alignItems: 'center',

  marginInline: -2,
  paddingInline: '$x4',

  variants: {
    alignTop: {
      true: {
        alignItems: 'flex-start',
      },
    },
  } as const,
});

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
  value?: string | number;
  variant?: 'danger' | 'success' | 'warning' | 'primary';
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  description?: ReactNode;
} & Omit<
  AllHTMLAttributes<HTMLElement>,
  | 'is'
  | 'id'
  | 'children'
  | 'label'
  | 'selected'
  | 'className'
  | 'ref'
  | 'icon'
  | 'gap'
  | 'avatar'
  | 'title'
  | 'disabled'
  | 'value'
  | 'variant'
  | 'onClick'
  | 'description'
>;

/**
 * The generic `Option` item of options. Can be freely used or inside the `Options` as well.
 */
const Option = forwardRef<Element, OptionProps>(function Option(
  {
    is: Tag,
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
    <OptionFrame
      {...(Tag ? { tag: Tag as any } : {})}
      {...(props as any)}
      style={{ listStyleType: 'none' }}
      key={id}
      id={id}
      ref={ref as any}
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
      focus={focus || undefined}
      selected={selected || undefined}
      isDisabled={disabled || undefined}
      variant={variant}
    >
      <OptionWrapper alignTop={!!description || undefined}>
        {avatar && <OptionAvatar>{avatar}</OptionAvatar>}
        {icon && <OptionIcon name={icon} />}
        {gap && <OptionColumn />}
        {label && <OptionContent>{label}</OptionContent>}
        {label !== children && children}
      </OptionWrapper>
    </OptionFrame>
  );
});

export default memo(Option);
