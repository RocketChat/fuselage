let spyConsoleError;
let spyConsoleWarn;

beforeAll(() => {
  spyConsoleError = jest.spyOn(console, 'error');
  spyConsoleWarn = jest.spyOn(console, 'warn');
});

afterAll(() => {
  try {
    expect(spyConsoleError).not.toBeCalled();
    expect(spyConsoleWarn).not.toBeCalled();
  } finally {
    spyConsoleError && spyConsoleError.mockRestore();
    spyConsoleWarn && spyConsoleWarn.mockRestore();
  }
});
