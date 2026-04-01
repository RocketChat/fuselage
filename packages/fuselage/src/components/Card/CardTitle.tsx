import type { AllHTMLAttributes, ReactNode } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../primitives';
import { LabelInfo } from '../Label/LabelInfo';

const CardTitleFrame = styled(RcxText, {
  name: 'CardTitle',
  display: 'flex',
  alignItems: 'center',
  gap: '$x8',
  fontFamily: '$body',
  color: 'inherit',
  overflowWrap: 'normal',

  variants: {
    variant: {
      h3: {
        fontSize: '$h3',
        fontWeight: '$h3',
        lineHeight: '$h3',
        letterSpacing: '$h3',
      },
      h4: {
        fontSize: '$h4',
        fontWeight: '$h4',
        lineHeight: '$h4',
        letterSpacing: '$h4',
      },
      h5: {
        fontSize: '$h5',
        fontWeight: '$h5',
        lineHeight: '$h5',
        letterSpacing: '$h5',
      },
    },
  } as const,

  defaultVariants: {
    variant: 'h4',
  },
});

export type CardTitleProps = {
  children: ReactNode;
  info?: string;
  variant?: 'h3' | 'h4' | 'h5';
} & Omit<AllHTMLAttributes<HTMLElement>, 'is'>;

const CardTitle = ({
  children,
  info,
  variant = 'h4',
  ...props
}: CardTitleProps) => (
  <CardTitleFrame
    role='heading'
    aria-level={variant === 'h3' ? 3 : variant === 'h4' ? 4 : 5}
    variant={variant}
    {...props}
  >
    {children}
    {info && <LabelInfo title={info} />}
  </CardTitleFrame>
);

export default CardTitle;
