import { transpile } from './transpile';

describe('transpile', () => {
  it('transpiles simple properties', () => {
    const rules = transpile('div', 'color: red;');
    expect(rules).toBe('div{color:red;}');
  });

  it('transpiles with vendor prefixing', () => {
    const rules = transpile('div', 'display: flex;');
    expect(rules).toBe('div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}');
  });
});
