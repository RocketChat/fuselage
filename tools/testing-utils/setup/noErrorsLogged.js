beforeEach(() => {
  jest.spyOn(console, 'error');
  jest.spyOn(console, 'warn');
});

afterEach(() => {
  expect(console.error).not.toBeCalled();
  expect(console.warn).not.toBeCalled();
});
