import type { StatusBulletProps } from '../StatusBullet';
import {
  statusBulletBaseStyle,
  statusBulletOfflineStyle,
  statusBulletSmallStyle,
} from '../StatusBullet';

const Offline = ({ size, className, ...props }: StatusBulletProps) => (
  <svg
    {...props}
    width='12'
    height='12'
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={[
      statusBulletBaseStyle,
      statusBulletOfflineStyle,
      size === 'small' && statusBulletSmallStyle,
      className,
    ]
      .filter(Boolean)
      .join(' ')}
  >
    <circle
      cx='6'
      cy='6'
      r='5'
      className={statusBulletOfflineStyle}
      strokeWidth='2'
    />
  </svg>
);

export default Offline;
