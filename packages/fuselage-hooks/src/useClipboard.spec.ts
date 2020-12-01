import { createElement, FunctionComponent, StrictMode } from 'react';
import { render } from 'react-dom';
import { act, isElement } from 'react-dom/test-utils';

import { useClipboard } from './useClipboard';

describe('useClipboard hook', () => {
  it('check if TestComponent is an Element', () => {
    const TestComponent: FunctionComponent = () => {
      return null;
    };

    isElement(TestComponent);
  });

  it('check hook properties', () => {
    let hookObject: { copy: () => void; hasCopied: boolean };
    const TestComponent: FunctionComponent = () => {
      hookObject = useClipboard('Lorem Ipsum');
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    expect(hookObject).toHaveProperty('copy');
    expect(hookObject).toHaveProperty('hasCopied');
  });
});
