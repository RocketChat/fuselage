import { FunctionComponent, createElement, StrictMode } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { useToggle } from '.';

describe('useToggle hook', () => {
  it('has false value when an initial value is undefined', () => {
    let value: boolean;
    const TestComponent: FunctionComponent = () => {
      [value] = useToggle();
      return null;
    };

    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div')
    );

    expect(value).toBe(false);
  });

  it('has false value when an initial value is false', () => {
    let value: boolean;
    const TestComponent: FunctionComponent = () => {
      [value] = useToggle(false);
      return null;
    };

    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div')
    );

    expect(value).toBe(false);
  });

  it('has false value when an initial value is falsy', () => {
    let value: boolean;
    const TestComponent: FunctionComponent = () => {
      [value] = useToggle(0 as unknown as boolean);
      return null;
    };

    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div')
    );

    expect(value).toBe(false);
  });

  it('has false value when an initial value is a function returning false', () => {
    let value: boolean;
    const TestComponent: FunctionComponent = () => {
      [value] = useToggle(() => false);
      return null;
    };

    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div')
    );

    expect(value).toBe(false);
  });

  it('has true value when an initial value is true', () => {
    let value: boolean;
    const TestComponent: FunctionComponent = () => {
      [value] = useToggle(true);
      return null;
    };

    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div')
    );

    expect(value).toBe(true);
  });

  it('has true value when an initial value is truthy', () => {
    let value: boolean;
    const TestComponent: FunctionComponent = () => {
      [value] = useToggle(1 as unknown as boolean);
      return null;
    };

    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div')
    );

    expect(value).toBe(true);
  });

  it('has true value when an initial value is a function returning true', () => {
    let value: boolean;
    const TestComponent: FunctionComponent = () => {
      [value] = useToggle(() => true);
      return null;
    };

    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div')
    );

    expect(value).toBe(true);
  });

  it('toggles false to true when toggleValue is called', () => {
    let value: boolean;
    let toggleValue: () => void;
    const TestComponent: FunctionComponent = () => {
      [value, toggleValue] = useToggle(false);
      return null;
    };

    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div')
    );

    act(() => {
      toggleValue();
    });

    expect(value).toBe(true);
  });

  it('toggles false to true when toggleValue is called twice in the same render cycle', () => {
    let value: boolean;
    let toggleValue: () => void;
    const TestComponent: FunctionComponent = () => {
      [value, toggleValue] = useToggle(false);
      return null;
    };

    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div')
    );

    act(() => {
      toggleValue();
      toggleValue();
    });

    expect(value).toBe(true);
  });

  it('toggles false to false when toggleValue is called at two render cycles', () => {
    let value: boolean;
    let toggleValue: () => void;
    const TestComponent: FunctionComponent = () => {
      [value, toggleValue] = useToggle(false);
      return null;
    };

    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div')
    );

    act(() => {
      toggleValue();
    });

    act(() => {
      toggleValue();
    });

    expect(value).toBe(false);
  });

  it('forces false argument on toggleValue', () => {
    let value: boolean;
    let toggleValue: (forcedValue: boolean) => void;
    const TestComponent: FunctionComponent = () => {
      [value, toggleValue] = useToggle(false);
      return null;
    };

    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div')
    );

    act(() => {
      toggleValue(false);
    });

    expect(value).toBe(false);
  });

  it('forces true argument on toggleValue', () => {
    let value: boolean;
    let toggleValue: (forcedValue: boolean) => void;
    const TestComponent: FunctionComponent = () => {
      [value, toggleValue] = useToggle(true);
      return null;
    };

    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div')
    );

    act(() => {
      toggleValue(true);
    });

    expect(value).toBe(true);
  });
});
