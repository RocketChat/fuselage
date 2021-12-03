/**
 * @jest-environment node
 */

import { renderHook } from '@testing-library/react-hooks/server';

import { useLazyRef } from './useLazyRef';

it('returns the computed value immediately', () => {
  const computedValue = Symbol('computed');

  const { result } = renderHook(() => useLazyRef(() => computedValue));

  expect(result.current.current).toBe(computedValue);
});
