/**
 * @jest-environment node
 */

import { runHooksOnServer } from '../.jest/helpers';
import { useMediaQuery } from '../src';

describe('useMediaQuery hook', () => {
  it('returns false for undefined media query', () => {
    const value = runHooksOnServer(() => useMediaQuery());
    expect(value).toBe(false);
  });

  it('returns false for defined media query', () => {
    const value = runHooksOnServer(() => useMediaQuery('(max-width: 1024)'));
    expect(value).toBe(false);
  });
});
