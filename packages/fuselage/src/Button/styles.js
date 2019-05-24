import { css, keyframes } from '@emotion/core';

import {
  border,
  borderRadius,
  colorGrayLight,
  colorWhite,
  rcColorButtonPrimary,
  rcColorError,
  colorGrayMedium,
  colorDarkMedium,
  fontFamily,
} from '../variables';


const buttonSquareSize = '36px';
const buttonPaddingSmall = '0 0.5rem';
const buttonHeightSmall = '28px';
const buttonTextSizeSmall = '13px';
const buttonTextSize = '0.875rem';
const buttonBorderWidth = border;
const buttonBorderRadius = borderRadius;
const buttonDisabledBackground = colorGrayLight;
const buttonDisabledTextColor = colorWhite;
const buttonPrimaryBackground = rcColorButtonPrimary;
const buttonPrimaryTextColor = colorWhite;
const buttonCancelColor = rcColorError;
const buttonSecondaryBackground = colorGrayMedium;
const buttonSecondaryTextColor = colorDarkMedium;


export const base = css`
  position: relative;
  display: flex;
  height: 40px;
  padding: 0 1.5rem;
  cursor: pointer;
  transition: opacity 0.3s, background-color 0.3s, color 0.3s;
  text-align: center;
  color: #000000;
  border-width: ${ buttonBorderWidth };
  border-style: solid;
  border-color: #000000;
  border-radius: ${ buttonBorderRadius };
  background-color: transparent;
  font-family: ${ fontFamily };
  font-size: ${ buttonTextSize };
  font-weight: 600;
  align-items: center;
  justify-content: center;

  &:not([disabled]):hover {
    opacity: 0.6;
  }

  &:active,
  &:focus:hover {
    outline: none;
  }

  &:active {
    transform: translateY(2px);
    opacity: 0.9;
  }

  &:active::before {
    top: -2px;
  }

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    cursor: pointer;
  }

  &:disabled {
    cursor: default;
    color: ${ buttonDisabledTextColor };
    border: 0;
    border-color: ${ buttonDisabledBackground };
    background-color: ${ buttonDisabledBackground };
  }
`;

export const invisible = css`
  visibility: hidden;
`;

export const primary = css`
  color: ${ buttonPrimaryTextColor };
  border: 0;
  background-color: ${ buttonPrimaryBackground };
`;

export const secondary = css`
  color: ${ buttonSecondaryTextColor };
  border: 0;
  border-color: ${ buttonSecondaryBackground };
  background-color: ${ buttonSecondaryBackground };
`;

export const outline = css`
  border-width: 2px;
  border-style: solid;
  background: transparent;
`;

export const nude = css`
  border: none;
  background-color: inherit;
  font-weight: 400;
`;

export const cancel = css`
  color: ${ buttonPrimaryTextColor };
  border: 0;
  border-color: ${ buttonCancelColor };
  background-color: ${ buttonCancelColor };
`;

export const small = css`
  height: ${ buttonHeightSmall };
  padding: ${ buttonPaddingSmall };
  font-size: ${ buttonTextSizeSmall };
`;

export const square = css`
  display: flex;
  flex: 0 0 ${ buttonSquareSize };
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
`;

export const stack = css`
  width: 100%;
`;

export const noPadding = css`
  padding-right: 0;
  padding-left: 0;
`;

export const primaryAndOutline = css`
  ${ primary };
  ${ outline };
  color: ${ buttonPrimaryBackground };
  border-color: ${ buttonPrimaryBackground };
`;

export const primaryAndNude = css`
  ${ primary };
  ${ nude };
  color: ${ buttonPrimaryBackground };
`;

export const secondaryAndOutline = css`
  ${ secondary };
  ${ outline };
  color: ${ buttonSecondaryBackground };
  border-color: ${ buttonSecondaryBackground };
`;

export const cancelAndOutline = css`
  ${ cancel };
  ${ outline };
  color: ${ buttonCancelColor };
  border-color: ${ buttonCancelColor };
`;

export const full = css`
  @media (max-width: 779px) {
    width: 100%;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const loading = css`
  position: relative;
  padding-right: calc(3 * 0.782rem);
  transition: padding-right 0.3s;

  &::before {
    position: absolute;
    top: 25%;
    right: 0.782rem;
    display: block;
    width: 20px;
    height: 20px;
    content: "";
    animation: ${ spin } 1s infinite cubic-bezier(0.14, 0.48, 0.45, 0.63);
    border: 0.15rem solid rgba(127, 127, 127, 0.5);
    border-top-color: white;
    border-radius: 50%;
  }
`;
