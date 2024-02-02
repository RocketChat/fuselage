/**
 * @jest-environment node
 */

import { renderHook } from '@testing-library/react-hooks/server';

import { useEffectEvent } from './useEffectEvent';

it('returns a callback that invokes the mutable one', () => {
  const fn = jest.fn();

  const { result } = renderHook(() => useEffectEvent(fn));

  result.current();

  expect(fn).toHaveBeenCalledTimes(1);
});
