import breakpoints from '@rocket.chat/fuselage-tokens/breakpoints.json';
import { renderHook, act } from '@testing-library/react-hooks';
import { withMatchMediaMock } from 'testing-utils/mocks/withMatchMediaMock';

import { useBreakpoints } from '.';

const setViewport = withMatchMediaMock();

it('returns at least the smallest breakpoint name', () => {
  const { result } = renderHook(() => useBreakpoints());

  expect(result.current[0]).toBe(breakpoints[0].name);
});

it('returns matching breakpoint names', async () => {
  const initialBreakpoints = breakpoints.slice(0, -1);
  const finalBreakpoints = breakpoints.slice(0, -2);

  setViewport({
    width: initialBreakpoints[initialBreakpoints.length - 1].minViewportWidth,
  });

  const { result } = renderHook(() => useBreakpoints());

  expect(result.current).toEqual(
    initialBreakpoints.map((breakpoint) => breakpoint.name)
  );

  await act(async () => {
    setViewport({
      width: finalBreakpoints[finalBreakpoints.length - 1].minViewportWidth,
    });
  });

  expect(result.current).toStrictEqual(
    finalBreakpoints.map((breakpoint) => breakpoint.name)
  );
});
