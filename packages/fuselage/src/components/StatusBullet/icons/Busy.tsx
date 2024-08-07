import type { StatusBulletProps } from '../StatusBullet';

const Busy = ({ size, className, ...props }: StatusBulletProps) => (
  <svg
    {...props}
    width='10'
    height='10'
    viewBox='0 0 10 10'
    className={`rcx-status-bullet rcx-status-bullet--busy ${className} ${
      size === 'small' ? 'rcx-status-bullet--small' : ''
    }`}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.13337 9.93325C7.78434 9.93325 9.93338 7.78422 9.93338 5.13325C9.93338 2.48229 7.78434 0.333252 5.13337 0.333252C2.48241 0.333252 0.333374 2.48229 0.333374 5.13325C0.333374 7.78422 2.48241 9.93325 5.13337 9.93325ZM3.53338 4.46655C3.16519 4.46655 2.86671 4.76503 2.86671 5.13322C2.86671 5.50141 3.16519 5.79989 3.53338 5.79989H6.73338C7.10157 5.79989 7.40004 5.50141 7.40004 5.13322C7.40004 4.76503 7.10157 4.46655 6.73338 4.46655H3.53338Z'
    />
  </svg>
);

export default Busy;
