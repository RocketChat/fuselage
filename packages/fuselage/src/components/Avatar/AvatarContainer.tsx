import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';

const StyledAvatarContainer = styled(RcxView, {
  name: 'AvatarContainer',

  display: 'inline-flex',
  verticalAlign: 'middle',

  variants: {
    size: {
      x16: { width: 16, height: 16 },
      x18: { width: 18, height: 18 },
      x20: { width: 20, height: 20 },
      x24: { width: 24, height: 24 },
      x28: { width: 28, height: 28 },
      x32: { width: 32, height: 32 },
      x36: { width: 36, height: 36 },
      x40: { width: 40, height: 40 },
      x48: { width: 48, height: 48 },
      x124: { width: 124, height: 124 },
      x200: { width: 200, height: 200 },
      x332: { width: 332, height: 332 },
    },
  } as const,

  defaultVariants: {
    size: 'x36',
  },
});

export type AvatarContainerProps = {
  size?:
    | 'x16'
    | 'x18'
    | 'x20'
    | 'x24'
    | 'x28'
    | 'x32'
    | 'x36'
    | 'x40'
    | 'x48'
    | 'x124'
    | 'x200'
    | 'x332';
} & HTMLAttributes<HTMLElement>;

const AvatarContainer = ({
  size = 'x36',
  children,
  ...props
}: AvatarContainerProps) => {
  return (
    <StyledAvatarContainer role='figure' size={size} {...(props as any)}>
      {children}
    </StyledAvatarContainer>
  );
};

export default AvatarContainer;
