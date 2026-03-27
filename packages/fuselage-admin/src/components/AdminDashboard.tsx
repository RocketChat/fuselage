/**
 * AdminDashboard — Composes components from BOTH fuselage-ui and fuselage.
 * All share the same tokens — no duplicate CSS generated.
 */
import type { ReactNode } from 'react';
import { styled } from 'tamagui';
import { RcxView } from '@rocket.chat/fuselage';

const DashboardGrid = styled(RcxView, {
  name: 'AdminDashboardGrid',

  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '$x16',
  padding: '$x24',
});

export type AdminDashboardProps = {
  children?: ReactNode;
};

/**
 * Usage example:
 * ```tsx
 * <AdminDashboard>
 *   <MetricCard label="Users" value={1234} delta="+12%" trend="up" />
 *   <MetricCard label="Channels" value={56} delta="-3%" trend="down" />
 *   <MetricCard label="Messages" value="12.4k" trend="neutral" />
 * </AdminDashboard>
 * ```
 */
const AdminDashboard = ({ children }: AdminDashboardProps) => (
  <DashboardGrid>{children}</DashboardGrid>
);

export default AdminDashboard;
