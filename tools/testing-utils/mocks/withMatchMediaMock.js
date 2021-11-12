const mediaQuery = require('css-mediaquery');

const withMatchMediaMock = () => {
  let viewport = {
    'type': 'screen',
    'width': 1024,
    'prefers-color-scheme': 'no-preference',
    'prefers-reduced-data': 'no-preference',
    'prefers-reduced-motion': 'no-preference',
  };

  const mediaQueryLists = new Set();

  class MediaQueryListMock {
    constructor(media) {
      this._media = media;
      this._onchange = null;
      this.changeEventListeners = new Set([
        (ev) => {
          this._onchange && this._onchange.call(this, ev);
        },
      ]);
    }

    get matches() {
      return mediaQuery.match(this._media, viewport);
    }

    get media() {
      return this._media;
    }

    addEventListener(type, fn) {
      if (type !== 'change') {
        return;
      }

      this.changeEventListeners.add(fn);
      mediaQueryLists.add(this);
    }

    removeEventListener(type, fn) {
      if (type !== 'change') {
        return;
      }

      this.changeEventListeners.delete(fn);
      mediaQueryLists.delete(this);
    }

    get onchange() {
      return this._onchange;
    }

    set onchange(fn) {
      this._onchange = fn;
    }

    addListener(fn) {
      this.addEventListener('change', fn);
    }

    removeListener(fn) {
      this.removeEventListener('change', fn);
    }

    dispatchEvent(ev) {
      this._media = ev.media;
      this.changeEventListeners.forEach((changeEventListener) => {
        changeEventListener(ev);
      });
      return true;
    }
  }

  const matchMediaMock = jest.fn((media) => {
    const mql = new MediaQueryListMock(media);
    jest.spyOn(mql, 'addEventListener');
    jest.spyOn(mql, 'removeEventListener');
    return mql;
  });

  const setViewport = (_viewport) => {
    viewport = {
      ...viewport,
      ..._viewport,
    };

    mediaQueryLists.forEach((mediaQueryList) => {
      const event = Object.assign(new Event('change'), {
        matches: mediaQueryList.matches,
        media: mediaQueryList.media,
      });
      mediaQueryList.dispatchEvent(event);
    });
  };

  beforeAll(() => {
    window.matchMedia = matchMediaMock;
  });

  beforeEach(() => {
    setViewport({
      type: 'screen',
      width: 1024,
    });
  });

  afterEach(() => {
    matchMediaMock.mockClear();
  });

  return setViewport;
};

module.exports = {
  withMatchMediaMock,
};
