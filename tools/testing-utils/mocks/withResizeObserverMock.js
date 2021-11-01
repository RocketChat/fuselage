const getSizeInPixels = (value) =>
  (typeof value === 'string' && parseInt(value, 10)) ||
  (typeof value === 'number' && value) ||
  0;

const createBoxSizes = (style) => {
  const inlineSize = getSizeInPixels(style.inlineSize);
  const borderInlineStartWidth = getSizeInPixels(style.borderInlineStartWidth);
  const borderInlineEndWidth = getSizeInPixels(style.borderInlineEndWidth);
  const paddingInlineStart = getSizeInPixels(style.paddingInlineStart);
  const paddingInlineEnd = getSizeInPixels(style.paddingInlineEnd);
  const blockSize = getSizeInPixels(style.blockSize);
  const borderBlockStartWidth = getSizeInPixels(style.borderBlockStartWidth);
  const borderBlockEndWidth = getSizeInPixels(style.borderBlockEndWidth);
  const paddingBlockStart = getSizeInPixels(style.paddingBlockStart);
  const paddingBlockEnd = getSizeInPixels(style.paddingBlockEnd);

  if (style.boxSizing === 'border-box') {
    const borderBoxSize = Object.freeze({
      inlineSize,
      blockSize,
    });

    const contentBoxSize = Object.freeze({
      inlineSize:
        inlineSize -
        borderInlineStartWidth -
        paddingInlineStart -
        paddingInlineEnd -
        borderInlineEndWidth,
      blockSize:
        blockSize -
        borderBlockStartWidth -
        paddingBlockStart -
        paddingBlockEnd -
        borderBlockEndWidth,
    });

    return {
      borderBoxSize,
      contentBoxSize,
    };
  }

  const borderBoxSize = Object.freeze({
    inlineSize:
      borderInlineStartWidth +
      paddingInlineStart +
      inlineSize +
      paddingInlineEnd +
      borderInlineEndWidth,
    blockSize:
      borderBlockStartWidth +
      paddingBlockStart +
      blockSize +
      paddingBlockEnd +
      borderBlockEndWidth,
  });

  const contentBoxSize = Object.freeze({
    inlineSize,
    blockSize,
  });

  return {
    borderBoxSize,
    contentBoxSize,
  };
};

class ResizeObserverMock {
  callback = () => undefined;

  contentRect = {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    toJSON: () => this.contentRect,
  };

  mutationObservers = new Map();

  constructor(callback) {
    this.callback = callback;
  }

  disconnect = jest.fn(() => {
    this.callback = () => undefined;
  });

  observe = jest.fn((target) => {
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (!(mutation.target instanceof Element)) {
          return;
        }

        const styles = getComputedStyle(mutation.target);

        const { borderBoxSize, contentBoxSize } = createBoxSizes({
          boxSizing:
            styles.boxSizing === 'border-box' ? 'border-box' : 'content-box',
          inlineSize: styles.inlineSize || styles.width,
          borderInlineStartWidth:
            styles.borderInlineStartWidth || styles.borderRightWidth,
          borderInlineEndWidth:
            styles.borderInlineEndWidth || styles.borderRightWidth,
          paddingInlineStart: styles.paddingInlineStart || styles.paddingLeft,
          paddingInlineEnd: styles.paddingInlineEnd || styles.paddingRight,
          blockSize: styles.blockSize || styles.height,
          borderBlockStartWidth:
            styles.borderBlockStartWidth || styles.borderTopWidth,
          borderBlockEndWidth:
            styles.borderBlockEndWidth || styles.borderBottomWidth,
          paddingBlockStart: styles.paddingBlockStart || styles.paddingTop,
          paddingBlockEnd: styles.paddingBlockEnd || styles.paddingBottom,
        });

        this.callback(
          [
            {
              target,
              contentRect: this.contentRect,
              borderBoxSize: [borderBoxSize],
              contentBoxSize: [contentBoxSize],
            },
          ],
          this
        );
      }
    });

    mutationObserver.observe(target, {
      attributes: true,
      attributeFilter: ['style'],
    });

    this.mutationObservers.set(target, mutationObserver);
  });

  unobserve = jest.fn((target) => {
    this.mutationObservers.get(target)?.disconnect();
    this.mutationObservers.delete(target);
  });
}

const withResizeObserverMock = () => {
  let prevImpl;

  beforeAll(() => {
    prevImpl = window.ResizeObserver;
    window.ResizeObserver = ResizeObserverMock;
  });

  afterAll(() => {
    window.ResizeObserver = prevImpl;
    prevImpl = undefined;
  });
};

module.exports = {
  withResizeObserverMock,
};
