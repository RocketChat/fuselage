import { transpile } from '.';

describe('transpile', () => {
  it('transpiles simple properties', () => {
    expect(transpile('div', 'color: inherit;'))
      .toBe('div{color:inherit;}');
  });

  it('transpiles with vendor prefixing', () => {
    expect(transpile('div', 'display: flex;'))
      .toBe('div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}');
  });
});
