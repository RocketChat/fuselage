import { createElement, FunctionComponent, StrictMode, Dispatch, SetStateAction } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { useLocalStorage } from './useStorage';

it('returns a default value', () => {
  let value: string;
  const TestLocalStorageComponent: FunctionComponent = () => {
    [value] = useLocalStorage('value-key', 'value-default');
    return null;
  };

  act(() => {
    render(
      createElement(StrictMode, {}, createElement(TestLocalStorageComponent)),
      document.createElement('div'),
    );
  });

  expect(value).toStrictEqual('value-default');
});

it('returns a new value', () => {
  let value: string;
  let setValue: Dispatch<SetStateAction<string>>;

  const TestLocalStorageComponent: FunctionComponent = () => {
    [value, setValue] = useLocalStorage('value-key', 'value-default');
    return null;
  };

  act(() => {
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
