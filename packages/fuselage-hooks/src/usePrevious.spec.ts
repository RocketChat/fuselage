import { FunctionComponent, createElement, StrictMode, useState } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { usePrevious } from '.';

it('returns previous values', () => {
  let previous: number | undefined;
  let current: number;
  let increment: () => void;

  const TestComponent: FunctionComponent = () => {
    const [count, setCount] = useState(0);
    previous = usePrevious(count);

    current = count;
    increment = () => {
      setCount((count) => count + 1);
    };

    return null;
  };

  act(() => {
    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div')
    );
  });

  expect(current).toBe(0);
  expect(previous).toBe(undefined);

  act(increment);

  expect(current).toBe(1);
  expect(previous).toBe(0);

  act(increment);

  expect(current).toBe(2);
  expect(previous).toBe(1);
});
