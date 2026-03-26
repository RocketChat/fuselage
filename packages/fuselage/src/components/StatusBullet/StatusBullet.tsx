import { css } from '@rocket.chat/css-in-js';
import type { AllHTMLAttributes } from 'react';

import Away from './icons/Away';
import Busy from './icons/Busy';
import Disabled from './icons/Disabled';
import Loading from './icons/Loading';
import Offline from './icons/Offline';
import Online from './icons/Online';

export const statusBulletBaseStyle = css`
  display: inline-block;
  flex-grow: 0;
  flex-shrink: 0;
  border-radius: 9999px;
  background-size: contain;
  width: 0.75rem;
  height: 0.75rem;
`;

export const statusBulletSmallStyle = css`
  width: 0.625rem;
  height: 0.625rem;
`;

export const statusBulletOnlineStyle = css`
  fill: var(--rcx-color-status-bullet-online, var(--statusBulletOnline));
`;

export const statusBulletAwayStyle = css`
  fill: var(--rcx-color-status-bullet-away, var(--statusBulletAway));
`;

export const statusBulletBusyStyle = css`
  fill: var(--rcx-color-status-bullet-busy, var(--statusBulletBusy));
`;

export const statusBulletDisabledStyle = css`
  fill: var(--rcx-color-status-bullet-disabled, var(--statusBulletDisabled));
`;

export const statusBulletOfflineStyle = css`
  stroke: var(--rcx-color-status-bullet-offline, var(--statusBulletOffline));
`;

export const statusBulletLoadingStyle = css`
  stroke: var(--rcx-color-status-bullet-loading, var(--statusBulletLoading));
`;

export type StatusBulletProps = {
  status?: 'loading' | 'online' | 'busy' | 'away' | 'offline' | 'disabled';
  size?: 'small' | 'large';
} & Omit<AllHTMLAttributes<SVGElement>, 'size'>;

/**
 * The `StatusBullet` is used to inform the user status.
 */
const StatusBullet = ({ status = 'loading', ...props }: StatusBulletProps) => {
  switch (status) {
    case 'online':
      return <Online {...props} />;
    case 'away':
      return <Away {...props} />;
    case 'busy':
      return <Busy {...props} />;
    case 'disabled':
      return <Disabled {...props} />;
    case 'offline':
      return <Offline {...props} />;
    default:
      return <Loading {...props} />;
  }
};

export default StatusBullet;
