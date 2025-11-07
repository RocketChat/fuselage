import type { AllHTMLAttributes } from 'react';

import { cx, cxx } from '../../helpers/composeClassNames.js';
import type { StylingBoxProps } from '../Box/index.js';
import { StylingBox } from '../Box/index.js';

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
