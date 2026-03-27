/**
 * StatusCard — Example using fuselage theme tokens for status colors
 * and composing existing components (Badge, FramedIcon).
 */
import type { ReactNode } from 'react';
import { styled } from 'tamagui';
import { RcxView, RcxText, Badge, FramedIcon } from '@rocket.chat/fuselage';

const StatusCardFrame = styled(RcxView, {
  name: 'StatusCard',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$x12',

  padding: '$x16',
  borderRadius: '$x4',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$strokeExtraLight',
  backgroundColor: '$surfaceLight',

  hoverStyle: {
    backgroundColor: '$surfaceHover',
  },
});

const StatusCardContent = styled(RcxView, {
  name: 'StatusCardContent',

  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  flexShrink: 1,
  gap: '$x4',
});

const StatusCardTitle = styled(RcxText, {
  name: 'StatusCardTitle',

  display: 'block',
  fontFamily: '$body',
  fontSize: '$p2b',
  fontWeight: '$p2b',
  lineHeight: '$p2b',
  letterSpacing: '$p2b',
  color: '$fontTitlesLabels',
});

const StatusCardDescription = styled(RcxText, {
  name: 'StatusCardDescription',

  display: 'block',
  fontFamily: '$body',
  fontSize: '$c1',
  fontWeight: '$c1',
  lineHeight: '$c1',
  letterSpacing: '$c1',
  color: '$fontSecondaryInfo',
});

export type StatusCardProps = {
  title: string;
  description?: string;
  status?: 'info' | 'success' | 'warning' | 'danger';
  icon: string;
  count?: number;
  children?: ReactNode;
};

const StatusCard = ({
  title,
  description,
  status = 'info',
  icon,
  count,
  children,
}: StatusCardProps) => (
  <StatusCardFrame>
    <FramedIcon
      icon={icon as any}
      info={status === 'info'}
      success={status === 'success'}
      warning={status === 'warning'}
      danger={status === 'danger'}
    />
    <StatusCardContent>
      <StatusCardTitle>{title}</StatusCardTitle>
      {description && (
        <StatusCardDescription>{description}</StatusCardDescription>
      )}
      {children}
    </StatusCardContent>
    {count !== undefined && <Badge variant='primary'>{count}</Badge>}
  </StatusCardFrame>
);

export default StatusCard;
