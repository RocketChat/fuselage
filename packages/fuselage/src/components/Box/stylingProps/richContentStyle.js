import { css } from '@rocket.chat/css-in-js';

import {
  borderWidth,
  borderRadius,
  color,
  margin,
  padding,
  fontFamily,
  fontScale,
} from '../../../styleTokens';

export default css`
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
      color: ${ color('link') };
    }

    &:visited,
    &.is-visited {
      color: ${ color('visited-link') };
    }

    &:active,
    &.is-active {
      color: ${ color('active-link') };
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
      ${ padding('x4') }
      ${ padding('x8') };
    border-radius: ${ borderRadius('x2') };
    background-color: ${ color('neutral-300') };
    font-family: ${ fontFamily('mono') };
    -webkit-font-smoothing: auto;
  }

  time {
    color: ${ color('info') };
  }

  dfn {
    color: ${ color('info') };
    font-style: italic;
  }

  abbr {
    &[title] {
      text-decoration: underline dashed;
      border-block-end-width: ${ borderWidth('none') };
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
      ${ padding('x4') }
      ${ padding('x8') };
    border-width: ${ borderWidth('x1') };
    border-style: solid;
    border-color: currentColor;
    border-radius: ${ borderRadius('x2') };
    font-family: ${ fontFamily('mono') };
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
      ${ margin('x16') }
      ${ margin('none') };
  }

  h1 {
    font-size: ${ fontScale('h1')?.fontSize };
    font-weight: ${ fontScale('h1')?.fontWeight };
    line-height: ${ fontScale('h1')?.lineHeight };
    letter-spacing: ${ fontScale('h1')?.letterSpacing };
  }

  h2 {
    font-size: ${ fontScale('s2')?.fontSize };
    font-weight: ${ fontScale('s2')?.fontWeight };
    line-height: ${ fontScale('s2')?.lineHeight };
    letter-spacing: ${ fontScale('s2')?.letterSpacing };
  }

  h3 {
    font-size: ${ fontScale('p2')?.fontSize };
    font-weight: ${ fontScale('p2')?.fontWeight };
    line-height: ${ fontScale('p2')?.lineHeight };
    letter-spacing: ${ fontScale('p2')?.letterSpacing };
  }

  h4 {
    font-size: ${ fontScale('c2')?.fontSize };
    font-weight: ${ fontScale('c2')?.fontWeight };
    line-height: ${ fontScale('c2')?.lineHeight };
    letter-spacing: ${ fontScale('c2')?.letterSpacing };
  }

  h5 {
    font-size: ${ fontScale('micro')?.fontSize };
    font-weight: ${ fontScale('micro')?.fontWeight };
    line-height: ${ fontScale('micro')?.lineHeight };
    letter-spacing: ${ fontScale('micro')?.letterSpacing };
  }

  h6 {
    font-size: ${ fontScale('micro')?.fontSize };
    font-weight: ${ fontScale('micro')?.fontWeight };
    line-height: ${ fontScale('micro')?.lineHeight };
    letter-spacing: ${ fontScale('micro')?.letterSpacing };
  }

  p {
    font-size: ${ fontScale('p1')?.fontSize };
    font-weight: ${ fontScale('p1')?.fontWeight };
    line-height: ${ fontScale('p1')?.lineHeight };
    letter-spacing: ${ fontScale('p1')?.letterSpacing };
  }

  ul,
  ol {
    padding-inline-start: ${ padding('x40') };
  }

  ul {
    font-size: ${ fontScale('p1')?.fontSize };
    font-weight: ${ fontScale('p1')?.fontWeight };
    line-height: ${ fontScale('p1')?.lineHeight };
    letter-spacing: ${ fontScale('p1')?.letterSpacing };
    list-style-type: disc;
  }

  ol {
    font-size: ${ fontScale('p1')?.fontSize };
    font-weight: ${ fontScale('p1')?.fontWeight };
    line-height: ${ fontScale('p1')?.lineHeight };
    letter-spacing: ${ fontScale('p1')?.letterSpacing };
    list-style-type: decimal;
  }

  li {
    display: list-item;
    text-align: inherit;
  }

  pre {
    font-family: ${ fontFamily('mono') };

    code {
      display: block;
      padding: ${ padding('x16') };
    }
  }
`;
