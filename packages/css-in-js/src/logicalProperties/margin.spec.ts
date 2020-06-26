import { transpile } from '..';

describe('logical properties plugins', () => {
  describe('margin-inline', () => {
    it('supports margin-inline', () => {
      expect(transpile('div', 'margin-inline: inherit;', {
        supportedProperties: ['margin-inline'],
      }))
        .toBe('div{margin-inline:inherit;}');
    });

    it('supports margin-inline-start and margin-inline-end', () => {
      expect(transpile('div', 'margin-inline: inherit;', {
        supportedProperties: ['margin-inline-start', 'margin-inline-end'],
      }))
        .toBe('div{margin-inline-start:inherit;margin-inline-end:inherit;}');
    });

    it('fallbacks', () => {
      expect(transpile('div', 'margin-inline: inherit;'))
        .toBe('*:not([dir=rtl]) div{margin-left:inherit;margin-right:inherit;}[dir=rtl] div{margin-right:inherit;margin-left:inherit;}');
    });
  });

  describe('margin-inline-start', () => {
    it('supports margin-inline-start', () => {
      expect(transpile('div', 'margin-inline-start: inherit;', {
        supportedProperties: ['margin-inline-start'],
      }))
        .toBe('div{margin-inline-start:inherit;}');
    });

    it('fallbacks', () => {
      expect(transpile('div', 'margin-inline-start: inherit;'))
        .toBe('*:not([dir=rtl]) div{margin-left:inherit;}[dir=rtl] div{margin-right:inherit;}');
    });
  });

  describe('margin-inline-end', () => {
    it('supports margin-inline-end', () => {
      expect(transpile('div', 'margin-inline-end: inherit;', {
        supportedProperties: ['margin-inline-end'],
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
        supportedProperties: ['margin-block'],
      }))
        .toBe('div{margin-block:inherit;}');
    });

    it('supports margin-block-start and margin-block-end', () => {
      expect(transpile('div', 'margin-block: inherit;', {
        supportedProperties: ['margin-block-start', 'margin-block-end'],
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
        supportedProperties: ['margin-block-start'],
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
        supportedProperties: ['margin-block-end'],
      }))
        .toBe('div{margin-block-end:inherit;}');
    });

    it('fallbacks', () => {
      expect(transpile('div', 'margin-block-end: inherit;'))
        .toBe('div{margin-bottom:inherit;}');
    });
  });
});
