import { transpile } from './transpile';

describe('transpile', () => {
  it('transpiles simple properties', () => {
    expect(transpile('div', 'color: red;'))
      .toBe('div{color:red;}');
  });

  it('transpiles with vendor prefixing', () => {
    expect(transpile('div', 'display: flex;'))
      .toBe('div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}');
  });

  it('transpiles with logical properties support', () => {
    expect(transpile('div', 'margin-inline: 0;', {
      marginInline: true,
    }))
      .toBe('div{margin-inline:0;}');

    expect(transpile('div', 'margin-inline: 0;', {
      marginInline: false,
      marginInlineStart: true,
      marginInlineEnd: true,
    }))
      .toBe('div{margin-inline-start:0;margin-inline-end:0;}');

    expect(transpile('div', 'margin-inline: 0;', {
      marginInline: false,
      marginInlineStart: false,
      marginInlineEnd: false,
    }))
      .toBe('div{margin-left:0;margin-right:0;}');
  });
});
