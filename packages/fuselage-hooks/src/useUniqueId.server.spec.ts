import { renderHook } from './testing';
import { useUniqueId } from './useUniqueId';

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
