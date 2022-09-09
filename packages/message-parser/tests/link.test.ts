import { parse } from '../src';
import {
  link,
  paragraph,
  plain,
  bold,
  strike,
  italic,
  quote,
} from '../src/utils';

test.each([
  [
    '<https://domain.com|Test>',
    [paragraph([link('https://domain.com', plain('Test'))])],
  ],

  [
    `<https://domain.com|Test
>`,
    [paragraph([plain('<https://domain.com|Test')]), paragraph([plain('>')])],
  ],
  [
    `<https://domain.com|Test
> quote here`,
    [
      paragraph([plain('<https://domain.com|Test')]),
      quote([paragraph([plain('quote here')])]),
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
  [
    '[title](https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351?query=test12-34)',
    [
      paragraph([
        link(
          'https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351?query=test12-34',
          plain('title')
        ),
      ]),
    ],
  ],
  [
    '[title](https://desk.rocket.chat/support/rocketchat/ShowHomePage.do?query=test12-34#Cases/dv/413244000073043351)',
    [
      paragraph([
        link(
          'https://desk.rocket.chat/support/rocketchat/ShowHomePage.do?query=test12-34#Cases/dv/413244000073043351',
          plain('title')
        ),
      ]),
    ],
  ],
  [
    '[title](https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351?query=test12-34&query2=abc123)',
    [
      paragraph([
        link(
          'https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351?query=test12-34&query2=abc123',
          plain('title')
        ),
      ]),
    ],
  ],
  [
    '[title](https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases?query=test12-34&query2=abcd!e/dv/413244000073043351)',
    [
      paragraph([
        link(
          'https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases?query=test12-34&query2=abcd!e/dv/413244000073043351',
          plain('title')
        ),
      ]),
    ],
  ],
  [
    '[title](https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases?query=test12-34&query2=abcd!e/dv/413244000073043351)',
    [
      paragraph([
        link(
          'https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases?query=test12-34&query2=abcd!e/dv/413244000073043351',
          plain('title')
        ),
      ]),
    ],
  ],
  [
    '[title](https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351?query=test12-34&query2=abcd!~-._%2B+)',
    [
      paragraph([
        link(
          'https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351?query=test12-34&query2=abcd!~-._%2B+',
          plain('title')
        ),
      ]),
    ],
  ],
  ['google.com', [paragraph([link('//google.com', plain('google.com'))])]],
  ['www.google.com', [paragraph([link('www.google.com')])]],
  ['rocket.chat:8080', [paragraph([link('rocket.chat:8080')])]],
  ['ShouldNotBeALink', [paragraph([plain('ShouldNotBeALink')])]],
  [
    'http:/ google.com',
    [paragraph([plain('http:/ '), link('//google.com', plain('google.com'))])],
  ],
  [
    '[custom](custom://google.com)',
    [paragraph([link('custom://google.com', plain('custom'))])],
  ],
  [
    '[thing](https://www.thingiverse.com/thing:5451684)',
    [
      paragraph([
        link('https://www.thingiverse.com/thing:5451684', plain('thing')),
      ]),
    ],
  ],
  [
    'https://t.me/joinchat/chatexample',
    [paragraph([link('https://t.me/joinchat/chatexample')])],
  ],
  [
    '[telegram invite](https://t.me/joinchat/chatexample)',
    [
      paragraph([
        link('https://t.me/joinchat/chatexample', plain('telegram invite')),
      ]),
    ],
  ],
])('parses %p', (input, output) => {
  expect(parse(input)).toMatchObject(output);
});
