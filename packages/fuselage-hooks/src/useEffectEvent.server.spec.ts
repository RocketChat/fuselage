import { it, expect, vi } from 'vitest';

import { renderHook } from './testing.ts';
import { useEffectEvent } from './useEffectEvent';

it('returns a callback that invokes the mutable one', () => {
  const fn = vi.fn();

  const { result } = renderHook(() => useEffectEvent(fn));

  result.current();

  expect(fn).toHaveBeenCalledTimes(1);
});
