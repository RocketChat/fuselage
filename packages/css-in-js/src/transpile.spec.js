import { transpile } from './transpile';

describe('transpile', () => {
  it('returns CSS transpiled rules', () => {
    const rules = transpile('h1', 'color: red;');
    expect(rules).toBe('h1{color:red;}');
  });
});
