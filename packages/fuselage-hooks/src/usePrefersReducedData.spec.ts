import { withMatchMediaMock } from 'testing-utils/mocks/withMatchMediaMock';

import { renderHook } from './testing';
import { usePrefersReducedData } from './usePrefersReducedData';

const setViewport = withMatchMediaMock();

it('should return false on the initial call', () => {
  const { result } = renderHook(() => usePrefersReducedData());

  expect(result.current).toBe(false);
});

it('should returns true with matchMedia mocked', () => {
  setViewport({
    'prefers-reduced-data': 'reduce',
  });

  const { result } = renderHook(() => usePrefersReducedData());

  expect(result.current).toBe(true);
});
