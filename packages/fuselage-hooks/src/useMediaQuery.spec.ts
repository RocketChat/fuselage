import { FunctionComponent, createElement, StrictMode } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import resizeToMock from './__mocks__/resizeTo';
import matchMediaMock from './__mocks__/matchMedia';
import { useMediaQuery } from '.';

beforeAll(() => {
  window.resizeTo = resizeToMock;
  window.matchMedia = jest.fn(matchMediaMock);
});

beforeEach(() => {
  window.resizeTo(1024, 768);
});

it('does not register a undefined media query', () => {
  const TestComponent: FunctionComponent = () => {
    useMediaQuery();
    return null;
  };

  act(() => {
    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div'),
    );
  });

  expect(window.matchMedia).not.toHaveBeenCalled();
});

it('does register a defined media query', () => {
  const TestComponent: FunctionComponent = () => {
    useMediaQuery('(max-width: 1024px)');
    return null;
  };

  act(() => {
    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div'),
    );
  });

  expect(window.matchMedia).toHaveBeenCalledWith('(max-width: 1024px)');
});

it('returns false if no query is given', () => {
  let matches: boolean;
  const TestComponent: FunctionComponent = () => {
    matches = useMediaQuery();
    return null;
  };

  act(() => {
    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div'),
    );
  });

  expect(matches).toBe(false);
});

it('returns false if the media query does not match', () => {
  let matches: boolean;
  const TestComponent: FunctionComponent = () => {
    matches = useMediaQuery('(max-width: 968px)');
    return null;
  };

  act(() => {
    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div'),
    );
  });

  expect(matches).toBe(false);
});

it('returns true if the media query does match', () => {
  window.resizeTo(968, 768);

  let matches: boolean;
  const TestComponent: FunctionComponent = () => {
    matches = useMediaQuery('(max-width: 968px)');
    return null;
  };

  act(() => {
    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div'),
    );
  });

  expect(matches).toBe(true);
});

it('mutates its value to true if the media query matches', () => {
  let matches: boolean;
  const TestComponent: FunctionComponent = () => {
    matches = useMediaQuery('(max-width: 968px)');
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

  expect(matchesA).toBe(false);
  expect(matchesB).toBe(true);
  expect(matchesC).toBe(false);
});
