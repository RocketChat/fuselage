import type { ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxView, RcxText } from '../../primitives';

const DividerHr = styled(RcxView, {
  name: 'DividerHr',
  marginBlock: '$x8',
  borderTopWidth: 1,
  borderTopStyle: 'solid',
  borderTopColor: '$strokeExtraLight',

  variants: {
    danger: {
      true: {
        borderTopColor: '$strokeError',
      },
    },
    vertical: {
      true: {
        width: 0,
        height: '$x20',
        marginBlock: 0,
        marginInline: '$x8',
        borderTopWidth: 0,
        borderTopStyle: 'unset',
        borderTopColor: 'transparent',
        borderLeftWidth: 1,
        borderLeftStyle: 'solid',
        borderLeftColor: '$strokeExtraLight',
      },
    },
  } as const,
});

const DividerBar = styled(RcxView, {
  name: 'DividerBar',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexGrow: 1,
  borderTopWidth: 1,
  borderTopStyle: 'solid',
  borderTopColor: '$strokeExtraLight',
});

const DividerWrapper = styled(RcxText, {
  name: 'DividerWrapper',
  marginBlock: '$x8',
  paddingInline: '$x8',
  fontFamily: '$body',
  fontSize: '$c2',
  fontWeight: '$c2',
  lineHeight: '$c2',
  letterSpacing: '$c2',
  color: '$fontDefault',
});

const DividerContainer = styled(RcxView, {
  name: 'DividerContainer',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export type DividerProps = {
  variation?: 'danger';
  children?: ReactNode;
  vertical?: boolean;
};

const Divider = ({ variation, children, vertical, ...props }: DividerProps) => {
  if (!children) {
    return (
      <DividerHr
        role='separator'
        danger={variation === 'danger' || undefined}
        vertical={vertical || undefined}
        {...(vertical && variation === 'danger' && { borderLeftColor: '$strokeError' })}
        {...props}
      />
    );
  }
  return (
    <DividerContainer role='separator' {...props}>
      <DividerBar />
      <DividerWrapper>{children}</DividerWrapper>
      <DividerBar />
    </DividerContainer>
  );
};

export default Divider;
