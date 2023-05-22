import type { AllHTMLAttributes } from 'react';
import React from 'react';

import { useStyleSheet } from '../../hooks/useStyleSheet';
import styleSheet from './StatusBullet.styles.scss';
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

const StatusBullet = ({ status = 'loading', ...props }: StatusBulletProps) => {
  useStyleSheet(styleSheet);

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
