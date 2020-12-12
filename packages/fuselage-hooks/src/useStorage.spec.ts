import {
  createElement,
  FunctionComponent,
  StrictMode,
  Dispatch,
  SetStateAction,
} from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { useLocalStorage, useSessionStorage } from './useStorage';

describe('useLocalStorage hook', () => {
  it('returns a default value', () => {
    let value: string;
    const TestComponent: FunctionComponent = () => {
      [value] = useLocalStorage('value-key', 'value-default');
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    expect(value).toStrictEqual('value-default');
  });

  it('returns a new value', () => {
    let value: string;
    let setValue: Dispatch<SetStateAction<string>>;

    const TestComponent: FunctionComponent = () => {
      [value, setValue] = useLocalStorage('value-key', 'value-default');
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    act(() => {
      setValue('value-new');
    });

    expect(value).toStrictEqual('value-new');
  });
});

describe('useSessionStorage hook', () => {
  it('returns a default value', () => {
    let value: string;
    const TestComponent: FunctionComponent = () => {
      [value] = useSessionStorage('value-key', 'value-default');
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    expect(value).toStrictEqual('value-default');
  });

  it('returns a new value', () => {
    let value: string;
    let setValue: Dispatch<SetStateAction<string>>;

    const TestComponent: FunctionComponent = () => {
      [value, setValue] = useSessionStorage('value-key', 'value-default');
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    act(() => {
      setValue('value-new');
    });

    expect(value).toStrictEqual('value-new');
  });
});
