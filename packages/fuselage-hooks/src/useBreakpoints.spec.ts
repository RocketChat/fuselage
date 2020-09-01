import breakpointTokens from '@rocket.chat/fuselage-tokens/breakpoints.json';
import { FunctionComponent, createElement, StrictMode } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import resizeToMock from './__mocks__/resizeTo';
import matchMediaMock from './__mocks__/matchMedia';
import { useBreakpoints } from '.';

const sortedBreakpoints = Object.entries(breakpointTokens)
  .map(([name, params]) => ({ name, ...params }))
  .sort((a, b) => (a.minViewportWidth ?? 0) - (b.minViewportWidth ?? 0));

beforeAll(() => {
  window.resizeTo = resizeToMock;
  window.matchMedia = jest.fn(matchMediaMock);
});

beforeEach(() => {
  window.resizeTo(1024, 768);
});

it('returns at least the smallest breakpoint name', () => {
  let breakpoints: string[];
  const TestComponent: FunctionComponent = () => {
    breakpoints = useBreakpoints();
    return null;
  };

  act(() => {
    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div'),
    );
  });

  expect(breakpoints[0]).toBe('xs');
});

it('returns matching breakpoint names', () => {
  const initialBreakpoints = sortedBreakpoints.slice(0, -1);
  const finalBreakpoints = sortedBreakpoints.slice(0, -2);

  let breakpoints: string[];
  const TestComponent: FunctionComponent = () => {
    breakpoints = useBreakpoints();
    return null;
  };

  act(() => {
    window.resizeTo(initialBreakpoints[initialBreakpoints.length - 1].minViewportWidth, 768);

    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div'),
    );
  });

  expect(breakpoints).toStrictEqual(initialBreakpoints.map((breakpoint) => breakpoint.name));

  act(() => {
    window.resizeTo(finalBreakpoints[finalBreakpoints.length - 1].minViewportWidth, 768);

    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div'),
    );
  });

  expect(breakpoints).toStrictEqual(finalBreakpoints.map((breakpoint) => breakpoint.name));
});
