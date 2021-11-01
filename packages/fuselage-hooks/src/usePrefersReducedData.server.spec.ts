/**
 * @jest-environment node
 */

import { renderHook } from '@testing-library/react-hooks/server';

import { usePrefersReducedData } from './usePrefersReducedData';

it('should return false on the initial call', () => {
  const { result } = renderHook(() => usePrefersReducedData());

  expect(result.current).toBe(false);
});
