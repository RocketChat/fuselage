import { runHooks } from './jestHelpers';
import { useUniqueId } from '.';

describe('useUniqueId hook', () => {
  it('returns a string', () => {
    const [uniqueId] = runHooks(() => useUniqueId());

    expect(uniqueId).toStrictEqual(expect.any(String));
  });

  it('returns a unique ID', () => {
    const uniqueA = runHooks(() => useUniqueId());
    const uniqueB = runHooks(() => useUniqueId());

    expect(uniqueA).not.toBe(uniqueB);
  });

  it('returns the same ID on each render cycle', () => {
    const [uniqueA, uniqueB] = runHooks(() => useUniqueId(), [true]);

    expect(uniqueA).toBe(uniqueB);
  });
});
