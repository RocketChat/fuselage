/**
 * MetricCard — Example of a data-display component using fuselage tokens
 * and showing how to create variants without SCSS.
 */
import type { ReactNode } from 'react';
import { styled } from 'tamagui';
import { RcxView, RcxText } from '@rocket.chat/fuselage';

const MetricCardFrame = styled(RcxView, {
  name: 'MetricCard',

  display: 'flex',
  flexDirection: 'column',
  gap: '$x8',

  padding: '$x20',
  borderRadius: '$x8',
  backgroundColor: '$surfaceLight',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$strokeExtraLight',

  variants: {
    trend: {
      up: { borderLeftWidth: 3, borderLeftColor: '$statusFontOnSuccess' },
      down: { borderLeftWidth: 3, borderLeftColor: '$statusFontOnDanger' },
      neutral: {},
    },
  } as const,
});

const MetricCardLabel = styled(RcxText, {
  name: 'MetricCardLabel',

  display: 'block',
  fontFamily: '$body',
  fontSize: '$c1',
  fontWeight: '$c1',
  lineHeight: '$c1',
  letterSpacing: '$c1',
  color: '$fontSecondaryInfo',
});

const MetricCardValue = styled(RcxText, {
  name: 'MetricCardValue',

  display: 'block',
  fontFamily: '$body',
  fontSize: '$h2',
  fontWeight: '$h2',
  lineHeight: '$h2',
  letterSpacing: '$h2',
  color: '$fontTitlesLabels',
});

const MetricCardDelta = styled(RcxText, {
  name: 'MetricCardDelta',

  display: 'block',
  fontFamily: '$body',
  fontSize: '$c2',
  fontWeight: '$c2',
  lineHeight: '$c2',
  letterSpacing: '$c2',

  variants: {
    trend: {
      up: { color: '$statusFontOnSuccess' },
      down: { color: '$statusFontOnDanger' },
      neutral: { color: '$fontSecondaryInfo' },
    },
  } as const,
});

export type MetricCardProps = {
  label: string;
  value: string | number;
  delta?: string;
  trend?: 'up' | 'down' | 'neutral';
  children?: ReactNode;
};

const MetricCard = ({
  label,
  value,
  delta,
  trend = 'neutral',
  children,
}: MetricCardProps) => (
  <MetricCardFrame trend={trend}>
    <MetricCardLabel>{label}</MetricCardLabel>
    <MetricCardValue>{value}</MetricCardValue>
    {delta && <MetricCardDelta trend={trend}>{delta}</MetricCardDelta>}
    {children}
  </MetricCardFrame>
);

export default MetricCard;
