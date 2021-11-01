let spyConsoleError;
let spyConsoleWarn;

beforeEach(() => {
  spyConsoleError = jest.spyOn(console, 'error');
  spyConsoleWarn = jest.spyOn(console, 'warn');
});

afterEach(() => {
  try {
    expect(spyConsoleError).not.toBeCalled();
    expect(spyConsoleWarn).not.toBeCalled();
  } finally {
    spyConsoleError.mockRestore();
    spyConsoleWarn.mockRestore();
  }
});
