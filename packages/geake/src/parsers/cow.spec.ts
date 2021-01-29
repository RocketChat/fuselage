import { parse } from './cow';

it('should succeed', () => {
  expect(parse('cow says moo')).toStrictEqual(['cow', ' ', 'says', ' ', 'moo']);
});

it('should fail', () => {
  expect(() => parse('cow says moo   ')).toThrowError();
  expect(() => parse(' cow says moo')).toThrowError();
  expect(() => parse('cow says bark')).toThrowError();
});
