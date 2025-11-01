import { renderHook } from './testing.ts';
import { useResizeObserver } from './useResizeObserver';

it('immediately returns undefined sizes', () => {
  const { result } = renderHook(() => useResizeObserver());

  expect(result.current.borderBoxSize).toEqual({
    inlineSize: undefined,
    blockSize: undefined,
  });
  expect(result.current.contentBoxSize).toEqual({
    inlineSize: undefined,
    blockSize: undefined,
  });
});
