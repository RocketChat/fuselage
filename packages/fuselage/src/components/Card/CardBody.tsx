import type { AllHTMLAttributes, CSSProperties, ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxText, RcxView } from '../../primitives';

const CardBodyFrameContent = styled(RcxView, {
  name: 'CardBodyContent',
  display: 'flex',
  flexGrow: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flexShrink: 1,
});

const CardBodyFrameText = styled(RcxText, {
  name: 'CardBodyText',
  display: 'flex',
  gap: '$x8',
  fontFamily: '$body',
  fontSize: '$p2m',
  fontWeight: '$p2m',
  lineHeight: '$p2m',
  letterSpacing: '$p2m',
  color: 'inherit',
  overflowWrap: 'normal',
});

export type CardBodyProps = {
  flexDirection?: CSSProperties['flexDirection'];
  height?: string | number;
  children: ReactNode;
} & Omit<AllHTMLAttributes<HTMLElement>, 'is'>;

const CardBody = ({
  children,
  flexDirection = 'row',
  height,
  ...props
}: CardBodyProps) => (
  <CardBodyFrameContent
    flexDirection={flexDirection}
    height={height}
    {...props}
  >
    <CardBodyFrameText>{children}</CardBodyFrameText>
  </CardBodyFrameContent>
);

export default CardBody;
