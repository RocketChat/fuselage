import { createElement, useEffect, FunctionComponent, StrictMode } from 'react';
import { render } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';

import { useClipboard } from './useClipboard';

describe('useClipboard hook', () => {
  it('check hook properties', async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: () => {
          return new Promise((resolve) => {
            return resolve();
          });
        },
      },
    });

    const onCopySuccess = jest.fn(() => {
      console.log('Gabriel');
      expect.anything();
    });
    const onCopyError = jest.fn(() => {
      expect.anything();
    });

    let hookObject: { copy: () => void; hasCopied: boolean };
    let myRef;
    let resolveCopied;
    const hasTestCopied = new Promise((resolve) => {
      resolveCopied = resolve;
    });

    const TestComponent: FunctionComponent = () => {
      hookObject = useClipboard('Lorem Ipsum Indolor Dolor', {
        onCopySuccess,
        onCopyError,
      });

      act(() => {
        useEffect(() => {
          if (hookObject.hasCopied) {
            resolveCopied(true);
          }
        });
      });

      return createElement('div', {
        onClick: hookObject.copy,
        ref: (node) => {
          myRef = node;
        },
      });
    };

    let element;
    act(() => {
      element = createElement(TestComponent);
      render(
        createElement(StrictMode, {}, element),
        document.createElement('div')
      );
    });

    expect(hookObject).toHaveProperty('copy');
    expect(hookObject).toHaveProperty('hasCopied');

    act(() => {
      Simulate.click(myRef);
    });

    // expect(hookObject.copy).toHaveBeenCalledTimes(1);
    // expect(onCopySuccess).toHaveBeenCalledTimes(1);
    expect(await hasTestCopied).toBe(true);
    expect.assertions(5);

    // expect(onCopySuccess).toBeCalledWith(
    //   expect.objectContaining({ type: 'click' })
    // );

    Object.assign(navigator, {
      clipboard: {
        writeText: () => {
          return new Promise((reject) => {
            return reject('error');
          });
        },
      },
    });

    act(() => {
      Simulate.click(myRef);
    });

    expect(onCopyError).toHaveBeenCalledTimes(1);
  });
});
