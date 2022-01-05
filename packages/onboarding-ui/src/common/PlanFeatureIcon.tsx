import type { ReactElement } from 'react';

const PlanFeatureIcon = ({ color }: { color: string }): ReactElement => (
  <svg
    width='13'
    height='auto'
    viewBox='0 0 16 13'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M1 7L5 11L15 1' stroke={color} stroke-width='2' />
  </svg>
);

export default PlanFeatureIcon;
