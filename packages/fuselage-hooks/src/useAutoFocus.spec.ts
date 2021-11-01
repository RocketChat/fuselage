import { renderHook, act } from '@testing-library/react-hooks';
import { useImperativeHandle, useState } from 'react';

import { useAutoFocus } from './useAutoFocus';

const focus = jest.fn();

afterEach(() => {
  focus.mockClear();
});

it('invokes focus', async () => {
  renderHook(() => {
    const ref = useAutoFocus();
    useImperativeHandle(ref, () => ({ focus }));
  });

  act(() => undefined);

  expect(focus).toHaveBeenCalledTimes(1);
});

it('does not invoke focus if isFocused is false', () => {
  renderHook(() => {
    const ref = useAutoFocus(false);
    useImperativeHandle(ref, () => ({ focus }));
  });

  act(() => undefined);

  expect(focus).toHaveBeenCalledTimes(0);
});

it('invokes focus if isFocused is toggled', () => {
  const { result } = renderHook(() => {
    const [isFocused, setIsFocused] = useState(false);
    const ref = useAutoFocus(isFocused);
    useImperativeHandle(ref, () => ({ focus }));
    return { setIsFocused };
  });

  act(() => undefined);

  expect(focus).toHaveBeenCalledTimes(0);

  act(() => {
    result.current.setIsFocused(true);
  });

  expect(focus).toHaveBeenCalledTimes(1);
});
