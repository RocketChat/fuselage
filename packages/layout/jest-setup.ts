import '@testing-library/jest-dom/vitest';

import { TextEncoder } from 'node:util';

import { cleanup } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';
import { expect, vi, afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

expect.extend(toHaveNoViolations);

Object.assign(globalThis, { TextEncoder });

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
