import type { AllHTMLAttributes, ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxText } from '../../primitives';

const StatesLinkText = styled(RcxText, {
  name: 'StatesLinkText',
  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  letterSpacing: '$p2',
  color: '$fontInfo',
  overflowWrap: 'normal',
});

export type StatesLinkProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLAnchorElement>;

const StatesLink = ({ children, ...props }: StatesLinkProps) => (
  <a
    {...props}
    style={{ marginBlockStart: 16, marginBlockEnd: 16, textDecoration: 'none' }}
  >
    <StatesLinkText>{children}</StatesLinkText>
  </a>
);

export default StatesLink;
