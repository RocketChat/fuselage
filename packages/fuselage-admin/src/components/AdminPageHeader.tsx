/**
 * AdminPageHeader — Uses primitives from fuselage + components from fuselage-ui.
 * Demonstrates cross-package composition with shared tokens.
 */
import type { ReactNode } from 'react';
import { styled } from 'tamagui';

// Primitives + base components from fuselage
import { RcxView, RcxText } from '@rocket.chat/fuselage';

// Components from sibling package

const HeaderFrame = styled(RcxView, {
  name: 'AdminPageHeader',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  paddingBlock: '$x16',
  paddingInline: '$x24',

  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  borderBottomColor: '$strokeExtraLight',

  backgroundColor: '$surfaceLight',
});

const HeaderTitle = styled(RcxText, {
  name: 'AdminPageHeaderTitle',

  fontFamily: '$body',
  fontSize: '$h3',
  fontWeight: '$h3',
  lineHeight: '$h3',
  letterSpacing: '$h3',
  color: '$fontTitlesLabels',
});

const HeaderSubtitle = styled(RcxText, {
  name: 'AdminPageHeaderSubtitle',

  display: 'block',
  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  letterSpacing: '$p2',
  color: '$fontSecondaryInfo',
});

const HeaderTitleGroup = styled(RcxView, {
  name: 'AdminPageHeaderTitleGroup',

  display: 'flex',
  flexDirection: 'column',
  gap: '$x4',
});

const HeaderActions = styled(RcxView, {
  name: 'AdminPageHeaderActions',

  display: 'flex',
  flexDirection: 'row',
  gap: '$x8',
});

export type AdminPageHeaderProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

const AdminPageHeader = ({ title, subtitle, children }: AdminPageHeaderProps) => (
  <HeaderFrame>
    <HeaderTitleGroup>
      <HeaderTitle>{title}</HeaderTitle>
      {subtitle && <HeaderSubtitle>{subtitle}</HeaderSubtitle>}
    </HeaderTitleGroup>
    {children && <HeaderActions>{children}</HeaderActions>}
  </HeaderFrame>
);

export default AdminPageHeader;
