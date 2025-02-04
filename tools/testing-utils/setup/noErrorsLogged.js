let spyConsoleError;
let spyConsoleWarn;

beforeAll(() => {
  spyConsoleError = jest.spyOn(console, 'error');
  spyConsoleWarn = jest.spyOn(console, 'warn');
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
