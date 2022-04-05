const withClipboardMock = () => {
  const clipboard = {
    writeText: () => Promise.resolve(),
  };

  beforeAll(() => {
    Object.assign(navigator, {
      clipboard,
    });
  });

  afterAll(() => {
    delete navigator.clipboard;
  });

  afterEach(() => {
    clipboard.writeText = () => Promise.resolve();
  });

  return (fn) => {
    clipboard.writeText = fn;
  };
};

module.exports = {
  withClipboardMock,
};
