import { AllHTMLAttributes, FC } from 'react';

type StatusBulletProps = {
  status?: 'loading' | 'online' | 'busy' | 'away' | 'offline';
  size?: 'small' | 'large';
} & Omit<AllHTMLAttributes<HTMLElement>, 'size'>;
export const StatusBullet: FC<StatusBulletProps>;
