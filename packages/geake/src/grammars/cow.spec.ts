import { parse } from './cow';

it('should succeed', () => {
  expect(parse('cow says moo')).toStrictEqual(['cow', 'says', 'moo']);
  expect(parse('cow  says   moo')).toStrictEqual(['cow', 'says', 'moo']);
  expect(parse('cow says wtf')).toStrictEqual(['cow', 'says', 'wtf']);
});

it('should fail', () => {
  expect(() => parse('cow says moo   ')).toThrowError(
    'expected end of input at index 12'
  );
  expect(() => parse(' cow says moo')).toThrowError(
    'expected "cow" at index 0'
  );
  expect(() => parse('cow says bark')).toThrowError(
    'expected "moo" or "wtf" at index 9'
  );
  expect(() => parse('cowsaysmoo')).toThrowError('expected " " at index 3');
});
