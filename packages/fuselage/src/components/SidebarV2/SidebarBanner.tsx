import type { AllHTMLAttributes, ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxText, RcxView } from '../../primitives';
import { IconButton } from '../Button';

type VariantType = 'default' | 'info' | 'success' | 'warning' | 'danger';

type SidebarBannerProps = {
  title?: ReactNode;
  linkText?: string;
  linkProps?: AllHTMLAttributes<HTMLAnchorElement>;
  onClick?: () => void;
  variant?: VariantType;
  onClose?: () => void;
  children?: ReactNode;
  addon?: ReactNode;
};

const BannerFrame = styled(RcxView, {
  name: 'SidebarV2Banner',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 16,
  color: '$fontTitlesLabels',
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  borderBottomColor: '$strokeLight',
  backgroundColor: '$surfaceSidebar',
  gap: 12,
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

const BannerContent = styled(RcxView, {
  name: 'SidebarV2BannerContent',
});

const BannerTitle = styled(RcxText, {
  name: 'SidebarV2BannerTitle',
  tag: 'h5',
  fontFamily: '$body',
  fontSize: '$h5',
  fontWeight: '$h5',
  lineHeight: '$h5',
  letterSpacing: '$h5',
  margin: 0,
  padding: 0,
  overflowWrap: 'normal',
});

const BannerAddon = styled(RcxView, {
  name: 'SidebarV2BannerAddon',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const SidebarBanner = ({
  title,
  linkText,
  linkProps,
  variant = 'default',
  addon,
  onClose,
  children,
  ...props
}: SidebarBannerProps) => (
  <BannerFrame variant={variant} {...(props as any)}>
    <BannerContent>
      {title && <BannerTitle>{title}</BannerTitle>}
      {linkText && (
        <a
          className='rcx-box'
          style={{
            fontFamily: 'var(--f-family-body)',
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '20px',
            display: 'inline-block',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          {...linkProps}
        >
          {linkText}
        </a>
      )}
      {children}
    </BannerContent>
    <BannerAddon>
      {addon}
      {onClose && <IconButton onClick={onClose} tiny icon='cross' />}
    </BannerAddon>
  </BannerFrame>
);
