import { css } from '@rocket.chat/css-in-js';

export default css`
  transition: all 230ms;

  @media (prefers-reduced-motion) {
    transition: none;
  }
`;
