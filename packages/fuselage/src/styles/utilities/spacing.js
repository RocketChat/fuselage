import { css } from 'styled-components';

export const p = (padding) => css`
  padding: ${ padding };
`;

export const pt = (padding) => css`
  padding-top: ${ padding };
  padding-block-start: ${ padding };
`;

export const pr = (padding) => css`
  padding-right: ${ padding };
  padding-inline-end: ${ padding };
`;

export const pb = (padding) => css`
  padding-bottom: ${ padding };
  padding-block-end: ${ padding };
`;

export const pl = (padding) => css`
  padding-left: ${ padding };
  padding-inline-start: ${ padding };
`;

export const py = (padding) => css`
  ${ pt(padding) }
  ${ pb(padding) }
`;

export const px = (padding) => css`
  ${ pr(padding) }
  ${ pl(padding) }
`;

export const m = (margin) => css`
  margin: ${ margin };
`;

export const mt = (margin) => css`
  margin-top: ${ margin };
  margin-block-start: ${ margin };
`;

export const mr = (margin) => css`
  margin-right: ${ margin };
  margin-inline-end: ${ margin };
`;

export const mb = (margin) => css`
  margin-bottom: ${ margin };
  margin-block-end: ${ margin };
`;

export const ml = (margin) => css`
  margin-left: ${ margin };
  margin-inline-start: ${ margin };
`;

export const my = (margin) => css`
  ${ mt(margin) }
  ${ mb(margin) }
`;

export const mx = (margin) => css`
  ${ mr(margin) }
  ${ ml(margin) }
`;
