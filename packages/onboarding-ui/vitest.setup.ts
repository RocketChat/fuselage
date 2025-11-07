import '@testing-library/jest-dom/vitest';

import { TextEncoder } from 'node:util';

import { configure, cleanup } from '@testing-library/react';
import i18next from 'i18next';
import { toHaveNoViolations } from 'jest-axe';
import { initReactI18next } from 'react-i18next';
import { vi, beforeAll, afterEach, expect } from 'vitest';

configure({ reactStrictMode: true });

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

beforeAll(async () => {
  return i18next.use(initReactI18next).init({
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: {
        translation: await import('./.i18n/en.i18n.json'),
      },
    },
  });
});

expect.extend(toHaveNoViolations);
