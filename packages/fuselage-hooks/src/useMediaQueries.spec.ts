import { FunctionComponent, createElement, StrictMode } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import resizeToMock from './__mocks__/resizeTo';
import matchMediaMock from './__mocks__/matchMedia';
import { useMediaQueries } from '.';

beforeAll(() => {
  window.resizeTo = resizeToMock;
  window.matchMedia = jest.fn(matchMediaMock);
});

beforeEach(() => {
  window.resizeTo(1024, 768);
});

it('returns empty array if no query is given', () => {
  let matches: boolean[];
  const TestComponent: FunctionComponent = () => {
    matches = useMediaQueries();
    return null;
  };

  act(() => {
    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div'),
    );
  });

  expect(matches).toStrictEqual([]);
});

it('returns false values if the media queries don\'t match', () => {
  let matches: boolean[];
  const TestComponent: FunctionComponent = () => {
    matches = useMediaQueries('(max-width: 1024px)', '(max-width: 968px)');
    return null;
  };

  act(() => {
    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div'),
    );
  });

  expect(matches).toStrictEqual([true, false]);
});

it('returns true if the media query does match', () => {
  window.resizeTo(968, 768);

  let matches: boolean[];
  const TestComponent: FunctionComponent = () => {
    matches = useMediaQueries('(max-width: 1024px)', '(max-width: 968px)');
    return null;
  };

  act(() => {
    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div'),
    );
  });

  expect(matches).toStrictEqual([true, true]);
});

it('mutates its value to true if the media query matches', () => {
  let matches: boolean[];
  const TestComponent: FunctionComponent = () => {
    matches = useMediaQueries('(max-width: 1024px)', '(max-width: 968px)');
    return null;
  };

  act(() => {
    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div'),
    );
  });

  const matchesA = matches;

  act(() => {
    window.resizeTo(968, 768);
  });

  const matchesB = matches;

  act(() => {
    window.resizeTo(1024, 768);
  });

  const matchesC = matches;

  expect(matchesA).toStrictEqual([true, false]);
  expect(matchesB).toStrictEqual([true, true]);
  expect(matchesC).toStrictEqual([true, false]);
});
