import { parser } from '../src';
import { link, paragraph } from '../src/utils';

it('should match url with path', () => {
  const [tokens] = parser('https://rocket.chat/test');
  expect(tokens).toMatchObject(paragraph([link('https://rocket.chat/test')]));
});

it('should match url with path and port', () => {
  const [tokens] = parser('https://rocket.chat:3000/test');
  expect(tokens).toMatchObject(
    paragraph([link('https://rocket.chat:3000/test')])
  );
});

it('should match url with ?search', () => {
  const [tokens] = parser('https://rocket.chat/test?search');
  expect(tokens).toMatchObject(
    paragraph([link('https://rocket.chat/test?search')])
  );
});

it('should match url with search=test', () => {
  const [tokens] = parser('https://rocket.chat/test?search=test');
  expect(tokens).toMatchObject(
    paragraph([link('https://rocket.chat/test?search=test')])
  );
});

it('should match url with no path', () => {
  const [tokens] = parser('https://rocket.chat');
  expect(tokens).toMatchObject(paragraph([link('https://rocket.chat')]));
});

it('should match url with localhost', () => {
  const [tokens] = parser('https://localhost');
  expect(tokens).toMatchObject(paragraph([link('https://localhost')]));
});

it('should match url with localhost and port', () => {
  const [tokens] = parser('https://localhost:3000');
  expect(tokens).toMatchObject(paragraph([link('https://localhost:3000')]));
});
