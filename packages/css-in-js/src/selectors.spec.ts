import { createSelector } from './selectors';

describe('createSelector', () => {
  it('returns a pair of selector and escaped selector', () => {
    const content = 'h1 { color: red; }';
    const [selector, escapedSelector] = createSelector(content);
    expect(selector).toMatch(/^rcx-@.+$/);
    expect(escapedSelector).toMatch(/^rcx-\\@.+$/);
    expect(selector.slice(5)).toBe(escapedSelector.slice(6));
  });
});
