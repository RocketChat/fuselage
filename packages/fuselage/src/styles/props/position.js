import { css } from '@rocket.chat/css-in-js';
import mem from 'mem';

import { cssSupports, createLogicalProperties, createPropType } from '../helpers';


export const getInsetValue = mem((propValue) => {
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

export const insetProperty = (inset) => {
  if (cssSupports('inset: inherit')) {
    return css`inset: ${ inset } !important;`;
  }

  if (cssSupports('inset-block: inherit') && cssSupports('inset-inline: inherit')) {
    return css`
      inset-block: ${ inset } !important;
      inset-inline: ${ inset } !important;
    `;
  }

  if (cssSupports('inset-block-start: inherit')
    && cssSupports('inset-block-end: inherit')
    && cssSupports('inset-inline-start: inherit')
    && cssSupports('inset-inline-end: inherit')) {
    return css`
      inset-block-start: ${ inset } !important;
      inset-block-end: ${ inset } !important;
      inset-inline-start: ${ inset } !important;
      inset-inline-end: ${ inset } !important;
    `;
  }

  return css`
    top: ${ inset } !important;
    bottom: ${ inset } !important;
    left: ${ inset } !important;
    right: ${ inset } !important;
  `;
};

export const [
  insetBlockProperty,
  insetBlockStartProperty,
  insetBlockEndProperty,
  insetInlineProperty,
  insetInlineStartProperty,
  insetInlineEndProperty,
] = createLogicalProperties({
  blockPropertyName: 'inset-block',
  blockStartPropertyName: 'inset-block-start',
  blockStartFallbackPropertyName: 'top',
  blockEndPropertyName: 'inset-block-end',
  blockEndFallbackPropertyName: 'bottom',
  inlinePropertyName: 'inset-inline',
  inlineStartPropertyName: 'inset-inline-start',
  inlineStartFallbackPropertyName: 'left',
  inlineEndPropertyName: 'inset-inline-end',
  inlineEndFallbackPropertyName: 'right',
});

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
    inset !== undefined && insetProperty(getInsetValue(inset) || inset),
    insetBlock !== undefined && insetBlockProperty(getInsetValue(insetBlock) || insetBlock),
    insetBlockStart !== undefined && insetBlockStartProperty(getInsetValue(insetBlockStart) || insetBlockStart),
    insetBlockEnd !== undefined && insetBlockEndProperty(getInsetValue(insetBlockEnd) || insetBlockEnd),
    insetInline !== undefined && insetInlineProperty(getInsetValue(insetInline) || insetInline),
    insetInlineStart !== undefined && insetInlineStartProperty(getInsetValue(insetInlineStart) || insetInlineStart),
    insetInlineEnd !== undefined && insetInlineEndProperty(getInsetValue(insetInlineEnd) || insetInlineEnd),
  ],
  ...props,
});
