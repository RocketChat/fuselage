import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';
import { Icon, type IconProps } from '../Icon';

const StatesIconFrame = styled(RcxView, {
  name: 'StatesIcon',
  marginBlockEnd: '$x20',
  padding: '$x16',
  color: '$fontSecondaryInfo',
  borderRadius: '$full',
  backgroundColor: '$surfaceNeutral',

  variants: {
    variation: {
      success: {
        color: '$statusFontOnSuccess',
      },
      danger: {
        color: '$statusFontOnDanger',
      },
      warning: {
        color: '$statusFontOnWarning',
      },
      primary: {
        color: '$statusFontOnInfo',
      },
    },
  } as const,
});

export type StatesIconProps = {
  variation?: 'danger' | 'success' | 'warning' | 'primary';
} & IconProps;

const StatesIcon = ({ variation, ...props }: StatesIconProps) => (
  <StatesIconFrame variation={variation}>
    <Icon {...props} size='x32' />
  </StatesIconFrame>
);

export default StatesIcon;
