import { styled } from '@tamagui/core';

import { RcxText, RcxView } from '../../../primitives';
import { Icon, type IconProps } from '../../Icon';

export type MessageGenericPreviewIconProps = IconProps & {
  type: string;
};

const IconContainer = styled(RcxView, {
  name: 'MessageGenericPreviewIcon',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  alignSelf: 'center',
  width: 48,
  height: 52,
  marginBlock: 12,
  marginInlineStart: 16,
  borderRadius: '$x4',
  backgroundColor: '$surfaceNeutral',
});

const IconTitle = styled(RcxText, {
  name: 'MessageGenericPreviewIconTitle',
  fontFamily: '$body',
  fontSize: '$micro',
  fontWeight: '$micro',
  lineHeight: '$micro',
  letterSpacing: '$micro',
  maxWidth: 40,
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',
  color: '$fontDefault',
});

const MessageGenericPreviewIcon = ({
  name = 'attachment-file',
  size = 32,
  color = 'default',
  type = 'file',
}: MessageGenericPreviewIconProps) => (
  <IconContainer>
    <Icon name={name} color={color} size={size} />
    <IconTitle>{type}</IconTitle>
  </IconContainer>
);

export default MessageGenericPreviewIcon;
