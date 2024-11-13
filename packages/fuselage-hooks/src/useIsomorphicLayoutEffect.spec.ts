import { renderHook } from './testing';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

it('performs a useLayoutEffect', () => {
  const watcher = jest.fn();

  renderHook(() => {
    useIsomorphicLayoutEffect(() => {
      watcher();
    });
  });

  expect(watcher).toHaveBeenCalledTimes(1);
});
