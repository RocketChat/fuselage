import type { ReactElement } from 'react';

const BackgroundImage = ({
  backgroundColor,
}: {
  backgroundColor: string;
}): ReactElement => (
  <svg
    width='1440'
    height='896'
    viewBox='0 0 1440 896'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0)'>
      <rect width='1440' height='896' fill='white' />
      <rect
        width='1440'
        height='901'
        transform='translate(0 -5)'
        fill={backgroundColor}
      />
      <g opacity='0.3'>
        <path
          d='M551.144 637.885C277.724 530.833 142.855 222.4 249.907 -51.0195'
          stroke='url(#paint0_linear)'
          strokeWidth='4.03643'
          strokeLinecap='round'
        />
        <path
          d='M1123.26 -80.3291C1246.5 128.592 1177.04 397.86 968.123 521.1C759.202 644.339 489.933 574.881 366.694 365.96'
          stroke='url(#paint1_linear)'
          strokeWidth='4.03643'
          strokeLinecap='round'
        />
        <path
          d='M1250.77 -155.546C1415.55 123.797 1322.68 483.829 1043.34 648.61C763.997 813.39 403.964 720.519 239.184 441.176'
          stroke='url(#paint2_linear)'
          strokeWidth='4.03643'
          strokeLinecap='round'
        />
        <path
          d='M1103.1 749.926C767.806 947.713 335.655 836.239 137.868 500.941C-59.9195 165.643 51.5547 -266.508 386.852 -464.295'
          stroke='url(#paint3_linear)'
          strokeWidth='4.03643'
          strokeLinecap='round'
        />
        <path
          d='M1073.04 710.149C1385.7 529.633 1492.83 129.834 1312.31 -182.829C1131.8 -495.491 731.996 -602.617 419.333 -422.101'
          stroke='url(#paint4_linear)'
          strokeWidth='4.03643'
          strokeLinecap='round'
        />
        <path
          d='M1211.56 -179.617C1386.57 75.0193 1319.19 425.259 1061.06 602.665'
          stroke='#F2F3F5'
          strokeWidth='4.03643'
          strokeLinecap='round'
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id='paint0_linear'
        x1='152.99'
        y1='196.516'
        x2='648.061'
        y2='390.349'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#1D74F5' />
        <stop offset='1' stopColor='#1D74F5' stopOpacity='0' />
      </linearGradient>
      <linearGradient
        id='paint1_linear'
        x1='744.978'
        y1='142.815'
        x2='968.123'
        y2='521.1'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#CBCED1' />
        <stop offset='1' stopColor='#CBCED1' stopOpacity='0' />
      </linearGradient>
      <linearGradient
        id='paint2_linear'
        x1='744.978'
        y1='142.815'
        x2='1043.34'
        y2='648.61'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFD031' />
        <stop offset='1' stopColor='#FFD031' stopOpacity='0' />
      </linearGradient>
      <linearGradient
        id='paint3_linear'
        x1='83.2972'
        y1='-285.232'
        x2='799.549'
        y2='928.988'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#CBCED1' />
        <stop offset='1' stopColor='#CBCED1' stopOpacity='0' />
      </linearGradient>
      <linearGradient
        id='paint4_linear'
        x1='702.396'
        y1='-585.527'
        x2='1356.1'
        y2='546.723'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#4EBE8C' />
        <stop offset='1' stopColor='#4EBE8C' stopOpacity='0' />
      </linearGradient>
      <clipPath id='clip0'>
        <rect width='1440' height='896' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export default BackgroundImage;
