import { createElement, FunctionComponent, StrictMode } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { usePrefersReducedData } from '.';
import matchMediaMock from './__mocks__/matchMedia';

describe('usePrefersReducedData hook', () => {
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
      matches = usePrefersReducedData();
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

  it('should returns true with matchMedia mocked', () => {
    window.matchMedia = jest.fn((media) =>
      matchMediaMock(media, '(prefers-reduced-data: reduce)')
    );

    let matches: boolean;
    const TestComponent: FunctionComponent = () => {
      matches = usePrefersReducedData();
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
