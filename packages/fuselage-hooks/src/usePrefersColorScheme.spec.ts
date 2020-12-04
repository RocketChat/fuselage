import { createElement, FunctionComponent, StrictMode } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { usePrefersColorScheme } from '.';
import matchMediaMock from './__mocks__/matchMedia';

describe('usePrefersColorScheme hook', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
    container = null;
  });

  it('should return false on the initial call', () => {
    let matches: boolean;

    const TestComponent: FunctionComponent = () => {
      matches = usePrefersColorScheme();
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        container
      );
    });

    expect(matches).toBe(false);
  });

  it('should return true with matchMedia mocked and anything set', () => {
    window.matchMedia = jest.fn((media) =>
      matchMediaMock(media, '(prefers-color-scheme: light)')
    );

    let matches: boolean;
    const TestComponent: FunctionComponent = () => {
      matches = usePrefersColorScheme();
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    expect(matches).toBe(true);
  });

  it('should return true with matchMedia mocked and light scheme set', () => {
    window.matchMedia = jest.fn((media) =>
      matchMediaMock(media, '(prefers-color-scheme: light)')
    );

    let matches: boolean;
    const TestComponent: FunctionComponent = () => {
      matches = usePrefersColorScheme('light');
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    expect(matches).toBe(true);
  });

  it('should return true with matchMedia mocked and dark scheme set', () => {
    window.matchMedia = jest.fn((media) =>
      matchMediaMock(media, '(prefers-color-scheme: dark)')
    );

    let matches: boolean;
    const TestComponent: FunctionComponent = () => {
      matches = usePrefersColorScheme('dark');
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    expect(matches).toBe(true);
  });
});
