/**
 * InfoPanel — Example of a new component built on fuselage primitives + tokens.
 *
 * Uses: RcxView (layout), RcxText (text), existing fuselage components (Icon, Button),
 * and Tamagui theme tokens ($surfaceTint, $fontDefault, etc.)
 */
import type { ReactNode } from 'react';
import { styled } from 'tamagui';
import { RcxView, RcxText, Icon } from '@rocket.chat/fuselage';

const InfoPanelFrame = styled(RcxView, {
  name: 'InfoPanel',

  display: 'flex',
  flexDirection: 'column',
  gap: '$x16',

  padding: '$x24',
  borderRadius: '$x8',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$strokeExtraLight',
  backgroundColor: '$surfaceTint',
});

const InfoPanelHeader = styled(RcxView, {
  name: 'InfoPanelHeader',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$x12',
});

const InfoPanelTitle = styled(RcxText, {
  name: 'InfoPanelTitle',

  fontFamily: '$body',
  fontSize: '$h4',
  fontWeight: '$h4',
  lineHeight: '$h4',
  letterSpacing: '$h4',
  color: '$fontTitlesLabels',
});

const InfoPanelContent = styled(RcxText, {
  name: 'InfoPanelContent',

  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  letterSpacing: '$p2',
  color: '$fontDefault',
});

const InfoPanelActions = styled(RcxView, {
  name: 'InfoPanelActions',

  display: 'flex',
  flexDirection: 'row',
  gap: '$x8',
});

export type InfoPanelProps = {
  title: string;
  icon?: string;
  children?: ReactNode;
  actions?: ReactNode;
};

const InfoPanel = ({ title, icon, children, actions }: InfoPanelProps) => (
  <InfoPanelFrame>
    <InfoPanelHeader>
      {icon && <Icon name={icon as any} size='x20' />}
      <InfoPanelTitle>{title}</InfoPanelTitle>
    </InfoPanelHeader>
    {children && <InfoPanelContent>{children}</InfoPanelContent>}
    {actions && <InfoPanelActions>{actions}</InfoPanelActions>}
  </InfoPanelFrame>
);

export default InfoPanel;
