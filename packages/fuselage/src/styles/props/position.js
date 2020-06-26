import { css } from '@rocket.chat/css-in-js';

import { createPropType } from '../../helpers/createPropType';
import { memoize } from '../../helpers/memoize';

export const getInsetValue = memoize((propValue) => {
  if (propValue === undefined || propValue === null) {
    return;
  }

  if (typeof propValue === 'number') {
    return `${ propValue }px`;
  }

  if (typeof propValue !== 'string') {
    return;
  }

  if (propValue === 'none') {
    return '0px';
  }

  const matches = /^(neg-)?x(\d+)$/.exec(String(propValue));

  if (matches) {
    const value = (matches[1] === 'neg-' ? -1 : 1) * parseInt(matches[2], 10);

    if (Number.isInteger(value) && (Math.abs(value) % 4 === 0 || Math.abs(value) === 1 || Math.abs(value) === 2)) {
      return `${ value / 16 }rem`;
    }
  }
});

export const insetPropType = createPropType(getInsetValue);

export const mapPositionProps = ({
  className,
  position,
  zIndex,
  inset,
  insetBlock,
  insetBlockStart,
  insetBlockEnd,
  insetInline,
  insetInlineStart,
  insetInlineEnd,
  ...props
}) => ({
  className: [
    ...className,
    position !== undefined && css`position: ${ position } !important;`,
    zIndex !== undefined && css`z-index: ${ zIndex } !important;`,
    inset !== undefined && css`inset: ${ getInsetValue(inset) || inset } !important;`,
    insetBlock !== undefined && css`inset-block: ${ getInsetValue(insetBlock) || insetBlock } !important;`,
    insetBlockStart !== undefined && css`inset-block-start: ${ getInsetValue(insetBlockStart) || insetBlockStart } !important;`,
    insetBlockEnd !== undefined && css`inset-block-end: ${ getInsetValue(insetBlockEnd) || insetBlockEnd } !important;`,
    insetInline !== undefined && css`inset-inline: ${ getInsetValue(insetInline) || insetInline } !important;`,
    insetInlineStart !== undefined && css`inset-inline-start: ${ getInsetValue(insetInlineStart) || insetInlineStart } !important;`,
    insetInlineEnd !== undefined && css`inset-inline-end: ${ getInsetValue(insetInlineEnd) || insetInlineEnd } !important;`,
  ],
  ...props,
});
