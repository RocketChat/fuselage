import { transpile } from '..';

describe('logical properties plugins', () => {
  describe('size', () => {
    it('supports size', () => {
      expect(transpile('div', 'size: inherit;', {
        supportedProperties: ['size'],
      }))
        .toBe('div{size:inherit;}');
    });

    it('fallbacks', () => {
      expect(transpile('div', 'size: inherit;'))
        .toBe('div{width:inherit;height:inherit;}');
    });
  });

  describe('inline-size', () => {
    it('supports inline-size', () => {
      expect(transpile('div', 'inline-size: inherit;', {
        supportedProperties: ['inline-size'],
      }))
        .toBe('div{inline-size:inherit;}');
    });

    it('fallbacks', () => {
      expect(transpile('div', 'inline-size: inherit;'))
        .toBe('div{width:inherit;}');
    });
  });

  describe('block-size', () => {
    it('supports block-size', () => {
      expect(transpile('div', 'block-size: inherit;', {
        supportedProperties: ['block-size'],
        prefix: false,
      }))
        .toBe('div{block-size:inherit;}');
    });

    it('fallbacks', () => {
      expect(transpile('div', 'block-size: inherit;'))
        .toBe('div{height:inherit;}');
    });
  });

  describe('min-size', () => {
    it('supports min-size', () => {
      expect(transpile('div', 'min-size: inherit;', {
        supportedProperties: ['min-size'],
      }))
        .toBe('div{min-size:inherit;}');
    });

    it('fallbacks', () => {
      expect(transpile('div', 'min-size: inherit;'))
        .toBe('div{min-width:inherit;min-height:inherit;}');
    });
  });

  describe('min-inline-size', () => {
    it('supports min-inline-size', () => {
      expect(transpile('div', 'min-inline-size: inherit;', {
        supportedProperties: ['min-inline-size'],
      }))
        .toBe('div{min-inline-size:inherit;}');
    });

    it('fallbacks', () => {
      expect(transpile('div', 'min-inline-size: inherit;'))
        .toBe('div{min-width:inherit;}');
    });
  });

  describe('min-block-size', () => {
    it('supports min-block-size', () => {
      expect(transpile('div', 'min-block-size: inherit;', {
        supportedProperties: ['min-block-size'],
        prefix: false,
      }))
        .toBe('div{min-block-size:inherit;}');
    });

    it('fallbacks', () => {
      expect(transpile('div', 'min-block-size: inherit;'))
        .toBe('div{min-height:inherit;}');
    });
  });

  describe('max-size', () => {
    it('supports max-size', () => {
      expect(transpile('div', 'max-size: inherit;', {
        supportedProperties: ['max-size'],
      }))
        .toBe('div{max-size:inherit;}');
    });

    it('fallbacks', () => {
      expect(transpile('div', 'max-size: inherit;'))
        .toBe('div{max-width:inherit;max-height:inherit;}');
    });
  });

  describe('max-inline-size', () => {
    it('supports max-inline-size', () => {
      expect(transpile('div', 'max-inline-size: inherit;', {
        supportedProperties: ['max-inline-size'],
      }))
        .toBe('div{max-inline-size:inherit;}');
    });

    it('fallbacks', () => {
      expect(transpile('div', 'max-inline-size: inherit;'))
        .toBe('div{max-width:inherit;}');
    });
  });

  describe('max-block-size', () => {
    it('supports max-block-size', () => {
      expect(transpile('div', 'max-block-size: inherit;', {
        supportedProperties: ['max-block-size'],
        prefix: false,
      }))
        .toBe('div{max-block-size:inherit;}');
    });

    it('fallbacks', () => {
      expect(transpile('div', 'max-block-size: inherit;'))
        .toBe('div{max-height:inherit;}');
    });
  });
});
