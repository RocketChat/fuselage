import { createClassNameMapping } from './createClassNameMapping';
import { css } from './tags';

describe('createClassNameMapping', () => {
  it('maps class names', () => {
    expect(createClassNameMapping()('rcx-class-name')).toBe('rcx-class-name');
  });

  it('trims the class names', () => {
    expect(createClassNameMapping()('   rcx-class-name   ')).toBe('rcx-class-name');
  });

  it('maps the `css` tagged template strings', () => {
    expect(createClassNameMapping()(css`outline: 0;`)).toMatch(/^rcx-@[0-9a-z]+$/);
  });

  it('maps the `css` tagged template strings passing arguments', () => {
    expect(createClassNameMapping(0)(
      css`outline: ${ (outlineValue: number) => outlineValue };`,
    )).toMatch(/^rcx-@[0-9a-z]+$/);
  });
});
