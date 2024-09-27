import type { AllHTMLAttributes } from 'react';

import Away from './icons/Away';
import Busy from './icons/Busy';
import Disabled from './icons/Disabled';
import Loading from './icons/Loading';
import Offline from './icons/Offline';
import Online from './icons/Online';

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
export { StatusBullet };
