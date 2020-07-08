import { FC, useState, createElement, StrictMode } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { useStableArray } from '.';

it('uses same-value equality by default', () => {
  const initialSymbolValue = Symbol('initial');
  const finalSymbolValue = Symbol('final');
  const initialNumberValue = -0;
  const finalNumberValue = 0;

  let setArray: (array: [symbol, number]) => void;
  let stableArray: [symbol, number];
  const TestComponent: FC = () => {
    let array: [symbol, number];
    [array, setArray] = useState([initialSymbolValue, initialNumberValue]);
    stableArray = useStableArray(array);
    return null;
  };

  act(() => {
    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div'),
    );
  });

  expect(stableArray[0]).toBe(initialSymbolValue);
  expect(stableArray[1]).toBe(initialNumberValue);
  let prevStableArray = stableArray;

  act(() => {
    setArray([initialSymbolValue, initialNumberValue]);
  });

  expect(stableArray).toBe(prevStableArray);
  expect(stableArray[0]).toBe(initialSymbolValue);
  expect(stableArray[1]).toBe(initialNumberValue);
  prevStableArray = stableArray;

  act(() => {
    setArray([finalSymbolValue, initialNumberValue]);
  });

  expect(stableArray).not.toBe(prevStableArray);
  expect(stableArray[0]).toBe(finalSymbolValue);
  expect(stableArray[1]).toBe(initialNumberValue);
  prevStableArray = stableArray;

  act(() => {
    setArray([finalSymbolValue, initialNumberValue]);
  });

  expect(stableArray).toBe(prevStableArray);
  expect(stableArray[0]).toBe(finalSymbolValue);
  expect(stableArray[1]).toBe(initialNumberValue);
  prevStableArray = stableArray;

  act(() => {
    setArray([finalSymbolValue, finalNumberValue]);
  });

  expect(stableArray).not.toBe(prevStableArray);
  expect(stableArray[0]).toBe(finalSymbolValue);
  expect(stableArray[1]).toBe(finalNumberValue);
  prevStableArray = stableArray;

  act(() => {
    setArray([finalSymbolValue, finalNumberValue]);
  });

  expect(stableArray).toBe(prevStableArray);
  expect(stableArray[0]).toBe(finalSymbolValue);
  expect(stableArray[1]).toBe(finalNumberValue);
  prevStableArray = stableArray;
});

it('uses a custom equality function', () => {
  const initialSymbolValue = Symbol('initial');
  const finalSymbolValue = Symbol('final');
  const initialNumberValue = -0;
  const finalNumberValue = 0;
  const compare = (a: unknown, b: unknown): boolean => typeof a === typeof b;

  let setArray: (array: [symbol, number]) => void;
  let stableArray: [symbol, number];
  const TestComponent: FC = () => {
    let array: [symbol, number];
    [array, setArray] = useState([initialSymbolValue, initialNumberValue]);
    stableArray = useStableArray(array, compare);
    return null;
  };

  act(() => {
    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div'),
    );
  });

  expect(stableArray[0]).toBe(initialSymbolValue);
  expect(stableArray[1]).toBe(initialNumberValue);
  let prevStableArray = stableArray;

  act(() => {
    setArray([initialSymbolValue, initialNumberValue]);
  });

  expect(stableArray).toBe(prevStableArray);
  expect(stableArray[0]).toBe(initialSymbolValue);
  expect(stableArray[1]).toBe(initialNumberValue);
  prevStableArray = stableArray;

  act(() => {
    setArray([finalSymbolValue, initialNumberValue]);
  });

  expect(stableArray).toBe(prevStableArray);
  expect(stableArray[0]).toBe(initialSymbolValue);
  expect(stableArray[1]).toBe(initialNumberValue);
  prevStableArray = stableArray;

  act(() => {
    setArray([finalSymbolValue, initialNumberValue]);
  });

  expect(stableArray).toBe(prevStableArray);
  expect(stableArray[0]).toBe(initialSymbolValue);
  expect(stableArray[1]).toBe(initialNumberValue);
  prevStableArray = stableArray;

  act(() => {
    setArray([finalSymbolValue, finalNumberValue]);
  });

  expect(stableArray).toBe(prevStableArray);
  expect(stableArray[0]).toBe(initialSymbolValue);
  expect(stableArray[1]).toBe(initialNumberValue);
  prevStableArray = stableArray;

  act(() => {
    setArray([finalSymbolValue, finalNumberValue]);
  });

  expect(stableArray).toBe(prevStableArray);
  expect(stableArray[0]).toBe(initialSymbolValue);
  expect(stableArray[1]).toBe(initialNumberValue);
  prevStableArray = stableArray;
});
