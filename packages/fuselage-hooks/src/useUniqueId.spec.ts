import { createElement, useReducer, FunctionComponent, StrictMode } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { useUniqueId } from '.';

describe('useUniqueId hook', () => {
  it('returns a string', () => {
    let uniqueId: string;
    const TestComponent: FunctionComponent = () => {
      uniqueId = useUniqueId();
      return null;
    };

    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div'),
    );
    expect(uniqueId).toStrictEqual(expect.any(String));
  });

  it('returns a unique ID', () => {
    let uniqueId: string;
    const TestComponent: FunctionComponent = () => {
      uniqueId = useUniqueId();
      return null;
    };

    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div'),
    );
    const uniqueIdA = uniqueId;

    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div'),
    );
    const uniqueIdB = uniqueId;

    expect(uniqueIdA).not.toBe(uniqueIdB);
  });

  it('returns the same ID on each render cycle', () => {
    let uniqueId: string;
    let forceUpdate: () => void;
    const TestComponent: FunctionComponent = () => {
      uniqueId = useUniqueId();
      [, forceUpdate] = useReducer((state) => !state, false);
      return null;
    };

    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div'),
    );
    const uniqueA = uniqueId;

    act(() => {
      forceUpdate();
    });
    const uniqueB = uniqueId;

    expect(uniqueA).toBe(uniqueB);
  });
});
