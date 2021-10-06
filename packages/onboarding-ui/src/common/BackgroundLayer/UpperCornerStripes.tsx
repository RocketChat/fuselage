import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement } from 'react';

type UpperCornerStripesProps = {
  darkMode: boolean;
};

const UpperCornerStripes = ({
  darkMode,
}: UpperCornerStripesProps): ReactElement => {
  const fillColor = darkMode ? colors.r500 : colors.b500;

  return (
    <svg
      width='311'
      height='319'
      viewBox='0 0 311 319'
      fill={fillColor}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M46.9639 139.562H79.75V319H39.875V146.651C39.875 142.735 43.0473 139.562 46.9639 139.562Z' />
      <path d='M0 0H39.875V92.5986C39.875 96.5152 36.7027 99.6875 32.7861 99.6875H0V0Z' />
      <path d='M79.75 0H119.625V132.474C119.625 136.39 116.453 139.562 112.536 139.562H79.75V0Z' />
      <path d='M126.714 179.438H159.5V319H119.625V186.526C119.625 182.61 122.797 179.438 126.714 179.438Z' />
      <path d='M159.5 0H199.375V172.349C199.375 176.265 196.203 179.438 192.286 179.438H159.5V0Z' />
      <path d='M206.464 219.312H239.25V319H199.375V226.401C199.375 222.485 202.547 219.312 206.464 219.312Z' />
      <path d='M286.214 259.188H319V319H279.125V266.276C279.125 262.36 282.297 259.188 286.214 259.188Z' />
      <path d='M239.25 0H279.125V212.224C279.125 216.14 275.953 219.312 272.036 219.312H239.25V0Z' />
    </svg>
  );
};

export default UpperCornerStripes;
