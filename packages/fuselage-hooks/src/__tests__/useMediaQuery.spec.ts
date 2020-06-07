import { runHooks } from '../jestHelpers';

import { useMediaQuery } from '..';

const setupMediaQueryMock = (): { triggerMediaQueryChange: (matches: boolean) => void } => {
  let matches: boolean;
  let onChangeCallback: (ev: MediaQueryListEvent) => any;

  beforeEach(() => {
    matches = false;
    onChangeCallback = () => undefined;

    window.matchMedia = jest.fn((media): MediaQueryList => ({
      get matches() {
        return matches;
      },
      get media(): string {
        return media;
      },
      addEventListener: jest.fn((type, fn) => {
        if (type === 'change' && typeof fn === 'function') {
          onChangeCallback = fn;
        }
      }),
      removeEventListener: jest.fn(() => {
        onChangeCallback = () => undefined;
      }),
      get onchange(): (this: MediaQueryList, ev: MediaQueryListEvent) => any {
        return onChangeCallback;
      },
      set onchange(cb: (this: MediaQueryList, ev: MediaQueryListEvent) => any) {
        onChangeCallback = cb;
      },
      addListener(fn) {
        this.addEventListener('change', fn);
      },
      removeListener(fn) {
        this.removeEventListener('change', fn);
      },
      dispatchEvent: (): boolean => false,
    }));
  });

  const triggerMediaQueryChange = (_matches: boolean): void => {
    matches = _matches;
    onChangeCallback(new Event('change') as MediaQueryListEvent);
  };

  return { triggerMediaQueryChange };
};

describe('useMediaQuery hook', () => {
  const { triggerMediaQueryChange } = setupMediaQueryMock();

  it('does not register a undefined media query', () => {
    runHooks(() => useMediaQuery());
    expect(window.matchMedia).not.toHaveBeenCalled();
  });

  it('does register a defined media query', () => {
    runHooks(() => useMediaQuery('(max-width: 1024)'));
    expect(window.matchMedia).toHaveBeenCalledWith('(max-width: 1024)');
  });

  it('returns false if no query is given', () => {
    const [value] = runHooks(() => useMediaQuery());
    expect(value).toBe(false);
  });

  it('returns false if the media query does not match', () => {
    const [value] = runHooks(() => useMediaQuery('(max-width: 1024)'));
    expect(value).toBe(false);
  });

  it('returns true if the media query does match', () => {
    triggerMediaQueryChange(true);
    const [value] = runHooks(() => useMediaQuery('(max-width: 1024)'));
    expect(value).toBe(true);
  });

  it('mutates its value to true if the media query matches', () => {
    const [matchesA, matchesB, matchesC] = runHooks(() => useMediaQuery('(max-width: 1024)'), [
      () => {
        triggerMediaQueryChange(true);
      },
      () => {
        triggerMediaQueryChange(false);
      },
    ]);

    expect(matchesA).toBe(false);
    expect(matchesB).toBe(true);
    expect(matchesC).toBe(false);
  });
});
