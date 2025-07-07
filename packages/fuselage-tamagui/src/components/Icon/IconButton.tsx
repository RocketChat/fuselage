import type { Keys } from '@rocket.chat/icons';
import nameToCharacterMapping from '@rocket.chat/icons';
import { styled, Stack, GetProps } from 'tamagui';
import { forwardRef } from 'react';

const IconButtonWrapper = styled(Stack, {
  display: 'inline-block',
  userSelect: 'none',
  verticalAlign: 'text-bottom',
  letterSpacing: 0,
  fontFamily: 'RocketChat',
  fontSize: 'inherit',
  fontWeight: 400,
  fontStyle: 'normal',
  fontVariant: 'normal',
  lineHeight: 1,
  textRendering: 'auto',

  variants: {
    size: {
      x12: { fontSize: 12 },
      x16: { fontSize: 16 },
      x20: { fontSize: 20 },
      x24: { fontSize: 24 },
      x28: { fontSize: 28 },
      x32: { fontSize: 32 },
      x36: { fontSize: 36 },
      x40: { fontSize: 40 },
    },
  } as const,

  defaultVariants: {
    size: 'x20',
  },
});

export type IconButtonProps = Omit<GetProps<typeof IconButtonWrapper>, 'name'> & {
  name: Keys;
  size?: 'x12' | 'x16' | 'x20' | 'x24' | 'x28' | 'x32' | 'x36' | 'x40';
};

export const IconButton = forwardRef<HTMLElement, IconButtonProps>(function IconButton(
  { name, size = 'x20', ...props },
  ref
) {
  return (
    <IconButtonWrapper
      as="i"
      data-icon
      data-icon-name={name}
      aria-hidden="true"
      size={size}
      ref={ref}
      {...props}
    >
      {nameToCharacterMapping[name]}
    </IconButtonWrapper>
  );
});