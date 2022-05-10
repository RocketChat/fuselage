import { parser } from '../src';
import { link, paragraph, plain, bold, strike, italic } from '../src/utils';

test.each([
  [
    '<https://domain.com|Test>',
    [paragraph([link('https://domain.com', plain('Test'))])],
  ],

  [
    `<https://domain.com|Test
>`,
    [
      paragraph([plain('<'), link('https://domain.com'), plain('|Test')]),
      paragraph([plain('>')]),
    ],
  ],
  [
    '[Link](https://domain.com/link?a=%28node_filesystem_avail_bytes%29)',
    [
      paragraph([
        link(
          'https://domain.com/link?a=%28node_filesystem_avail_bytes%29',
          plain('Link')
        ),
      ]),
    ],
  ],
  ['[](https://rocket.chat)', [paragraph([link('https://rocket.chat')])]],
  [
    '[ ](https://rocket.chat)',
    [paragraph([link('https://rocket.chat', plain(' '))])],
  ],

  [
    '[ test](https://rocket.chat)',
    [paragraph([link('https://rocket.chat', plain(' test'))])],
  ],
  [
    '[ test ](https://rocket.chat)',
    [paragraph([link('https://rocket.chat', plain(' test '))])],
  ],
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
  [
    'https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351',
    [
      paragraph([
        link(
          'https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351'
        ),
      ]),
    ],
  ],
  [
    '<https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351|Test>',
    [
      paragraph([
        link(
          'https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351',
          plain('Test')
        ),
      ]),
    ],
  ],
  [
    '[title](https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351)',
    [
      paragraph([
        link(
          'https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351',
          plain('title')
        ),
      ]),
    ],
  ],
  [
    '[**title**](https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351)',
    [
      paragraph([
        link(
          'https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351',
          bold([plain('title')])
        ),
      ]),
    ],
  ],
  [
    '[~~title~~](https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351)',
    [
      paragraph([
        link(
          'https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351',
          strike([plain('title')])
        ),
      ]),
    ],
  ],
  [
    '[__title__](https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351)',
    [
      paragraph([
        link(
          'https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351',
          italic([plain('title')])
        ),
      ]),
    ],
  ],
  [
    '[__**~~title~~**__](https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351)',
    [
      paragraph([
        link(
          'https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351',
          italic([bold([strike([plain('title')])])])
        ),
      ]),
    ],
  ],
])('parses %p', (input, output) => {
  expect(parser(input)).toMatchObject(output);
});
