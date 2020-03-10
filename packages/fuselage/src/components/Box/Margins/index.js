import { css } from '@rocket.chat/css-in-js';
import margins from '@rocket.chat/fuselage-tokens/margins';
import PropTypes from 'prop-types';
import React from 'react';

import { useCss } from '../useCss';
import { PropsProvider } from '../PropsContext';

const getValue = (identifier) => {
  if (typeof identifier === 'number') {
    if (identifier < 0) {
      console.warn(`Margins: Prefer ='neg-x${ -identifier }' over ={${ identifier }}`);
      return `neg-x${ -identifier }`;
    }

    console.warn(`Margins: Prefer ='x${ identifier }' over ={${ identifier }}`);
    return margins[`x${ identifier }`];
  }

  return margins[identifier];
};

const isMarginBlockSupported = window.CSS && window.CSS.supports('margin-block: auto');
const isMarginBlockStartSupported = window.CSS && window.CSS.supports('margin-block-start: auto');
const isMarginBlockEndSupported = window.CSS && window.CSS.supports('margin-block-end: auto');
const isMarginInlineSupported = window.CSS && window.CSS.supports('margin-inline: auto');
const isMarginInlineStartSupported = window.CSS && window.CSS.supports('margin-inline-start: auto');
const isMarginInlineEndSupported = window.CSS && window.CSS.supports('margin-inline-end: auto');

const marginBlock = (() => {
  if (isMarginBlockSupported) {
    return (value) => css`margin-block: ${ value } !important;`;
  }

  if (isMarginBlockStartSupported && isMarginBlockEndSupported) {
    return (value) => css`
      margin-block-start: ${ value } !important;
      margin-block-end: ${ value } !important;
    `;
  }

  return (value) => css`
    margin-top: ${ value } !important;
    margin-bottom: ${ value } !important;
  `;
})();

const marginBlockStart = (() => {
  if (isMarginBlockStartSupported) {
    return (value) => css`margin-block-start: ${ value } !important;`;
  }

  return (value) => css`margin-top: ${ value } !important;`;
})();

const marginBlockEnd = (() => {
  if (isMarginBlockEndSupported) {
    return (value) => css`margin-block-end: ${ value } !important;`;
  }

  return (value) => css`margin-bottom: ${ value } !important;`;
})();

const marginInline = (() => {
  if (isMarginInlineSupported) {
    return (value) => css`margin-inline: ${ value } !important;`;
  }

  if (isMarginInlineStartSupported && isMarginInlineEndSupported) {
    return (value) => css`
      margin-inline-start: ${ value } !important;
      margin-inline-end: ${ value } !important;
    `;
  }

  return (value) => css`
    margin-left: ${ value } !important;
    margin-right: ${ value } !important;
  `;
})();

const marginInlineStart = (() => {
  if (isMarginInlineStartSupported) {
    return (value) => css`margin-inline-start: ${ value } !important;`;
  }

  return (value) => css`
    [dir=ltr] & {
      margin-left: ${ value } !important;
    }

    [dir=rtl] & {
      margin-right: ${ value } !important;
    }
  `;
})();

const marginInlineEnd = (() => {
  if (isMarginInlineEndSupported) {
    return (value) => css`margin-inline-end: ${ value } !important;`;
  }

  return (value) => css`
    [dir=ltr] & {
      margin-right: ${ value } !important;
    }

    [dir=rtl] & {
      margin-left: ${ value } !important;
    }
  `;
})();

export function Margins({
  children,
  all,
  block,
  blockStart,
  blockEnd,
  inline,
  inlineStart,
  inlineEnd,
}) {
  const marginsClassName = useCss([
    all && css`margin: ${ getValue(all) } !important;`,
    block && marginBlock(getValue(block)),
    blockStart && marginBlockStart(getValue(blockStart)),
    blockEnd && marginBlockEnd(getValue(blockEnd)),
    inline && marginInline(getValue(inline)),
    inlineStart && marginInlineStart(getValue(inlineStart)),
    inlineEnd && marginInlineEnd(getValue(inlineEnd)),
  ], [
    all,
    block,
    blockStart,
    blockEnd,
    inline,
    inlineStart,
    inlineEnd,
  ]);

  return <PropsProvider children={children} fn={({ className, ...props }) => ({
    className: [className, marginsClassName].join(' '),
    ...props,
  })} memoized />;
}

Margins.propTypes = {
  all: PropTypes.oneOf([
    2, 4, 8, 12, 16, 24, 32, 40,
    'none',
    'x1', 'x2', 'x4', 'x8', 'x12', 'x16', 'x20', 'x24', 'x28', 'x32', 'x36',
    'x40', 'x80', 'x120', 'x160', 'x200',
    'x240', 'x280', 'x320', 'x360', 'x400',
    'x440', 'x480', 'x520', 'x560', 'x600',
    'x640', 'x680', 'x720', 'x760', 'x800',
    'x840', 'x880', 'x920', 'x960', 'x1000',
    'x1040', 'x1080', 'x120', 'x1160', 'x1200',
    'x1240', 'x1280', 'x1320', 'x1360', 'x1400',
    'x1440', 'x1480', 'x1520', 'x1560', 'x1600',
    'neg-x1', 'neg-x2', 'neg-x4', 'neg-x8', 'neg-x12', 'neg-x16', 'neg-x20', 'neg-x24', 'neg-x28', 'neg-x32', 'neg-x36',
    'neg-x40', 'neg-x80', 'neg-x120', 'neg-x160', 'neg-x200',
    'neg-x240', 'neg-x280', 'neg-x320', 'neg-x360', 'neg-x400',
    'neg-x440', 'neg-x480', 'neg-x520', 'neg-x560', 'neg-x600',
    'neg-x640', 'neg-x680', 'neg-x720', 'neg-x760', 'neg-x800',
    'neg-x840', 'neg-x880', 'neg-x920', 'neg-x960', 'neg-x1000',
    'neg-x1040', 'neg-x1080', 'neg-x120', 'neg-x1160', 'neg-x1200',
    'neg-x1240', 'neg-x1280', 'neg-x1320', 'neg-x1360', 'neg-x1400',
    'neg-x1440', 'neg-x1480', 'neg-x1520', 'neg-x1560', 'neg-x1600',
    'auto',
  ]),
  block: PropTypes.oneOf([
    2, 4, 8, 12, 16, 24, 32, 40,
    'none',
    'x1', 'x2', 'x4', 'x8', 'x12', 'x16', 'x20', 'x24', 'x28', 'x32', 'x36',
    'x40', 'x80', 'x120', 'x160', 'x200',
    'x240', 'x280', 'x320', 'x360', 'x400',
    'x440', 'x480', 'x520', 'x560', 'x600',
    'x640', 'x680', 'x720', 'x760', 'x800',
    'x840', 'x880', 'x920', 'x960', 'x1000',
    'x1040', 'x1080', 'x120', 'x1160', 'x1200',
    'x1240', 'x1280', 'x1320', 'x1360', 'x1400',
    'x1440', 'x1480', 'x1520', 'x1560', 'x1600',
    'neg-x1', 'neg-x2', 'neg-x4', 'neg-x8', 'neg-x12', 'neg-x16', 'neg-x20', 'neg-x24', 'neg-x28', 'neg-x32', 'neg-x36',
    'neg-x40', 'neg-x80', 'neg-x120', 'neg-x160', 'neg-x200',
    'neg-x240', 'neg-x280', 'neg-x320', 'neg-x360', 'neg-x400',
    'neg-x440', 'neg-x480', 'neg-x520', 'neg-x560', 'neg-x600',
    'neg-x640', 'neg-x680', 'neg-x720', 'neg-x760', 'neg-x800',
    'neg-x840', 'neg-x880', 'neg-x920', 'neg-x960', 'neg-x1000',
    'neg-x1040', 'neg-x1080', 'neg-x120', 'neg-x1160', 'neg-x1200',
    'neg-x1240', 'neg-x1280', 'neg-x1320', 'neg-x1360', 'neg-x1400',
    'neg-x1440', 'neg-x1480', 'neg-x1520', 'neg-x1560', 'neg-x1600',
    'auto',
  ]),
  blockStart: PropTypes.oneOf([
    2, 4, 8, 12, 16, 24, 32, 40,
    'none',
    'x1', 'x2', 'x4', 'x8', 'x12', 'x16', 'x20', 'x24', 'x28', 'x32', 'x36',
    'x40', 'x80', 'x120', 'x160', 'x200',
    'x240', 'x280', 'x320', 'x360', 'x400',
    'x440', 'x480', 'x520', 'x560', 'x600',
    'x640', 'x680', 'x720', 'x760', 'x800',
    'x840', 'x880', 'x920', 'x960', 'x1000',
    'x1040', 'x1080', 'x120', 'x1160', 'x1200',
    'x1240', 'x1280', 'x1320', 'x1360', 'x1400',
    'x1440', 'x1480', 'x1520', 'x1560', 'x1600',
    'neg-x1', 'neg-x2', 'neg-x4', 'neg-x8', 'neg-x12', 'neg-x16', 'neg-x20', 'neg-x24', 'neg-x28', 'neg-x32', 'neg-x36',
    'neg-x40', 'neg-x80', 'neg-x120', 'neg-x160', 'neg-x200',
    'neg-x240', 'neg-x280', 'neg-x320', 'neg-x360', 'neg-x400',
    'neg-x440', 'neg-x480', 'neg-x520', 'neg-x560', 'neg-x600',
    'neg-x640', 'neg-x680', 'neg-x720', 'neg-x760', 'neg-x800',
    'neg-x840', 'neg-x880', 'neg-x920', 'neg-x960', 'neg-x1000',
    'neg-x1040', 'neg-x1080', 'neg-x120', 'neg-x1160', 'neg-x1200',
    'neg-x1240', 'neg-x1280', 'neg-x1320', 'neg-x1360', 'neg-x1400',
    'neg-x1440', 'neg-x1480', 'neg-x1520', 'neg-x1560', 'neg-x1600',
    'auto',
  ]),
  blockEnd: PropTypes.oneOf([
    2, 4, 8, 12, 16, 24, 32, 40,
    'none',
    'x1', 'x2', 'x4', 'x8', 'x12', 'x16', 'x20', 'x24', 'x28', 'x32', 'x36',
    'x40', 'x80', 'x120', 'x160', 'x200',
    'x240', 'x280', 'x320', 'x360', 'x400',
    'x440', 'x480', 'x520', 'x560', 'x600',
    'x640', 'x680', 'x720', 'x760', 'x800',
    'x840', 'x880', 'x920', 'x960', 'x1000',
    'x1040', 'x1080', 'x120', 'x1160', 'x1200',
    'x1240', 'x1280', 'x1320', 'x1360', 'x1400',
    'x1440', 'x1480', 'x1520', 'x1560', 'x1600',
    'neg-x1', 'neg-x2', 'neg-x4', 'neg-x8', 'neg-x12', 'neg-x16', 'neg-x20', 'neg-x24', 'neg-x28', 'neg-x32', 'neg-x36',
    'neg-x40', 'neg-x80', 'neg-x120', 'neg-x160', 'neg-x200',
    'neg-x240', 'neg-x280', 'neg-x320', 'neg-x360', 'neg-x400',
    'neg-x440', 'neg-x480', 'neg-x520', 'neg-x560', 'neg-x600',
    'neg-x640', 'neg-x680', 'neg-x720', 'neg-x760', 'neg-x800',
    'neg-x840', 'neg-x880', 'neg-x920', 'neg-x960', 'neg-x1000',
    'neg-x1040', 'neg-x1080', 'neg-x120', 'neg-x1160', 'neg-x1200',
    'neg-x1240', 'neg-x1280', 'neg-x1320', 'neg-x1360', 'neg-x1400',
    'neg-x1440', 'neg-x1480', 'neg-x1520', 'neg-x1560', 'neg-x1600',
    'auto',
  ]),
  inline: PropTypes.oneOf([
    2, 4, 8, 12, 16, 24, 32, 40,
    'none',
    'x1', 'x2', 'x4', 'x8', 'x12', 'x16', 'x20', 'x24', 'x28', 'x32', 'x36',
    'x40', 'x80', 'x120', 'x160', 'x200',
    'x240', 'x280', 'x320', 'x360', 'x400',
    'x440', 'x480', 'x520', 'x560', 'x600',
    'x640', 'x680', 'x720', 'x760', 'x800',
    'x840', 'x880', 'x920', 'x960', 'x1000',
    'x1040', 'x1080', 'x120', 'x1160', 'x1200',
    'x1240', 'x1280', 'x1320', 'x1360', 'x1400',
    'x1440', 'x1480', 'x1520', 'x1560', 'x1600',
    'neg-x1', 'neg-x2', 'neg-x4', 'neg-x8', 'neg-x12', 'neg-x16', 'neg-x20', 'neg-x24', 'neg-x28', 'neg-x32', 'neg-x36',
    'neg-x40', 'neg-x80', 'neg-x120', 'neg-x160', 'neg-x200',
    'neg-x240', 'neg-x280', 'neg-x320', 'neg-x360', 'neg-x400',
    'neg-x440', 'neg-x480', 'neg-x520', 'neg-x560', 'neg-x600',
    'neg-x640', 'neg-x680', 'neg-x720', 'neg-x760', 'neg-x800',
    'neg-x840', 'neg-x880', 'neg-x920', 'neg-x960', 'neg-x1000',
    'neg-x1040', 'neg-x1080', 'neg-x120', 'neg-x1160', 'neg-x1200',
    'neg-x1240', 'neg-x1280', 'neg-x1320', 'neg-x1360', 'neg-x1400',
    'neg-x1440', 'neg-x1480', 'neg-x1520', 'neg-x1560', 'neg-x1600',
    'auto',
  ]),
  inlineStart: PropTypes.oneOf([
    2, 4, 8, 12, 16, 24, 32, 40,
    'none',
    'x1', 'x2', 'x4', 'x8', 'x12', 'x16', 'x20', 'x24', 'x28', 'x32', 'x36',
    'x40', 'x80', 'x120', 'x160', 'x200',
    'x240', 'x280', 'x320', 'x360', 'x400',
    'x440', 'x480', 'x520', 'x560', 'x600',
    'x640', 'x680', 'x720', 'x760', 'x800',
    'x840', 'x880', 'x920', 'x960', 'x1000',
    'x1040', 'x1080', 'x120', 'x1160', 'x1200',
    'x1240', 'x1280', 'x1320', 'x1360', 'x1400',
    'x1440', 'x1480', 'x1520', 'x1560', 'x1600',
    'neg-x1', 'neg-x2', 'neg-x4', 'neg-x8', 'neg-x12', 'neg-x16', 'neg-x20', 'neg-x24', 'neg-x28', 'neg-x32', 'neg-x36',
    'neg-x40', 'neg-x80', 'neg-x120', 'neg-x160', 'neg-x200',
    'neg-x240', 'neg-x280', 'neg-x320', 'neg-x360', 'neg-x400',
    'neg-x440', 'neg-x480', 'neg-x520', 'neg-x560', 'neg-x600',
    'neg-x640', 'neg-x680', 'neg-x720', 'neg-x760', 'neg-x800',
    'neg-x840', 'neg-x880', 'neg-x920', 'neg-x960', 'neg-x1000',
    'neg-x1040', 'neg-x1080', 'neg-x120', 'neg-x1160', 'neg-x1200',
    'neg-x1240', 'neg-x1280', 'neg-x1320', 'neg-x1360', 'neg-x1400',
    'neg-x1440', 'neg-x1480', 'neg-x1520', 'neg-x1560', 'neg-x1600',
    'auto',
  ]),
  inlineEnd: PropTypes.oneOf([
    2, 4, 8, 12, 16, 24, 32, 40,
    'none',
    'x1', 'x2', 'x4', 'x8', 'x12', 'x16', 'x20', 'x24', 'x28', 'x32', 'x36',
    'x40', 'x80', 'x120', 'x160', 'x200',
    'x240', 'x280', 'x320', 'x360', 'x400',
    'x440', 'x480', 'x520', 'x560', 'x600',
    'x640', 'x680', 'x720', 'x760', 'x800',
    'x840', 'x880', 'x920', 'x960', 'x1000',
    'x1040', 'x1080', 'x120', 'x1160', 'x1200',
    'x1240', 'x1280', 'x1320', 'x1360', 'x1400',
    'x1440', 'x1480', 'x1520', 'x1560', 'x1600',
    'neg-x1', 'neg-x2', 'neg-x4', 'neg-x8', 'neg-x12', 'neg-x16', 'neg-x20', 'neg-x24', 'neg-x28', 'neg-x32', 'neg-x36',
    'neg-x40', 'neg-x80', 'neg-x120', 'neg-x160', 'neg-x200',
    'neg-x240', 'neg-x280', 'neg-x320', 'neg-x360', 'neg-x400',
    'neg-x440', 'neg-x480', 'neg-x520', 'neg-x560', 'neg-x600',
    'neg-x640', 'neg-x680', 'neg-x720', 'neg-x760', 'neg-x800',
    'neg-x840', 'neg-x880', 'neg-x920', 'neg-x960', 'neg-x1000',
    'neg-x1040', 'neg-x1080', 'neg-x120', 'neg-x1160', 'neg-x1200',
    'neg-x1240', 'neg-x1280', 'neg-x1320', 'neg-x1360', 'neg-x1400',
    'neg-x1440', 'neg-x1480', 'neg-x1520', 'neg-x1560', 'neg-x1600',
    'auto',
  ]),
};
