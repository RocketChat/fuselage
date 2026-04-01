import { useResizeObserver } from '@rocket.chat/fuselage-hooks';
import type { ReactElement, ReactNode } from 'react';
import { styled, Text } from '@tamagui/core';

import { RcxView, RcxText } from '../../primitives';
import { Icon, type IconProps } from '../Icon';

// Outer section — RcxView for layout
const CalloutBase = styled(RcxView, {
  name: 'CalloutBase',

  display: 'flex',
  flexDirection: 'row',

  padding: '$x12',

  borderWidth: 1,
  borderStyle: 'solid',
  // default border: colors.font(secondary-info)
  borderColor: '$fontSecondaryInfo',
  borderRadius: '$x4',

  // bg: colors.surface(light)
  backgroundColor: '$surfaceLight',

  variants: {
    type: {
      info: { borderColor: '$statusFontOnInfo' },
      success: { borderColor: '$statusFontOnSuccess' },
      warning: { borderColor: '$statusFontOnWarning' },
      danger: { borderColor: '$statusFontOnDanger' },
    },
  } as const,
});

// Icon wrapper — color follows type
const CalloutIcon = styled(RcxView, {
  name: 'CalloutIcon',

  variants: {
    type: {
      info: { color: '$statusFontOnInfo' },
      success: { color: '$statusFontOnSuccess' },
      warning: { color: '$statusFontOnWarning' },
      danger: { color: '$statusFontOnDanger' },
    },
  } as const,
});

// Wrapper — flex:1 1 0, overflow hidden, margin-inline-start 12
const CalloutWrapper = styled(RcxView, {
  name: 'CalloutWrapper',

  display: 'block',
  overflow: 'hidden',
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 0,

  marginInlineStart: '$x12',

  variants: {
    large: {
      true: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
      },
    },
  } as const,
});

// Wrapper content — flex column
const CalloutWrapperContent = styled(RcxView, {
  name: 'CalloutWrapperContent',

  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'column',
  gap: '$x4',
});

// Title — p2b font scale, text ellipsis
const CalloutTitle = styled(RcxText, {
  name: 'CalloutTitle',

  display: 'block',
  width: '100%' as any,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  fontFamily: '$body',
  fontSize: '$p2b',
  fontWeight: '$p2b',
  lineHeight: '$p2b',
  letterSpacing: '$p2b',

  // text color: colors.font(default)
  color: '$fontDefault',
});

// Content — p2 font scale, display block
const CalloutContent = styled(RcxText, {
  name: 'CalloutContent',

  display: 'block',

  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  letterSpacing: '$p2',

  // text color: colors.font(default)
  color: '$fontDefault',
});

export type CalloutProps = {
  type?: 'info' | 'success' | 'warning' | 'danger';
  title?: ReactNode;
  children?: ReactNode;
  icon?: IconProps['name'];
  actions?: ReactElement;
  [key: string]: any;
};

const WRAPPER_LIMIT_SIZE = 420;

/**
 * The `Callout` is used to get the user's attention explaining something important in the content of the current page.
 */
const Callout = ({
  type,
  title,
  children,
  icon,
  actions,
  ...props
}: CalloutProps) => {
  const { ref, borderBoxSize } = useResizeObserver();
  const isLarge =
    borderBoxSize.inlineSize && borderBoxSize.inlineSize >= WRAPPER_LIMIT_SIZE;

  const defaultIcon =
    (type === 'info' && 'info-circled') ||
    (type === 'success' && 'checkmark-circled') ||
    (type === 'warning' && 'warning') ||
    (type === 'danger' && 'ban') ||
    'info-circled';

  return (
    <CalloutBase ref={ref as any} role='alert' type={type} {...(props as any)}>
      <CalloutIcon type={type}>
        <Icon name={icon || defaultIcon} size='x20' />
      </CalloutIcon>
      <CalloutWrapper large={isLarge || undefined}>
        <CalloutWrapperContent>
          {title && <RcxView overflow='hidden'><CalloutTitle>{title}</CalloutTitle></RcxView>}
          {children && <RcxView><CalloutContent>{children}</CalloutContent></RcxView>}
        </CalloutWrapperContent>
        {actions}
      </CalloutWrapper>
    </CalloutBase>
  );
};

export default Callout;
