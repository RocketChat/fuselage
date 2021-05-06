import { parser } from '../src';
import { link, paragraph, plain } from '../src/utils';

test.each([
  ['https://test', [paragraph([plain('https://test')])]],
  ['http:/rocket.chat/teste', [paragraph([plain('http:/rocket.chat/teste')])]],
  [
    'httpsss://rocket.chat/test',
    [paragraph([link('httpsss://rocket.chat/test')])],
  ],
  [
    'https://rocket.chat:3000/test',
    [paragraph([link('https://rocket.chat:3000/test')])],
  ],
  [
    'https://rocket.chat/test?search',
    [paragraph([link('https://rocket.chat/test?search')])],
  ],
  [
    'https://rocket.chat/test?search=test',
    [paragraph([link('https://rocket.chat/test?search=test')])],
  ],
  ['https://rocket.chat', [paragraph([link('https://rocket.chat')])]],
  ['https://localhost', [paragraph([link('https://localhost')])]],
  ['https://localhost:3000', [paragraph([link('https://localhost:3000')])]],
  [
    'https://localhost:3000#fragment',
    [paragraph([link('https://localhost:3000#fragment')])],
  ],
  [
    'ftp://user:pass@localhost:21/etc/hosts',
    [paragraph([link('ftp://user:pass@localhost:21/etc/hosts')])],
  ],
])('parses %p', (input, output) => {
  expect(parser(input)).toMatchObject(output);
});
