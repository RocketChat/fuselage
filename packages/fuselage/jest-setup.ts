import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';

const cssInJsClassRegex = /^rcx-css-[a-z0-9]+$/;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R> {
      toHaveCssInJsClass(): R;
    }
  }
}

expect.extend({
  toHaveCssInJsClass: (received: Element | null) => {
    if (!received) {
      return {
        message: () => 'expected received element not to be null',
        pass: false,
      };
    }

    for (let i = 0; i < received.classList.length; ++i) {
      const className = received.classList.item(i);
      const matches = className ? cssInJsClassRegex.test(className) : false;

      if (matches) {
        return {
          message: () =>
            'expected received element not to have a css-in-js class',
          pass: true,
        };
      }
    }

    return {
      message: () => 'expected received element to have a css-in-js class',
      pass: false,
    };
  },
});

expect.extend(toHaveNoViolations);

window.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
