import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement } from 'react';

type LowerCornerStripesProps = {
  darkMode: boolean;
};

const LowerCornerStripes = ({
  darkMode,
}: LowerCornerStripesProps): ReactElement => {
  const fillColor = darkMode ? colors.r500 : colors.b500;

  return (
    <svg
      width='144'
      height='141'
      viewBox='0 0 144 141'
      fill={fillColor}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g transform='translate(-3)'>
        <path d='M143.095 0V36.5236H111.441C108.751 36.5236 106.571 34.3444 106.571 31.6538V0H143.095Z' />
        <path d='M70.0472 41.3933V73.0471H-3V36.5234H65.1774C67.868 36.5234 70.0472 38.7027 70.0472 41.3933Z' />
        <path d='M143.094 73.0474V109.571H74.9167C72.2261 109.571 70.0469 107.392 70.0469 104.701V73.0474H143.094Z' />
        <path d='M33.5236 114.441V146.094H-3V109.571H28.6538C31.3444 109.571 33.5236 111.75 33.5236 114.441Z' />
      </g>
    </svg>
  );
};

export default LowerCornerStripes;
