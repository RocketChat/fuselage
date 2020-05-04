import { css } from '@rocket.chat/css-in-js';

import { getColorValue } from './colors';
import { getPaddingValue, getMarginValue, paddingInlineStartProperty } from './spaces';
import { getBorderRadiusValue, borderBlockEndWidthProperty, getBorderWidthValue } from './borders';
import { getFontFamilyValue, fontScaleProperty } from './typography';
import { insetBlockStartProperty } from './position';

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
      ${ borderBlockEndWidthProperty('none') };
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
    ${ insetBlockStartProperty('-0.5em') };
  }

  sub {
    ${ insetBlockStartProperty('-0.25em') };
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
    ${ fontScaleProperty('h1') }
  }

  h2 {
    ${ fontScaleProperty('s2') }
    @include typography.use-font-scale(s2);
  }

  h3 {
    ${ fontScaleProperty('p2') }
  }

  h4 {
    ${ fontScaleProperty('c2') }
  }

  h5 {
    ${ fontScaleProperty('micro') }
  }

  h6 {
    ${ fontScaleProperty('micro') }
  }

  p {
    ${ fontScaleProperty('p1') }
  }

  ul,
  ol {
    ${ paddingInlineStartProperty(getPaddingValue('x40')) };
  }

  ul {
    ${ fontScaleProperty('p1') }
    list-style-type: disc;
  }

  ol {
    ${ fontScaleProperty('p1') }
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
  richText,
  textColor,
  textStyle,
  ...props
}) => {
  if (richText) {
    console.warn('`richText` is deprecated; prefer `withRichContent`');
    withRichContent = true;
  }

  if (textColor) {
    console.warn(`\`textColor\` is deprecated; prefer \`color='${ textColor }'`);
  }

  if (textStyle) {
    console.warn(`\`textStyle\` is deprecated; prefer \`fontFamily='sans' fontScale='${ textStyle }'`);
  }

  return {
    className: [
      ...className,
      elevation && elevationStyles(elevation),
      invisible && invisibleStyles,
      withRichContent && withRichContentStyles,
      withTruncatedText && withTruncatedTextStyles,
    ],
    ...textColor && { color: textColor },
    ...textStyle && {
      fontFamily: 'sans',
      fontScale: textStyle,
    },
    ...props,
  };
};
