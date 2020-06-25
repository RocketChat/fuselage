import { transpile } from '..';

describe('logical properties plugin', () => {
  describe('margin-inline', () => {
    it('supports margin-inline', () => {
      expect(transpile('div', 'margin-inline: inherit;', {
        marginInline: true,
      }))
        .toBe('div{margin-inline:inherit;}');
    });

    it('supports margin-inline-start and margin-inline-end', () => {
      expect(transpile('div', 'margin-inline: inherit;', {
        marginInlineStartEnd: true,
      }))
        .toBe('div{margin-inline-start:inherit;margin-inline-end:inherit;}');
    });

    it('fallbacks', () => {
      expect(transpile('div', 'margin-inline: inherit;'))
        .toBe('*:not([dir=rtl]) div{margin-left:inherit;margin-right:inherit;}[dir=rtl] div{margin-right:inherit;margin-left:inherit;}');
    });
  });

  describe('margin-inline-start', () => {
    it('supports margin-inline-start and margin-inline-end', () => {
      expect(transpile('div', 'margin-inline-start: inherit;', {
        marginInlineStartEnd: true,
      }))
        .toBe('div{margin-inline-start:inherit;}');
    });

    it('fallbacks', () => {
      expect(transpile('div', 'margin-inline-start: inherit;'))
        .toBe('*:not([dir=rtl]) div{margin-left:inherit;}[dir=rtl] div{margin-right:inherit;}');
    });
  });

  describe('margin-inline-end', () => {
    it('supports margin-inline-start and margin-inline-end', () => {
      expect(transpile('div', 'margin-inline-end: inherit;', {
        marginInlineStartEnd: true,
      }))
        .toBe('div{margin-inline-end:inherit;}');
    });

    it('fallbacks', () => {
      expect(transpile('div', 'margin-inline-end: inherit;'))
        .toBe('*:not([dir=rtl]) div{margin-right:inherit;}[dir=rtl] div{margin-left:inherit;}');
    });
  });

  describe('margin-block', () => {
    it('supports margin-block', () => {
      expect(transpile('div', 'margin-block: inherit;', {
        marginBlock: true,
      }))
        .toBe('div{margin-block:inherit;}');
    });

    it('supports margin-block-start and margin-block-end', () => {
      expect(transpile('div', 'margin-block: inherit;', {
        marginBlockStartEnd: true,
      }))
        .toBe('div{margin-block-start:inherit;margin-block-end:inherit;}');
    });

    it('fallbacks', () => {
      expect(transpile('div', 'margin-block: inherit;'))
        .toBe('div{margin-top:inherit;margin-bottom:inherit;}');
    });
  });

  describe('margin-block-start', () => {
    it('supports margin-block-start and margin-block-end', () => {
      expect(transpile('div', 'margin-block-start: inherit;', {
        marginBlockStartEnd: true,
      }))
        .toBe('div{margin-block-start:inherit;}');
    });

    it('fallbacks', () => {
      expect(transpile('div', 'margin-block-start: inherit;'))
        .toBe('div{margin-top:inherit;}');
    });
  });

  describe('margin-block-end', () => {
    it('supports margin-block-start and margin-block-end', () => {
      expect(transpile('div', 'margin-block-end: inherit;', {
        marginBlockStartEnd: true,
      }))
        .toBe('div{margin-block-end:inherit;}');
    });

    it('fallbacks', () => {
      expect(transpile('div', 'margin-block-end: inherit;'))
        .toBe('div{margin-bottom:inherit;}');
    });
  });
});
