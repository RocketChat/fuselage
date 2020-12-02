import { createElement, FunctionComponent, StrictMode } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { usePrefersReducedMotion } from '.';

describe('usePrefersReducedMotion hook', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
    container = null;
  });

  it('returns false on the initial call', () => {
    let hookInstance;

    const TestComponent: FunctionComponent = () => {
      hookInstance = usePrefersReducedMotion();
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        container
      );
    });

    expect(hookInstance).toBe(false);
  });
});
