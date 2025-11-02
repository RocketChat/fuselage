import { beforeAll, afterAll, expect, vi } from 'vitest';

let spyConsoleError;
let spyConsoleWarn;

beforeAll(() => {
  spyConsoleError = vi.spyOn(console, 'error');
  spyConsoleWarn = vi.spyOn(console, 'warn');
});

afterAll(() => {
  try {
    expect(spyConsoleError).not.toHaveBeenCalled();
    expect(spyConsoleWarn).not.toHaveBeenCalled();
  } finally {
    spyConsoleError?.mockRestore();
    spyConsoleWarn?.mockRestore();
  }
});
