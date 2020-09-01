import { css } from '@rocket.chat/css-in-js';

import {
  color,
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
    padding: 4px 8px;
    border-radius: 2px;
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
      border-block-end-width: 0px;
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
    padding: 4px 8px;
    border-width: 1px;
    border-style: solid;
    border-color: currentColor;
    border-radius: 2px;
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
    margin: 16px 0px;
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
    padding-inline-start: 40px;
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
      padding: 16px;
    }
  }
`;
