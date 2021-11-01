import { renderHook } from '@testing-library/react-hooks';

import { useIsomorphicLayoutEffect } from '.';

it('performs a useLayoutEffect', () => {
  const watcher = jest.fn();

  renderHook(() => {
    useIsomorphicLayoutEffect(() => {
      watcher();
    });
  });

  expect(watcher).toBeCalledTimes(1);
});
