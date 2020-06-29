import { css } from '@rocket.chat/css-in-js';

import { getColorValue } from './colors';
import { getPaddingValue, getMarginValue } from './spaces';
import { getBorderRadiusValue, getBorderWidthValue } from './borders';
import { getFontFamilyValue, getFontScaleValue } from './typography';
import { getSizeValue } from './layout';

const invisibleStyles = css`
  visibility: hidden;
  opacity: 0;
`;

const withRichContentStyles = css`
  strong, em, b, i, a, q, cite, code, time, dfn, abbr, del, ins,
  sup, sub, kbd, var, small, h1, h2, h3, h4, h5, h6, p {
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
  }

  strong, b {
    font-weight: bolder;
  }

  em, i {
    font-style: italic;
  }

  a {
    &:link {
      text-decoration: none;
      color: ${ getColorValue('link') };
    }

    &:visited,
    &.is-visited {
      color: ${ getColorValue('visited-link') };
    }

    &:active,
    &.is-active {
      color: ${ getColorValue('active-link') };
    }

    &:hover,
    &.is-hovered {
      text-decoration: underline;
    }
  }

  q {
    &::before {
      content: open-quote;
    }

    &::after {
      content: close-quote;
    }

    cite {
      font-style: italic;
    }
  }

  code {
    padding:
      ${ getPaddingValue('x4') }
      ${ getPaddingValue('x8') };
    border-radius: ${ getBorderRadiusValue('x2') };
    background-color: ${ getColorValue('neutral-300') };
    font-family: ${ getFontFamilyValue('mono') };
    -webkit-font-smoothing: auto;
  }

  time {
    color: ${ getColorValue('info') };
  }

  dfn {
    color: ${ getColorValue('info') };
    font-style: italic;
  }

  abbr {
    &[title] {
      text-decoration: underline dashed;
      border-block-end-width: ${ getBorderWidthValue('none') };
    }
  }

  del {
    text-decoration: line-through solid;
  }

  ins {
    text-decoration: underline solid;
  }

  sup,
  sub {
    position: relative;
    vertical-align: baseline;
    font-size: 75%;
    line-height: 0;
  }

  sup {
    inset-block-start: -0.5em;
  }

  sub {
    inset-block-start: -0.25em;
  }

  kbd {
    padding:
      ${ getPaddingValue('x4') }
      ${ getPaddingValue('x8') };
    border-width: ${ getBorderWidthValue('x1') };
    border-style: solid;
    border-color: currentColor;
    border-radius: ${ getBorderRadiusValue('x2') };
    font-family: ${ getFontFamilyValue('mono') };
    -webkit-font-smoothing: auto;
  }

  var {
    font-style: italic;
  }

  small {
    font-size: 80%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  pre {
    display: block;
    margin:
      ${ getMarginValue('x16') }
      ${ getMarginValue('none') };
  }

  h1 {
    font-size: ${ getFontScaleValue('h1')?.fontSize };
    font-weight: ${ getFontScaleValue('h1')?.fontWeight };
    line-height: ${ getFontScaleValue('h1')?.lineHeight };
    letter-spacing: ${ getFontScaleValue('h1')?.letterSpacing };
  }

  h2 {
    font-size: ${ getFontScaleValue('s2')?.fontSize };
    font-weight: ${ getFontScaleValue('s2')?.fontWeight };
    line-height: ${ getFontScaleValue('s2')?.lineHeight };
    letter-spacing: ${ getFontScaleValue('s2')?.letterSpacing };
  }

  h3 {
    font-size: ${ getFontScaleValue('p2')?.fontSize };
    font-weight: ${ getFontScaleValue('p2')?.fontWeight };
    line-height: ${ getFontScaleValue('p2')?.lineHeight };
    letter-spacing: ${ getFontScaleValue('p2')?.letterSpacing };
  }

  h4 {
    font-size: ${ getFontScaleValue('c2')?.fontSize };
    font-weight: ${ getFontScaleValue('c2')?.fontWeight };
    line-height: ${ getFontScaleValue('c2')?.lineHeight };
    letter-spacing: ${ getFontScaleValue('c2')?.letterSpacing };
  }

  h5 {
    font-size: ${ getFontScaleValue('micro')?.fontSize };
    font-weight: ${ getFontScaleValue('micro')?.fontWeight };
    line-height: ${ getFontScaleValue('micro')?.lineHeight };
    letter-spacing: ${ getFontScaleValue('micro')?.letterSpacing };
  }

  h6 {
    font-size: ${ getFontScaleValue('micro')?.fontSize };
    font-weight: ${ getFontScaleValue('micro')?.fontWeight };
    line-height: ${ getFontScaleValue('micro')?.lineHeight };
    letter-spacing: ${ getFontScaleValue('micro')?.letterSpacing };
  }

  p {
    font-size: ${ getFontScaleValue('p1')?.fontSize };
    font-weight: ${ getFontScaleValue('p1')?.fontWeight };
    line-height: ${ getFontScaleValue('p1')?.lineHeight };
    letter-spacing: ${ getFontScaleValue('p1')?.letterSpacing };
  }

  ul,
  ol {
    padding-inline-start: ${ getPaddingValue('x40') };
  }

  ul {
    font-size: ${ getFontScaleValue('p1')?.fontSize };
    font-weight: ${ getFontScaleValue('p1')?.fontWeight };
    line-height: ${ getFontScaleValue('p1')?.lineHeight };
    letter-spacing: ${ getFontScaleValue('p1')?.letterSpacing };
    list-style-type: disc;
  }

  ol {
    font-size: ${ getFontScaleValue('p1')?.fontSize };
    font-weight: ${ getFontScaleValue('p1')?.fontWeight };
    line-height: ${ getFontScaleValue('p1')?.lineHeight };
    letter-spacing: ${ getFontScaleValue('p1')?.letterSpacing };
    list-style-type: decimal;
  }

  li {
    display: list-item;
    text-align: inherit;
  }

  pre {
    font-family: ${ getFontFamilyValue('mono') };

    code {
      display: block;
      padding: ${ getPaddingValue('x16') };
    }
  }
`;

const withTruncatedTextStyles = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const elevationStyles = (elevation) => {
  if (elevation === '0') {
    return css`box-shadow: none;`;
  }

  if (elevation === '1') {
    return css`box-shadow: 0px 0px 12px 0px ${ getColorValue('neutral-800-10') };`;
  }

  if (elevation === '2') {
    return css`
      box-shadow:
        0px 0px 2px 0px ${ getColorValue('neutral-800-8') },
        0px 0px 12px 0px ${ getColorValue('neutral-800-12') };
    `;
  }
};

export const mapSpecialProps = ({
  className,
  elevation,
  invisible,
  withRichContent,
  withTruncatedText,
  size,
  minSize,
  maxSize,
  htmlSize,
  fontScale,
  ...props
}) => ({
  className: [
    ...className,
    elevation && elevationStyles(elevation),
    invisible && invisibleStyles,
    withRichContent && withRichContentStyles,
    withTruncatedText && withTruncatedTextStyles,
    size !== undefined
      && css`
        width: ${ getSizeValue(size) || size } !important;
        height: ${ getSizeValue(size) || size } !important;
      `,
    minSize !== undefined
      && css`
        min-width: ${ getSizeValue(minSize) || minSize } !important;
        min-height: ${ getSizeValue(minSize) || minSize } !important;
      `,
    maxSize !== undefined
      && css`
        max-width: ${ getSizeValue(maxSize) || maxSize } !important;
        max-height: ${ getSizeValue(maxSize) || maxSize } !important;
      `,
    fontScale !== undefined
      && css`
        font-size: ${ getFontScaleValue(fontScale)?.fontSize } !important;
        font-weight: ${ getFontScaleValue(fontScale)?.fontWeight } !important;
        line-height: ${ getFontScaleValue(fontScale)?.lineHeight } !important;
        letter-spacing: ${ getFontScaleValue(fontScale)?.letterSpacing } !important;
      `,
  ],
  size: htmlSize,
  ...props,
});
