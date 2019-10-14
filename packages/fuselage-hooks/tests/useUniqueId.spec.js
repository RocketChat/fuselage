import { testHook } from '../.jest/helpers';
import { useUniqueId } from '../src';

describe('useUniqueId hook', () => {
  it('returns a string', () => {
    const uniqueId = testHook(() => useUniqueId());

    expect(uniqueId).toStrictEqual(expect.any(String));
  });

  it('returns a unique ID', () => {
    const uniqueA = testHook(() => useUniqueId());
    const uniqueB = testHook(() => useUniqueId());

    expect(uniqueA).not.toBe(uniqueB);
  });

  it('returns the same ID on each render cycle', () => {
    let uniqueA;
    let uniqueB;
    testHook(
      () => useUniqueId(),
      (uniqueId) => {
        uniqueA = uniqueId;
      },
      (uniqueId) => {
        uniqueB = uniqueId;
      },
    );

    expect(uniqueA).toBe(uniqueB);
  });
});
