import { parser } from '../src';
import { link, paragraph, plain, bold, strike, italic } from '../src/utils';

test.each([
  [
    '[title](https://rocket.chat)',
    [paragraph([link('https://rocket.chat', plain('title'))])],
  ],
  [
    '[title](http://localhost)',
    [paragraph([link('http://localhost', plain('title'))])],
  ],
  [
    '[title](http://localhost?testing=true)',
    [paragraph([link('http://localhost?testing=true', plain('title'))])],
  ],
  [
    '[**title**](https://rocket.chat)',
    [paragraph([link('https://rocket.chat', bold([plain('title')]))])],
  ],
  [
    '[~~title~~](https://rocket.chat)',
    [paragraph([link('https://rocket.chat', strike([plain('title')]))])],
  ],
  [
    '[__title__](https://rocket.chat)',
    [paragraph([link('https://rocket.chat', italic([plain('title')]))])],
  ],
  [
    '[__**~~title~~**__](https://rocket.chat)',
    [
      paragraph([
        link('https://rocket.chat', italic([bold([strike([plain('title')])])])),
      ]),
    ],
  ],
])('parses %p', (input, output) => {
  expect(parser(input)).toMatchObject(output);
});
