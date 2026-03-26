import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';

const CardControlsFrame = styled(RcxView, {
  name: 'CardControls',
  display: 'flex',
  alignItems: 'center',
  gap: '$x8',
});

export type CardControlsProps = HTMLAttributes<HTMLDivElement>;

const CardControls = ({ ...props }: CardControlsProps) => (
  <CardControlsFrame {...props} />
);

export default CardControls;
