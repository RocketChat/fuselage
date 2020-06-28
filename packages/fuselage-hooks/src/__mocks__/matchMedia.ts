import { act } from 'react-dom/test-utils';

export const mediaQueryLists = new Set<MediaQueryList>();

class MediaQueryListMock implements MediaQueryList {
  _matches: boolean

  _media: string

  _onchange: (ev: MediaQueryListEvent) => void | null

  changeEventListeners: Set<EventListener>

  constructor(media: string) {
    this._matches = window.innerWidth <= 968;
    this._media = media;
    this._onchange = null;
    this.changeEventListeners = new Set([
      (ev: MediaQueryListEvent) => {
        this._onchange && this._onchange.call(this, ev);
      },
    ]);
  }

  get matches(): boolean {
    return this._matches;
  }

  get media(): string {
    return this._media;
  }

  addEventListener = jest.fn((type: string, fn: EventListener): void => {
    if (type !== 'change') {
      return;
    }

    this.changeEventListeners.add(fn);
    mediaQueryLists.add(this);
  })

  removeEventListener = jest.fn((type: string, fn: EventListener): void => {
    if (type !== 'change') {
      return;
    }

    this.changeEventListeners.delete(fn);
    mediaQueryLists.delete(this);
  })

  get onchange(): (this: MediaQueryList, ev: MediaQueryListEvent) => void {
    return this._onchange;
  }

  set onchange(fn: (this: MediaQueryList, ev: MediaQueryListEvent) => void) {
    this._onchange = fn;
  }

  addListener(fn: (this: MediaQueryList, ev: MediaQueryListEvent) => void): void {
    this.addEventListener('change', fn);
  }

  removeListener(fn: (this: MediaQueryList, ev: MediaQueryListEvent) => void): void {
    this.removeEventListener('change', fn);
  }

  dispatchEvent(ev: MediaQueryListEvent): boolean {
    act(() => {
      this._matches = ev.matches;
      this._media = ev.media;
      this.changeEventListeners.forEach((changeEventListener) => {
        changeEventListener(ev);
      });
    });
    return true;
  }
}

const matchMediaMock = (media: string): MediaQueryList =>
  new MediaQueryListMock(media);

export default matchMediaMock;
