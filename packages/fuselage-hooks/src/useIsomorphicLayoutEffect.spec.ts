import { renderHook } from '@testing-library/react';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

it('performs a useLayoutEffect', () => {
  const watcher = jest.fn();

  renderHook(() => {
    useIsomorphicLayoutEffect(() => {
      watcher();
    });
  });

  expect(watcher).toHaveBeenCalled();
});
