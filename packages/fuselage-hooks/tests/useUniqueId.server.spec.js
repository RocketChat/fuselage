/**
 * @jest-environment node
 */

import { runHooksOnServer } from '../.jest/helpers';
import { useUniqueId } from '../src';

describe('useUniqueId hook on server', () => {
  it('returns a string', () => {
    const uniqueId = runHooksOnServer(() => useUniqueId());

    expect(uniqueId).toStrictEqual(expect.any(String));
  });

  it('returns a unique ID', () => {
    const uniqueA = runHooksOnServer(() => useUniqueId());
    const uniqueB = runHooksOnServer(() => useUniqueId());

    expect(uniqueA).not.toBe(uniqueB);
  });
});
