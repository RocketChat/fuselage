/**
 * @jest-environment node
 */

import { renderHook } from '@testing-library/react-hooks/server';

import { usePrefersColorScheme } from '.';

it('should return false on the initial call', () => {
  const { result } = renderHook(() => usePrefersColorScheme());

  expect(result.current).toBe(false);
});
