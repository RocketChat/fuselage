import { renderHook } from '@testing-library/react-hooks';
import { withMatchMediaMock } from 'testing-utils/mocks/withMatchMediaMock';

import { usePrefersReducedMotion } from '.';

const setViewport = withMatchMediaMock();

let container: HTMLDivElement;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  container.remove();
  container = null;
});

it('returns false on the initial call', () => {
  const { result } = renderHook(() => usePrefersReducedMotion());

  expect(result.current).toBe(false);
});

it('should returns true with matchMedia mocked', () => {
  setViewport({
    'prefers-reduced-motion': 'reduce',
  });

  const { result } = renderHook(() => usePrefersReducedMotion());

  expect(result.current).toBe(true);
});
