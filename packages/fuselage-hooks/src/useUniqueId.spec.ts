import { renderHook } from '@testing-library/react-hooks';

import { useUniqueId } from '.';

it('returns a string', () => {
  const { result } = renderHook(() => useUniqueId());
  expect(result.current).toStrictEqual(expect.any(String));
});

it('returns a unique ID', () => {
  const renderingA = renderHook(() => useUniqueId());
  const renderingB = renderHook(() => useUniqueId());

  const uniqueIdA = renderingA.result.current;
  const uniqueIdB = renderingB.result.current;
  expect(uniqueIdA).not.toBe(uniqueIdB);
});

it('returns the same ID on each render cycle', () => {
  const { result, rerender } = renderHook(() => useUniqueId());
  rerender();

  const [uniqueIdA, uniqueIdB] = result.all;

  expect(uniqueIdA).toBe(uniqueIdB);
});
