import type { AllHTMLAttributes } from 'react';

import { cx, cxx } from '../../helpers/composeClassNames';
import { StylingBox, type StylingBoxProps } from '../Box';

type SkeletonProps = Omit<StylingBoxProps, 'children'> & {
  variant?: 'text' | 'rect' | 'circle';
} & AllHTMLAttributes<HTMLSpanElement>;

const Skeleton = ({ variant = 'text', ...props }: SkeletonProps) => (
  <StylingBox {...props}>
    <span
      className={cx(
        cxx('rcx-skeleton')({
          text: variant === 'text',
          rect: variant === 'rect',
          circle: variant === 'circle',
        }),
      )}
    />
  </StylingBox>
);
export { Skeleton };
