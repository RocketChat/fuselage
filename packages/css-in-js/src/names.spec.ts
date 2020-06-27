import { createAnimationName, createClassName, escapeName } from './names';

describe('names', () => {
  describe('createAnimationName', () => {
    it('prefer the suggested name', () => {
      const suggestedAnimationName = 'suggested';
      const content = 'from { opacity: 0; }';
      expect(createAnimationName(suggestedAnimationName, content)).toBe(suggestedAnimationName);
    });

    it('ignores a undefined suggestion', () => {
      const suggestedAnimationName = undefined;
      const content = 'from { opacity: 0; }';
      expect(createAnimationName(suggestedAnimationName, content)).not.toBe(suggestedAnimationName);
    });

    it('is injective', () => {
      const content = 'from { opacity: 0; }';
      const alternateContent = 'from { opacity: 0.5 }';

      const nameA = createAnimationName(undefined, content);
      const nameB = createAnimationName(undefined, content);
      const nameC = createAnimationName(undefined, alternateContent);

      expect(nameA).toBe(nameB);
      expect(nameA).not.toBe(nameC);
    });
  });

  describe('createClassName', () => {
    it('prefer the suggested name', () => {
      const suggestedClassName = 'suggested';
      const content = 'outline: 0;';
      expect(createClassName(suggestedClassName, content)).toBe(suggestedClassName);
    });

    it('ignores a undefined suggestion', () => {
      const suggestedClassName = undefined;
      const content = 'outline: 0;';
      expect(createClassName(suggestedClassName, content)).not.toBe(suggestedClassName);
    });

    it('is injective', () => {
      const content = 'outline: 0;';
      const alternateContent = 'outline: 1px solid red;';

      const nameA = createClassName(undefined, content);
      const nameB = createClassName(undefined, content);
      const nameC = createClassName(undefined, alternateContent);

      expect(nameA).toBe(nameB);
      expect(nameA).not.toBe(nameC);
    });
  });

  describe('escapeName', () => {
    it('escapes `@`, `#`, and `:` characters', () => {
      expect(escapeName('@a#b:c@d#e:f')).toBe('\\@a\\#b\\:c\\@d\\#e\\:f');
    });
  });
});
