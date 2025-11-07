import { TextEncoder } from 'node:util';

import '@testing-library/jest-dom/vitest';
import { configure, cleanup } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';
import { vi, beforeAll, expect, afterEach } from 'vitest';

expect.extend(toHaveNoViolations);

configure({ reactStrictMode: true });

afterEach(() => {
  cleanup();
});

Object.assign(globalThis, { TextEncoder });

// Mocking ResizeObserver
class ResizeObserver {
  observe() {}

  unobserve() {}

  disconnect() {}
}

beforeAll(() => {
  vi.stubGlobal('ResizeObserver', ResizeObserver);
});
