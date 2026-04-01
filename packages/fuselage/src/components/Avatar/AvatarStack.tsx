import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

const StyledAvatarStack = styled(RcxView, {
  name: 'AvatarStack',

  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'center',

  backgroundColor: '$surfaceLight',
});

const AvatarStackItem = styled(RcxView, {
  name: 'AvatarStackItem',

  marginBlock: 'auto',
  marginInline: -2,
});

export type AvatarStackProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const AvatarStack = ({ children, ...props }: AvatarStackProps) => {
  const reversed = flattenChildren(children).reverse();

  return (
    <StyledAvatarStack {...(props as any)}>
      {reversed.map((child, index) => (
        <AvatarStackItem key={index}>{child}</AvatarStackItem>
      ))}
    </StyledAvatarStack>
  );
};

export default AvatarStack;
