/**
 * @jest-environment node
 */

import { renderHook } from '@testing-library/react-hooks/server';

import { usePrefersReducedMotion } from '.';

it('should return false on the initial call', () => {
  const { result } = renderHook(() => usePrefersReducedMotion());

  expect(result.current).toBe(false);
});
