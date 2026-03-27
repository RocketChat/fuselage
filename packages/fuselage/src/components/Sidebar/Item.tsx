import type { AllHTMLAttributes, ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxInteractive, RcxText, RcxView } from '../../primitives';
import type { BoxProps } from '../Box';
import type { IconProps } from '../Icon';
import { Icon as FuselageIcon } from '../Icon';

import type { SidebarActionProps } from './SidebarActions';
import { SidebarAction, SidebarActions } from './SidebarActions';

// sidebar-base: flex, align-items:center, border-radius:small, font-scale p2
const SidebarBase = styled(RcxView, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: '$x2',
});

// SidebarItemContainer
export type SidebarItemContainerProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

const SidebarItemContainerFrame = styled(SidebarBase, {
  name: 'SidebarItemContainer',
  flexGrow: 0,
  flexShrink: 0,
  marginInline: 2,
});

export const SidebarItemContainer = (props: SidebarItemContainerProps) => (
  <SidebarItemContainerFrame {...(props as any)} />
);

// SidebarItemMenu
export type SidebarItemMenuProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

const SidebarItemMenuFrame = styled(RcxView, {
  name: 'SidebarItemMenu',
  position: 'relative',
  flexShrink: 0,
  width: 0,
  height: '100%',
  opacity: 0,
  // On parent hover, these are overridden via group
  '$group-sidebarItem-hover': {
    position: 'static' as any,
    width: 20,
    marginInline: 4,
    opacity: 1,
  },
});

export const SidebarItemMenu = (props: SidebarItemMenuProps) => (
  <SidebarItemMenuFrame {...(props as any)} />
);

// SidebarItemContent
export type SidebarItemContentProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

const SidebarItemContentFrame = styled(RcxView, {
  name: 'SidebarItemContent',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flexWrap: 'wrap',
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: '100%',
});

export const SidebarItemContent = ({
  className: _className,
  ...props
}: SidebarItemContentProps) => (
  <SidebarItemContentFrame {...(props as any)} />
);

// SidebarItemTitle
export type SidebarItemTitleProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

const SidebarItemTitleFrame = styled(RcxText, {
  name: 'SidebarItemTitle',
  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  letterSpacing: '$p2',
  display: 'block',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: '1%',
  marginInline: 2,
});

export const SidebarItemTitle = ({
  className: _className,
  ...props
}: SidebarItemTitleProps) => (
  <SidebarItemTitleFrame {...(props as any)} />
);

// SidebarItemTime
export type SidebarItemTimeProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

const SidebarItemTimeFrame = styled(RcxText, {
  name: 'SidebarItemTime',
  fontFamily: '$body',
  fontSize: '$micro',
  fontWeight: '$micro',
  lineHeight: '$micro',
  letterSpacing: '$micro',
  overflowWrap: 'normal',
  marginInline: 4,
});

export const SidebarItemTime = ({
  className: _className,
  ...props
}: SidebarItemTimeProps) => (
  <SidebarItemTimeFrame {...(props as any)} />
);

// SidebarItemBadge
export type SidebarItemBadgeProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

const SidebarItemBadgeFrame = styled(RcxView, {
  name: 'SidebarItemBadge',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginInline: 4,
});

export const SidebarItemBadge = ({
  className: _className,
  ...props
}: SidebarItemBadgeProps) => (
  <SidebarItemBadgeFrame {...(props as any)} />
);

// SidebarItemSubtitle
export type SidebarItemSubtitleProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

const SidebarItemSubtitleFrame = styled(RcxText, {
  name: 'SidebarItemSubtitle',
  fontFamily: '$body',
  fontSize: '$c1',
  fontWeight: '$c1',
  lineHeight: '$c1',
  letterSpacing: '$c1',
  display: 'block',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: '1%',
  marginInline: 2,
});

export const SidebarItemSubtitle = ({
  className: _className,
  ...props
}: SidebarItemSubtitleProps) => (
  <SidebarItemSubtitleFrame {...(props as any)} />
);

// SidebarItemWrapper
export type SidebarItemWrapperProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

const SidebarItemWrapperFrame = styled(RcxView, {
  name: 'SidebarItemWrapper',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: '$x2',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flexGrow: 1,
  flexShrink: 0,
  marginInline: -2,
});

export const SidebarItemWrapper = ({
  className: _className,
  ...props
}: SidebarItemWrapperProps) => (
  <SidebarItemWrapperFrame {...(props as any)} />
);

// SidebarItemIcon
export type SidebarItemIconProps = {
  children?: ReactNode;
  className?: string;
  highlighted?: boolean;
  icon: IconProps['name'];
} & Omit<AllHTMLAttributes<HTMLElement>, 'name' | 'is'>;

const SidebarItemIconFrame = styled(RcxView, {
  name: 'SidebarItemIcon',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: 16,
  marginInline: 2,
  variants: {
    highlighted: {
      true: {
        color: '$fontTitlesLabels',
      },
    },
  } as const,
});

export const SidebarItemIcon = ({
  highlighted,
  children,
  icon,
  className: _className,
  ...props
}: SidebarItemIconProps) => (
  <SidebarItemIconFrame highlighted={highlighted || undefined} {...(props as any)}>
    {children || <FuselageIcon size='x16' name={icon} />}
  </SidebarItemIconFrame>
);

// SidebarItemAvatar
export type SidebarItemAvatarProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

const SidebarItemAvatarInner = styled(RcxView, {
  name: 'SidebarItemAvatarInner',
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 0,
  flexShrink: 0,
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const SidebarItemAvatar = ({ ...props }: SidebarItemAvatarProps) => (
  <SidebarItemContainer>
    <SidebarItemAvatarInner {...(props as any)} />
  </SidebarItemContainer>
);

export const SidebarItemActions = SidebarActions;

export type SidebarItemActionProps = SidebarActionProps;

export const SidebarItemAction = (props: SidebarItemActionProps) => (
  <SidebarAction {...props} />
);

// SidebarItem - the main item component
export type SidebarItemProps = {
  selected?: boolean;
  highlighted?: boolean;
  clickable?: boolean;
  featured?: boolean;
  is?: BoxProps['is'];
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

// Base frame for sidebar item
const SidebarItemFrame = styled(RcxView, {
  name: 'SidebarItem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: '$x2',
  paddingBlock: 4,
  paddingInline: 16,
  // @ts-ignore
  textDecoration: 'none',
  color: '$fontDefault',
  variants: {
    highlighted: {
      true: {
        color: '$fontTitlesLabels',
        fontWeight: '600',
      },
    },
    selected: {
      true: {
        backgroundColor: '$surfaceSelected',
      },
    },
    featured: {
      true: {
        color: '$fontPureWhite',
        backgroundColor: '$surfaceFeatured',
      },
    },
  } as const,
});

const SidebarItemClickable = styled(SidebarItemFrame, {
  name: 'SidebarItemClickable',
  cursor: 'pointer',
  focusable: true,
  hoverStyle: {
    backgroundColor: '$surfaceHover',
  },
  pressStyle: {
    backgroundColor: '$surfaceSelected',
  },
  focusVisibleStyle: {
    // @ts-ignore
    outlineOffset: -1,
    boxShadow: 'none',
  },
});

/**
 * Item component to be used inside Sidebar.
 */
export const SidebarItem = Object.assign(
  ({
    selected,
    highlighted,
    clickable,
    featured,
    is: Tag,
    children,
    ...props
  }: SidebarItemProps) => {
    const Frame = (clickable || Tag === 'a') ? SidebarItemClickable : SidebarItemFrame;

    // If Tag is 'a', use native <a> for links per agent rules
    if (Tag === 'a') {
      return (
        <a
          className='rcx-box'
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 2,
            paddingBlock: 4,
            paddingInline: 16,
            textDecoration: 'none',
            cursor: 'pointer',
            color: highlighted ? 'var(--fontTitlesLabels)' : 'var(--fontDefault)',
            fontWeight: highlighted ? 600 : undefined,
            backgroundColor: selected
              ? 'var(--surfaceSelected)'
              : featured
                ? 'var(--surfaceFeatured)'
                : undefined,
          }}
          {...(props as any)}
        >
          <SidebarItemWrapperFrame>{children}</SidebarItemWrapperFrame>
        </a>
      );
    }

    return (
      <Frame
        group='sidebarItem'
        selected={selected || undefined}
        highlighted={highlighted || undefined}
        featured={featured || undefined}
        {...(props as any)}
      >
        <SidebarItemWrapperFrame>{children}</SidebarItemWrapperFrame>
      </Frame>
    );
  },
  {
    Menu: SidebarItemMenu,
    Container: SidebarItemContainer,
    Content: SidebarItemContent,
    Title: SidebarItemTitle,
    Subtitle: SidebarItemSubtitle,
    Time: SidebarItemTime,
    Wrapper: SidebarItemWrapper,
    Icon: SidebarItemIcon,
    Avatar: SidebarItemAvatar,
    Actions: SidebarItemActions,
    Action: SidebarItemAction,
    Badge: SidebarItemBadge,
  },
);
