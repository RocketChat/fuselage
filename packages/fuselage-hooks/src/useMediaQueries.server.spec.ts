/**
 * @jest-environment node
 */

import { renderHook } from '@testing-library/react-hooks/server';

import { useMediaQueries } from '.';

it('returns empty array for undefined media query', () => {
  const { result } = renderHook(() => useMediaQueries());

  expect(result.current).toStrictEqual([]);
});

it('returns false for defined media query', () => {
  const { result } = renderHook(() => useMediaQueries('(max-width: 1024)'));

  expect(result.current).toEqual([false]);
});
