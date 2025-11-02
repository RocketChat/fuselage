import { TextEncoder } from 'node:util';

import { configure } from '@testing-library/react';
import { vi, beforeAll } from 'vitest';

configure({ reactStrictMode: true });

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
