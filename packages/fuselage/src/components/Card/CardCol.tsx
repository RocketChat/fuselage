import type { AllHTMLAttributes, ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';
import { CardContext } from './Card';

const CardColFrame = styled(RcxView, {
  name: 'CardCol',
  context: CardContext,
  display: 'flex',
  flexDirection: 'column',
  gap: '$x8',

  variants: {
    horizontal: {
      true: {
        rowGap: '$x4',
      },
      false: {},
    },
  } as const,
});

export type CardColProps = {
  children: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

const CardCol = ({ children, ...props }: CardColProps) => (
  <CardColFrame {...props}>{children}</CardColFrame>
);

export default CardCol;
