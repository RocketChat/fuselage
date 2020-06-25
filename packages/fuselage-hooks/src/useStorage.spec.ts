import { createElement, FunctionComponent, StrictMode } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { useLocalStorage } from './useStorage';

describe('useLocalStorage hook', () => {
  it('returns a default value', async () => {
    let value: string;
    const TestLocalStorageComponent: FunctionComponent = () => {
      [value] = useLocalStorage('value-key', 'value-default');
      return null;
    };
    await act(async () => {
      render(
        createElement(StrictMode, {}, createElement(TestLocalStorageComponent)),
        document.createElement('div'),
      );
    });
    expect(value).toStrictEqual('value-default');
  });


  it('returns a new value', async () => {
    let value: string;
    let setValue;
    const TestLocalStorageComponent: FunctionComponent = () => {
      [value, setValue] = useLocalStorage('value-key', 'value-default');
      return null;
    };

    await act(async () => {
      render(
        createElement(StrictMode, {}, createElement(TestLocalStorageComponent)),
        document.createElement('div'),
      );
    });

    act(() => {
      setValue('value-new');
    });

    expect(value).toStrictEqual('value-new');
  });
});
