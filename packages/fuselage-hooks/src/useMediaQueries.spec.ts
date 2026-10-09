import { withMatchMediaMock } from 'testing-utils/mocks/withMatchMediaMock';

import { renderHook, act } from './testing';
import { useMediaQueries } from './useMediaQueries';

const setViewport = withMatchMediaMock();

it('refreshes results when queries change without a viewport change', () => {
  const { result, rerender } = renderHook(
    ({ queries }) => useMediaQueries(...queries),
    { initialProps: { queries: ['(max-width: 1024px)'] } },
  );

  expect(result.current).toEqual([true]);
  rerender({ queries: ['(max-width: 968px)'] });
  expect(result.current).toEqual([false]);
  rerender({ queries: ['(max-width: 968px)', '(max-width: 1024px)'] });
  expect(result.current).toEqual([false, true]);
  rerender({ queries: ['(max-width: 1024px)', '(max-width: 968px)'] });
  expect(result.current).toEqual([true, false]);
  rerender({ queries: [] });
  expect(result.current).toEqual([]);
});

it('continues tracking viewport changes after replacing queries', () => {
  const { result, rerender } = renderHook(
    ({ query }) => useMediaQueries(query),
    { initialProps: { query: '(max-width: 1024px)' } },
  );

  rerender({ query: '(max-width: 968px)' });
  expect(result.current).toEqual([false]);
  act(() => setViewport({ width: 900 }));
  expect(result.current).toEqual([true]);
  act(() => setViewport({ width: 1000 }));
  expect(result.current).toEqual([false]);
});

it('returns empty array if no query is given', () => {
  const { result } = renderHook(() => useMediaQueries());

  expect(result.current).toEqual([]);
});

it("returns false values if the media queries don't match", () => {
  const { result } = renderHook(() =>
    useMediaQueries('(max-width: 1024px)', '(max-width: 968px)'),
  );

  expect(result.current).toEqual([true, false]);
});

it('returns true if the media query does match', () => {
  setViewport({ width: 968 });

  const { result } = renderHook(() =>
    useMediaQueries('(max-width: 1024px)', '(max-width: 968px)'),
  );

  expect(result.current).toEqual([true, true]);
});

it('mutates its value to true if the media query matches', async () => {
  const { result } = renderHook(() =>
    useMediaQueries('(max-width: 1024px)', '(max-width: 968px)'),
  );

  expect(result.current).toEqual([true, false]);

  await act(async () => {
    setViewport({ width: 968 });
  });

  expect(result.current).toEqual([true, true]);

  await act(async () => {
    setViewport({ width: 1024 });
  });

  expect(result.current).toEqual([true, false]);
});
