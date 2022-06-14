import { parser } from '../src';
import { link, paragraph, plain } from '../src/utils';

test.each([
  [
    'https://pt.wikipedia.org/wiki/Condi%C3%A7%C3%A3o_de_corrida#:~:text=Uma%20condi%C3%A7%C3%A3o%20de%20corrida%20%C3%A9,sequ%C3%AAncia%20ou%20sincronia%20doutros%20eventos',
    [
      paragraph([
        link(
          'https://pt.wikipedia.org/wiki/Condi%C3%A7%C3%A3o_de_corrida#:~:text=Uma%20condi%C3%A7%C3%A3o%20de%20corrida%20%C3%A9,sequ%C3%AAncia%20ou%20sincronia%20doutros%20eventos'
        ),
      ]),
    ],
  ],
  [
    'https://pt.wikipedia.org/',
    [paragraph([link('https://pt.wikipedia.org/')])],
  ],
  [
    'https://www.npmjs.com/package/@rocket.chat/message-parser',
    [
      paragraph([
        link('https://www.npmjs.com/package/@rocket.chat/message-parser'),
      ]),
    ],
  ],
  ['http:/rocket.chat/teste', [paragraph([plain('http:/rocket.chat/teste')])]],
  ['https:/rocket.chat/', [paragraph([plain('https:/rocket.chat/')])]],
  ['https://test', [paragraph([plain('https://test')])]],
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
  ['https://localhost:3000#', [paragraph([link('https://localhost:3000#')])]],
  ['https://localhost:3000?', [paragraph([link('https://localhost:3000?')])]],
  ['https://localhost:3000/', [paragraph([link('https://localhost:3000/')])]],
  [
    'ftp://user:pass@localhost:21/etc/hosts',
    [paragraph([link('ftp://user:pass@localhost:21/etc/hosts')])],
  ],
  ['ssh://test@test.test', [paragraph([link('ssh://test@test.test')])]],
])('parses %p', (input, output) => {
  expect(parser(input)).toMatchObject(output);
});
