import {
  createElement,
  forwardRef,
  ForwardRefExoticComponent,
  FunctionComponent,
  Ref,
  RefAttributes,
  StrictMode,
  useImperativeHandle,
  useReducer,
} from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { useAutoFocus } from '.';

describe('useAutoFocus hook', () => {
  let focus: () => void;
  let FocusableComponent: ForwardRefExoticComponent<RefAttributes<unknown>>;

  beforeEach(() => {
    focus = jest.fn();
    FocusableComponent = forwardRef((_, ref) => {
      useImperativeHandle(ref, () => ({ focus }));
      return null;
    });
  });

  it('invokes focus', () => {
    let ref: Ref<{ focus: () => void }>;

    const TestComponent: FunctionComponent = () => {
      ref = useAutoFocus();
      return createElement(FocusableComponent, { ref });
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    expect(focus).toHaveBeenCalledTimes(1);
  });

  it('does not invoke focus if isFocused is false', () => {
    let ref: Ref<{ focus: () => void }>;

    const TestComponent: FunctionComponent = () => {
      ref = useAutoFocus(false);
      return createElement(FocusableComponent, { ref });
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    expect(focus).toHaveBeenCalledTimes(0);
  });

  it('invokes focus if isFocused is toggled', () => {
    let requestFocus: () => void;
    let ref: Ref<{ focus: () => void }>;

    const TestComponent: FunctionComponent = () => {
      let isFocused: boolean;
      [isFocused, requestFocus] = useReducer((state) => !state, false);
      ref = useAutoFocus(isFocused);
      return createElement(FocusableComponent, { ref });
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    expect(focus).toHaveBeenCalledTimes(0);

    act(() => {
      requestFocus();
    });

    expect(focus).toHaveBeenCalledTimes(1);
  });
});
