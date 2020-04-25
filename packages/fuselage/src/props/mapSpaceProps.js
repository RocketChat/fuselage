import { css } from '@rocket.chat/css-in-js';

import { getMarginValue } from '../propTypes/margins';
import { getPaddingValue } from '../propTypes/paddings';
import { cssSupports } from './cssSupports';

const marginProperty = (value) => css`margin: ${ getMarginValue(value) } !important;`;

const marginBlockProperty = (value) => {
  if (cssSupports('margin-block: auto')) {
    return css`margin-block: ${ value } !important;`;
  }

  if (cssSupports('margin-block-start: auto') && cssSupports('margin-block-end: auto')) {
    return css`
      margin-block-start: ${ value } !important;
      margin-block-end: ${ value } !important;
    `;
  }

  return css`
    margin-top: ${ value } !important;
    margin-bottom: ${ value } !important;
  `;
};

const marginBlockStartProperty = (value) => {
  if (cssSupports('margin-block-start: auto')) {
    return css`margin-block-start: ${ value } !important;`;
  }

  return css`margin-top: ${ value } !important;`;
};

const marginBlockEndProperty = (value) => {
  if (cssSupports('margin-block-end: auto')) {
    return css`margin-block-end: ${ value } !important;`;
  }

  return css`margin-bottom: ${ value } !important;`;
};

const marginInlineProperty = (value) => {
  if (cssSupports('margin-inline: auto')) {
    return css`margin-inline: ${ value } !important;`;
  }

  if (cssSupports('margin-inline-start: auto') && cssSupports('margin-inline-end: auto')) {
    return css`
      margin-inline-start: ${ value } !important;
      margin-inline-end: ${ value } !important;
    `;
  }

  return css`
    margin-left: ${ value } !important;
    margin-right: ${ value } !important;
  `;
};

const marginInlineStartProperty = (value) => {
  if (cssSupports('margin-inline-start: auto')) {
    return css`margin-inline-start: ${ value } !important;`;
  }

  return css`
    *:not([dir=rtl]) & {
      margin-left: ${ value } !important;
    }

    [dir=rtl] & {
      margin-right: ${ value } !important;
    }
  `;
};

const marginInlineEndProperty = (value) => {
  if (cssSupports('margin-inline-end: auto')) {
    return css`margin-inline-end: ${ value } !important;`;
  }

  return css`
    *:not([dir=rtl]) & {
      margin-right: ${ value } !important;
    }

    [dir=rtl] & {
      margin-left: ${ value } !important;
    }
  `;
};

const paddingProperty = (value) => css`padding: ${ getPaddingValue(value) } !important;`;

const paddingBlockProperty = (value) => {
  if (cssSupports('padding-block: auto')) {
    return css`padding-block: ${ value } !important;`;
  }

  if (cssSupports('padding-block-start: auto') && cssSupports('padding-block-end: auto')) {
    return css`
      padding-block-start: ${ value } !important;
      padding-block-end: ${ value } !important;
    `;
  }

  return css`
    padding-top: ${ value } !important;
    padding-bottom: ${ value } !important;
  `;
};

const paddingBlockStartProperty = (value) => {
  if (cssSupports('padding-block-start: auto')) {
    return css`padding-block-start: ${ value } !important;`;
  }

  return css`padding-top: ${ value } !important;`;
};

const paddingBlockEndProperty = (value) => {
  if (cssSupports('padding-block-end: auto')) {
    return css`padding-block-end: ${ value } !important;`;
  }

  return css`padding-bottom: ${ value } !important;`;
};

const paddingInlineProperty = (value) => {
  if (cssSupports('padding-inline: auto')) {
    return css`padding-inline: ${ value } !important;`;
  }

  if (cssSupports('padding-inline-start: auto') && cssSupports('padding-inline-end: auto')) {
    return css`
      padding-inline-start: ${ value } !important;
      padding-inline-end: ${ value } !important;
    `;
  }

  return css`
    padding-left: ${ value } !important;
    padding-right: ${ value } !important;
  `;
};

const paddingInlineStartProperty = (value) => {
  if (cssSupports('padding-inline-start: auto')) {
    return css`padding-inline-start: ${ value } !important;`;
  }

  return css`
    *:not([dir=rtl]) & {
      padding-left: ${ value } !important;
    }

    [dir=rtl] & {
      padding-right: ${ value } !important;
    }
  `;
};

const paddingInlineEndProperty = (value) => {
  if (cssSupports('padding-inline-end: auto')) {
    return css`padding-inline-end: ${ value } !important;`;
  }

  return css`
    *:not([dir=rtl]) & {
      padding-right: ${ value } !important;
    }

    [dir=rtl] & {
      padding-left: ${ value } !important;
    }
  `;
};

export const mapSpaceProps = ({
  className,
  m,
  margin = m,
  mi,
  marginInline = mi,
  mis,
  marginInlineStart = mis,
  mie,
  marginInlineEnd = mie,
  mb,
  marginBlock = mb,
  mbs,
  marginBlockStart = mbs,
  mbe,
  marginBlockEnd = mbe,
  p,
  padding = p,
  pi,
  paddingInline = pi,
  pis,
  paddingInlineStart = pis,
  pie,
  paddingInlineEnd = pie,
  pb,
  paddingBlock = pb,
  pbs,
  paddingBlockStart = pbs,
  pbe,
  paddingBlockEnd = pbe,
  ...props
}) => ({
  className: [
    ...className,
    margin !== undefined && marginProperty(margin),
    marginBlock !== undefined && marginBlockProperty(getMarginValue(marginBlock)),
    marginBlockStart !== undefined && marginBlockStartProperty(getMarginValue(marginBlockStart)),
    marginBlockEnd !== undefined && marginBlockEndProperty(getMarginValue(marginBlockEnd)),
    marginInline !== undefined && marginInlineProperty(getMarginValue(marginInline)),
    marginInlineStart !== undefined && marginInlineStartProperty(getMarginValue(marginInlineStart)),
    marginInlineEnd !== undefined && marginInlineEndProperty(getMarginValue(marginInlineEnd)),
    padding !== undefined && paddingProperty(padding),
    paddingBlock !== undefined && paddingBlockProperty(getPaddingValue(paddingBlock)),
    paddingBlockStart !== undefined && paddingBlockStartProperty(getPaddingValue(paddingBlockStart)),
    paddingBlockEnd !== undefined && paddingBlockEndProperty(getPaddingValue(paddingBlockEnd)),
    paddingInline !== undefined && paddingInlineProperty(getPaddingValue(paddingInline)),
    paddingInlineStart !== undefined && paddingInlineStartProperty(getPaddingValue(paddingInlineStart)),
    paddingInlineEnd !== undefined && paddingInlineEndProperty(getPaddingValue(paddingInlineEnd)),
  ],
  ...props,
});
