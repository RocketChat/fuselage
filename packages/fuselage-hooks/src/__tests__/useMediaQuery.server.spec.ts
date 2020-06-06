/**
 * @jest-environment node
 */

import { runHooksOnServer } from '../jestHelpers';

import { useMediaQuery } from '..';

describe('useMediaQuery hook on server', () => {
  it('returns false for undefined media query', () => {
    const value = runHooksOnServer(() => useMediaQuery());
    expect(value).toBe(false);
  });

  it('returns false for defined media query', () => {
    const value = runHooksOnServer(() => useMediaQuery('(max-width: 1024)'));
    expect(value).toBe(false);
  });
});
