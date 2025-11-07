import '@testing-library/jest-dom/vitest';

import { TextEncoder } from 'node:util';

import { cleanup } from '@testing-library/react';
import { vi, beforeAll, afterEach } from 'vitest';

// configure({ reactStrictMode: true });

Object.assign(globalThis, { TextEncoder });

afterEach(() => {
  cleanup();
});

// Mocking ResizeObserver
class ResizeObserver {
  observe() {}

  unobserve() {}

  disconnect() {}
}

beforeAll(() => {
  vi.stubGlobal('ResizeObserver', ResizeObserver);
});
