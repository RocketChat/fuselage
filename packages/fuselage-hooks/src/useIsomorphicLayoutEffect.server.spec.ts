/**
 * @jest-environment node
 */

import { renderHook } from '@testing-library/react-hooks/server';

import { useIsomorphicLayoutEffect } from '.';

it('performs a useEffect', () => {
  const watcher = jest.fn();

  renderHook(() => {
    useIsomorphicLayoutEffect(() => {
      watcher();
    });
  });

  expect(watcher).toBeCalledTimes(0);
});
