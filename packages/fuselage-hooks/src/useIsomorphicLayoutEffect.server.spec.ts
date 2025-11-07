import { it, expect, vi } from 'vitest';

import { renderHook } from './testing.ts';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

it('performs a useEffect', () => {
  const watcher = vi.fn();

  renderHook(() => {
    useIsomorphicLayoutEffect(() => {
      watcher();
    });
  });

  expect(watcher).toHaveBeenCalledTimes(0);
});
