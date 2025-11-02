import { withMatchMediaMock } from 'testing-utils/mocks/withMatchMediaMock';
import { it, expect } from 'vitest';

import { renderHook } from './testing.ts';
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
