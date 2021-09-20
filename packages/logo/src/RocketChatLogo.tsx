import { useUniqueId } from '@rocket.chat/fuselage-hooks';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement, SVGAttributes } from 'react';

type RocketChatLogoProps = {
  color?: SVGAttributes<SVGSVGElement>['fill'];
};

const RocketChatLogo = ({
  color = colors.r500,
}: RocketChatLogoProps): ReactElement => {
  const titleId = useUniqueId();

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 180 30'
      fill={color}
      aria-labelledby={titleId}
      role='img'
      width='100%'
    >
      <title id={titleId}>Rocket.Chat</title>
      <path d='M173.243 3.53369H176.613V8.14872H179.731V11.185H176.613V19.4313H179.562V22.4125C179.085 22.5238 178.495 22.58 177.821 22.58C174.76 22.58 173.242 20.9925 173.242 17.8163V3.53369H173.243Z' />
      <path d='M166.878 10.1826V8.14881H170.248V22.1889H166.878V20.1551C166.4 21.5201 164.688 22.4951 162.356 22.4951C160.363 22.4951 158.676 21.7989 157.3 20.4064C155.952 18.9851 155.277 17.2589 155.277 15.1689C155.277 13.0788 155.952 11.3526 157.3 9.95882C158.676 8.53756 160.361 7.84131 162.356 7.84131C164.686 7.84256 166.4 8.81756 166.878 10.1826ZM165.866 18.2339C166.709 17.4264 167.13 16.3951 167.13 15.1701C167.13 13.9451 166.709 12.9138 165.866 12.1051C165.052 11.2976 164.012 10.8788 162.805 10.8788C161.598 10.8788 160.615 11.2963 159.799 12.1051C159.013 12.9126 158.62 13.9438 158.62 15.1701C158.62 16.3964 159.013 17.4264 159.799 18.2339C160.613 19.0414 161.596 19.4601 162.805 19.4601C164.014 19.4601 165.052 19.0414 165.866 18.2339Z' />
      <path d='M42.1484 22.189V8.14887H45.4907V10.2376C46.1649 8.76137 47.71 7.87012 49.7037 7.87012C50.0969 7.87012 50.4347 7.89762 50.7145 7.95387V11.1851C50.2935 11.1014 49.8159 11.0464 49.3105 11.0464C46.979 11.0464 45.4907 12.4951 45.4907 14.8077V22.1902H42.1484V22.189Z' />
      <path d='M51.5576 15.1688C51.5576 13.0788 52.3163 11.2963 53.8047 9.87499C55.293 8.45373 57.1192 7.72998 59.2818 7.72998C61.4444 7.72998 63.2705 8.45373 64.7589 9.87499C66.2473 11.2963 67.0059 13.0788 67.0059 15.1688C67.0059 17.2575 66.2473 19.0413 64.7589 20.4613C63.2705 21.8826 61.4444 22.6063 59.2818 22.6063C57.1192 22.6063 55.293 21.8826 53.8047 20.4613C52.3163 19.0413 51.5576 17.2575 51.5576 15.1688ZM62.3997 18.3163C63.2428 17.4525 63.6637 16.4213 63.6637 15.1688C63.6637 13.915 63.2428 12.8838 62.3997 12.0488C61.5566 11.185 60.5181 10.7675 59.2818 10.7675C58.0177 10.7675 56.9793 11.185 56.1362 12.0488C55.322 12.885 54.8998 13.915 54.8998 15.1688C54.8998 16.4225 55.3208 17.4525 56.1362 18.3163C56.9793 19.1525 58.0177 19.5701 59.2818 19.5701C60.5181 19.5701 61.5566 19.1525 62.3997 18.3163Z' />
      <path d='M81.0218 9.12395V12.4665C79.8144 11.324 78.3538 10.739 76.6688 10.739C75.3493 10.739 74.2529 11.1565 73.3833 11.9927C72.5125 12.829 72.0915 13.8877 72.0915 15.1402C72.0915 16.394 72.5125 17.4528 73.3833 18.2878C74.2541 19.124 75.3493 19.5415 76.6688 19.5415C78.3828 19.5415 79.8422 18.9565 81.0218 17.814V21.1565C79.8422 22.104 78.3261 22.5778 76.4722 22.5778C74.2819 22.5778 72.4557 21.8815 70.9674 20.4603C69.479 19.039 68.748 17.284 68.748 15.139C68.748 12.994 69.4777 11.239 70.9674 9.81771C72.4557 8.39645 74.2819 7.7002 76.4722 7.7002C78.2971 7.7027 79.8144 8.17645 81.0218 9.12395Z' />
      <path d='M83.5215 22.1888V3.53369H86.8637V14.1375L91.6388 8.14747H95.4587L90.0938 14.8613L95.9074 22.1875H91.9753L86.8637 15.6963V22.1875H83.5215V22.1888Z' />
      <path d='M95.9922 15.1685C95.9922 12.9673 96.6664 11.1847 98.0426 9.84724C99.4189 8.48223 101.188 7.81348 103.323 7.81348C105.374 7.81348 107.031 8.48223 108.295 9.84724C109.587 11.1847 110.233 12.856 110.233 14.8335C110.233 15.251 110.205 15.6698 110.176 16.031H99.3344C99.4466 18.2598 101.104 19.681 103.604 19.681C105.824 19.681 107.509 19.1523 108.688 18.0648V21.1848C107.312 22.1323 105.57 22.6061 103.464 22.6061C101.245 22.6061 99.4201 21.9373 98.0439 20.6286C96.6677 19.291 95.9934 17.5085 95.9934 15.3073V15.1685H95.9922ZM106.805 13.6648C106.805 12.8573 106.469 12.1323 105.795 11.5472C105.12 10.9622 104.306 10.656 103.323 10.656C102.283 10.656 101.385 10.9622 100.627 11.5472C99.8688 12.1323 99.4756 12.8285 99.4201 13.6648H106.805Z' />
      <path d='M112.774 3.53369H116.144V8.14872H119.262V11.185H116.144V19.4313H119.093V22.4125C118.615 22.5238 118.025 22.58 117.351 22.58C114.29 22.58 112.772 20.9925 112.772 17.8163V3.53369H112.774Z' />
      <path d='M122.595 18.5049C121.477 18.5049 120.571 19.3999 120.571 20.5036C120.571 21.6074 121.477 22.5024 122.595 22.5024C123.713 22.5024 124.619 21.6074 124.619 20.5036C124.619 19.3999 123.713 18.5049 122.595 18.5049Z' />
      <path d='M137.836 9.12395V12.4665C136.629 11.324 135.168 10.739 133.483 10.739C132.164 10.739 131.067 11.1565 130.198 11.9927C129.327 12.829 128.906 13.8877 128.906 15.1402C128.906 16.394 129.327 17.4528 130.198 18.2878C131.069 19.124 132.164 19.5415 133.483 19.5415C135.196 19.5415 136.657 18.9565 137.836 17.814V21.1565C136.657 22.104 135.141 22.5778 133.287 22.5778C131.096 22.5778 129.27 21.8815 127.782 20.4603C126.293 19.039 125.562 17.284 125.562 15.139C125.562 12.994 126.292 11.239 127.782 9.81771C129.27 8.39645 131.096 7.7002 133.287 7.7002C135.112 7.7027 136.629 8.17645 137.836 9.12395Z' />
      <path d='M140.336 22.1888V3.53369H143.678V10.0987C144.325 8.76122 145.868 7.86997 147.807 7.86997C151.065 7.86997 152.975 10.015 152.975 13.4975V22.1888H149.633V13.97C149.633 12.0475 148.593 10.85 146.796 10.85C144.97 10.85 143.678 12.1875 143.678 14.1088V22.1875H140.336V22.1888Z' />
      <path d='M32.5165 9.93004C31.6003 8.51378 30.3161 7.26003 28.7017 6.20252C25.5825 4.16251 21.4841 3.03875 17.1614 3.03875C15.7172 3.03875 14.2943 3.16375 12.9131 3.41125C12.0561 2.59 11.0542 1.85124 9.99304 1.26749C6.05598 -0.68627 2.58521 0.0424839 0.832177 0.668738C0.256236 0.874989 0.0785383 1.60124 0.504508 2.0375C1.74083 3.3075 3.78624 5.81752 3.28339 8.10003C1.32746 10.0875 0.267578 12.4826 0.267578 14.9763C0.267578 17.5176 1.32746 19.9126 3.28213 21.8989C3.78498 24.1814 1.73957 26.6926 0.503248 27.9626C0.0785384 28.3989 0.254975 29.1239 0.830917 29.3302C2.58395 29.9577 6.05346 30.6864 9.99178 28.7327C11.0529 28.1489 12.0548 27.4101 12.9118 26.5889C14.2931 26.8364 15.7159 26.9614 17.1602 26.9614C21.4841 26.9614 25.5825 25.8389 28.7004 23.7989C30.3148 22.7414 31.599 21.4889 32.5152 20.0714C33.5361 18.4938 34.0528 16.7951 34.0528 15.0251C34.054 13.2051 33.5361 11.5088 32.5165 9.93004ZM16.985 24.0151C15.116 24.0151 13.334 23.7751 11.7095 23.3414L10.5224 24.4776C9.8771 25.0951 9.12094 25.6539 8.33202 26.0939C7.28725 26.6026 6.2551 26.8814 5.23428 26.9651C5.29225 26.8614 5.34519 26.7564 5.4019 26.6514C6.59159 24.4764 6.91296 22.5214 6.36474 20.7876C4.41889 19.2663 3.25189 17.3188 3.25189 15.1976C3.25189 10.3288 9.40072 6.38127 16.985 6.38127C24.5693 6.38127 30.7194 10.3288 30.7194 15.1976C30.7181 20.0689 24.5693 24.0151 16.985 24.0151Z' />
      <path d='M10.4136 13.1714C9.29578 13.1714 8.38965 14.0664 8.38965 15.1701C8.38965 16.2739 9.29578 17.1689 10.4136 17.1689C11.5315 17.1689 12.4376 16.2739 12.4376 15.1701C12.4376 14.0664 11.5315 13.1714 10.4136 13.1714Z' />
      <path d='M16.9293 13.1714C15.8114 13.1714 14.9053 14.0664 14.9053 15.1701C14.9053 16.2739 15.8114 17.1689 16.9293 17.1689C18.0471 17.1689 18.9533 16.2739 18.9533 15.1701C18.9533 14.0664 18.0471 13.1714 16.9293 13.1714Z' />
      <path d='M23.4449 13.1714C22.327 13.1714 21.4209 14.0664 21.4209 15.1701C21.4209 16.2739 22.327 17.1689 23.4449 17.1689C24.5627 17.1689 25.4689 16.2739 25.4689 15.1701C25.4689 14.0664 24.5615 13.1714 23.4449 13.1714Z' />
    </svg>
  );
};

export default RocketChatLogo;
