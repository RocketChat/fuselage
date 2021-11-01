/**
 * @jest-environment node
 */

import { renderHook } from '@testing-library/react-hooks/server';

import { useMutableCallback } from './useMutableCallback';

it('returns a callback that invokes the mutable one', () => {
  const fn = jest.fn();

  const { result } = renderHook(() => useMutableCallback(fn));

  result.current();

  expect(fn).toHaveBeenCalledTimes(1);
});
