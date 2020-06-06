import { runHooks } from '../jestHelpers';

import { useMediaQuery } from '..';

describe('useMediaQuery hook', () => {
  let mql;

  beforeEach(() => {
    mql = {
      matches: false,
      onchange: null,
      addListener: jest.fn((fn) => {
        mql.onchange = fn;
      }),
      removeListener: jest.fn(() => {
        mql.onchange = null;
      }),
    };

    window.matchMedia = jest.fn((query) => {
      mql.media = query;
      return mql;
    });
  });

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
    mql.matches = true;
    const [value] = runHooks(() => useMediaQuery('(max-width: 1024)'));
    expect(value).toBe(true);
  });

  it('mutates its value to true if the media query matches', () => {
    const [matchesA, matchesB, matchesC] = runHooks(() => useMediaQuery('(max-width: 1024)'), [
      () => {
        mql.matches = true;
      },
      () => {
        mql.matches = false;
        mql.onchange();
      },
    ]);

    expect(matchesA).toBe(false);
    expect(matchesB).toBe(true);
    expect(matchesC).toBe(false);
  });
});
