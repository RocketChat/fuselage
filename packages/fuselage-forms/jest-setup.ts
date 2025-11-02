import '@testing-library/jest-dom/vitest';
import { toHaveNoViolations } from 'jest-axe';
import { expect, vi } from 'vitest';

expect.extend(toHaveNoViolations);

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
