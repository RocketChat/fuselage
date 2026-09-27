import { renderHook } from '@testing-library/react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { useBoundingClientRectChanges } from './useBoundingClientRectChanges';

withResizeObserverMock();

it('updates when the document viewport scrolls and removes the listener on unmount', () => {
  const element = document.createElement('div');
  document.body.append(element);
  const callback = jest.fn();
  const ref = { current: element };
  const { unmount } = renderHook(() =>
    useBoundingClientRectChanges(ref, callback),
  );
  callback.mockClear();

  document.dispatchEvent(new Event('scroll'));
  expect(callback).toHaveBeenCalledTimes(1);

  unmount();
  callback.mockClear();
  document.dispatchEvent(new Event('scroll'));
  expect(callback).not.toHaveBeenCalled();
  element.remove();
});

it('keeps updates for non-bubbling ancestor scroll events', () => {
  const parent = document.createElement('div');
  const element = document.createElement('div');
  parent.append(element);
  document.body.append(parent);
  const callback = jest.fn();
  const ref = { current: element };
  const { unmount } = renderHook(() =>
    useBoundingClientRectChanges(ref, callback),
  );
  callback.mockClear();

  parent.dispatchEvent(new Event('scroll'));
  expect(callback).toHaveBeenCalledTimes(1);

  unmount();
  callback.mockClear();
  parent.dispatchEvent(new Event('scroll'));
  expect(callback).not.toHaveBeenCalled();
  parent.remove();
});
