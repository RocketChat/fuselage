import type { ReactNode } from 'react';
import { styled } from '@tamagui/core';

import { RcxText, RcxView } from '../../primitives';
import { IconButton } from '../Button';

type VariantType = 'default' | 'info' | 'success' | 'warning' | 'danger';

export type SidebarBannerProps = {
  text?: ReactNode;
  description?: ReactNode;
  onClick?: () => void;
  variant?: VariantType;
  onClose?: () => void;
  children?: ReactNode;
  addon?: ReactNode;
};

const SidebarBannerFrame = styled(RcxView, {
  name: 'SidebarBanner',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 100,
  padding: 16,
  color: '$fontTitlesLabels',
  backgroundColor: '$surfaceHover',
  // @ts-ignore
  columnGap: 4,
  variants: {
    variant: {
      default: {},
      info: {
        color: '$statusFontOnInfo',
        backgroundColor: '$statusBgInfo',
      },
      success: {
        color: '$statusFontOnSuccess',
        backgroundColor: '$statusBgSuccess',
      },
      warning: {
        color: '$statusFontOnWarning',
        backgroundColor: '$statusBgWarning',
      },
      danger: {
        color: '$statusFontOnDanger',
        backgroundColor: '$statusBgDanger',
      },
    },
  } as const,
  defaultVariants: {
    variant: 'default',
  },
});

const BannerTextFrame = styled(RcxText, {
  name: 'SidebarBannerText',
  fontFamily: '$body',
  fontSize: '$h5',
  fontWeight: '$h5',
  lineHeight: '$h5',
  letterSpacing: '$h5',
  overflowWrap: 'normal',
});

const BannerDescriptionFrame = styled(RcxText, {
  name: 'SidebarBannerDescription',
  fontFamily: '$body',
  fontSize: '$p2m',
  fontWeight: '$p2m',
  lineHeight: '$p2m',
  letterSpacing: '$p2m',
  display: 'inline-block',
  color: 'inherit',
  overflowWrap: 'normal',
});

const BannerActionsFrame = styled(RcxView, {
  name: 'SidebarBannerActions',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const SidebarBanner = ({
  text,
  description,
  onClick,
  variant = 'default',
  addon,
  onClose,
  children,
}: SidebarBannerProps) => (
  <SidebarBannerFrame variant={variant}>
    <RcxView>
      {text && <BannerTextFrame>{text}</BannerTextFrame>}
      {description && (
        <BannerDescriptionFrame
          role={onClick ? 'link' : undefined}
          focusable={!!onClick}
          onPress={onClick as any}
          cursor={onClick ? 'pointer' : undefined}
          // @ts-ignore
          borderBlockEnd={onClick ? '1px solid' : undefined}
        >
          {description}
        </BannerDescriptionFrame>
      )}
      {children}
    </RcxView>
    <BannerActionsFrame>
      {addon}
      {onClose && <IconButton onClick={onClose} tiny icon='cross' />}
    </BannerActionsFrame>
  </SidebarBannerFrame>
);

export default SidebarBanner;
