import { css } from 'styled-components';

export const visuallyHidden = css`
  position: absolute;

  overflow: hidden;
  clip: rect(0, 0, 0, 0);

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;

  white-space: nowrap;

  border: 0;
  clip-path: inset(50%);
`;

export const container = css`
  width: 100%;

  @each $breakpoint in $responsive-breakpoints {
    $max-width: to-rem(map-get-value($breakpoints, $breakpoint, min-viewport-width));

    @include when-breakpoint($breakpoint) {
      max-width: $max-width;
    }
  }
`;

export const scrollable = css`
  &::-webkit-scrollbar {
    width: ${ ({ theme }) => theme.sizes.x4 };
    height: ${ ({ theme }) => theme.sizes.x4 };
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;
