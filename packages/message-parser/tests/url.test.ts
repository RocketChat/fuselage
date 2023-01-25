import { parse } from '../src';
import { lineBreak, link, paragraph, plain } from '../src/utils';

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
    'https://pt.wikipedia.org/with-hyphen',
    [paragraph([link('https://pt.wikipedia.org/with-hyphen')])],
  ],
  [
    'https://pt.wikipedia.org/with_underscore',
    [paragraph([link('https://pt.wikipedia.org/with_underscore')])],
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
  ['custom://test@test.test', [paragraph([link('custom://test@test.test')])]],
  ['ftp://test.com', [paragraph([link('ftp://test.com')])]],
  [
    'https://www.thingiverse.com/thing:5451684',
    [paragraph([link('https://www.thingiverse.com/thing:5451684')])],
  ],
  ['http://📙.la/❤️', [paragraph([link('http://📙.la/❤️')])]],
  [
    'https://developer.rocket.chat/reference/api/rest-api#production-security-concerns look at this',
    [
      paragraph([
        link(
          'https://developer.rocket.chat/reference/api/rest-api#production-security-concerns'
        ),
        plain(' look at this'),
      ]),
    ],
  ],
  [
    'https://developer.rocket.chat/reference/api/rest-api look at this',
    [
      paragraph([
        link('https://developer.rocket.chat/reference/api/rest-api'),
        plain(' look at this'),
      ]),
    ],
  ],

  [
    'https://developer.rocket.chat/reference/api/rest-api#fragment?query=query look at this',
    [
      paragraph([
        link(
          'https://developer.rocket.chat/reference/api/rest-api#fragment?query=query'
        ),
        plain(' look at this'),
      ]),
    ],
  ],
  [
    'https://developer.rocket.chat look at this',
    [
      paragraph([
        link('https://developer.rocket.chat'),
        plain(' look at this'),
      ]),
    ],
  ],
  [
    'https://developer.rocket.chat?query=query look at this',
    [
      paragraph([
        link('https://developer.rocket.chat?query=query'),
        plain(' look at this'),
      ]),
    ],
  ],
  [
    'https://developer.rocket.chat?query=query\nline break',
    [
      paragraph([link('https://developer.rocket.chat?query=query')]),
      paragraph([plain('line break')]),
    ],
  ],
  [
    'https://developer.rocket.chat?query=query\n\nline break',
    [
      paragraph([link('https://developer.rocket.chat?query=query')]),
      lineBreak(),
      paragraph([plain('line break')]),
    ],
  ],
  [
    'https://developer.rocket.chat?query=query_with_underscore look at this',
    [
      paragraph([
        link('https://developer.rocket.chat?query=query_with_underscore'),
        plain(' look at this'),
      ]),
    ],
  ],
  [
    'https://developer.rocket.chat/path_with_underscore look at this',
    [
      paragraph([
        link('https://developer.rocket.chat/path_with_underscore'),
        plain(' look at this'),
      ]),
    ],
  ],
  [
    'https://developer.rocket.chat#fragment_with_underscore look at this',
    [
      paragraph([
        link('https://developer.rocket.chat#fragment_with_underscore'),
        plain(' look at this'),
      ]),
    ],
  ],
  [
    'https://developer.rocket.chat followed by text',
    [
      paragraph([
        link('https://developer.rocket.chat'),
        plain(' followed by text'),
      ]),
    ],
  ],
  [
    'two urls https://developer.rocket.chat , https://rocket.chat',
    [
      paragraph([
        plain('two urls '),
        link('https://developer.rocket.chat'),
        plain(' , '),
        link('https://rocket.chat'),
      ]),
    ],
  ],
  [
    'https://1developer.rocket.chat',
    [paragraph([link('https://1developer.rocket.chat')])],
  ],
  [
    'https://en.m.wikipedia.org/wiki/Main_Page',
    [paragraph([link('https://en.m.wikipedia.org/wiki/Main_Page')])],
  ],
  ['test.1test.com', [paragraph([link('test.1test.com')])]],
  ['http://test.e-xample.com', [paragraph([link('http://test.e-xample.com')])]],
  ['www.n-tv.de', [paragraph([link('www.n-tv.de')])]],
  [
    'www.n-tv.de/test, test',
    [paragraph([link('www.n-tv.de/test'), plain(', test')])],
  ],
  ['www.n-tv.de/, test', [paragraph([link('www.n-tv.de/'), plain(', test')])]],
  ['www.n-tv.de, test', [paragraph([link('www.n-tv.de'), plain(', test')])]],
  [
    'https://www.n-tv.de, test',
    [paragraph([link('https://www.n-tv.de'), plain(', test')])],
  ],
  ['http://te_st.com', [paragraph([link('http://te_st.com')])]],
  ['www.te_st.com', [paragraph([link('www.te_st.com')])]],
  [
    '[google_search](http://google.com)',
    [paragraph([link('http://google.com', [plain('google_search')])])],
  ],
  [
    'app...https://rocket.chat https://rocket.chat',
    [
      paragraph([
        plain('app...https://rocket.chat '),
        link('https://rocket.chat'),
      ]),
    ],
  ],
  [
    'Hey check it out the best communication platform https://rocket.chat! There is not discussion about it.',
    [
      paragraph([
        plain('Hey check it out the best communication platform '),
        link('https://rocket.chat'),
        plain('! There is not discussion about it.'),
      ]),
    ],
  ],
  [
    'This is a normal phrase.This in another phrase.',
    [paragraph([plain('This is a normal phrase.This in another phrase.')])],
  ],
])('parses %p', (input, output) => {
  expect(parse(input)).toMatchObject(output);
});

describe('link helper function', () => {
  it('should preserve the original protocol if the protocol is http or https', () => {
    expect(link('https://rocket.chat/test')).toMatchObject({
      type: 'LINK',
      value: {
        src: plain('https://rocket.chat/test'),
        label: [plain('https://rocket.chat/test')],
      },
    });
    expect(link('http://rocket.chat/test')).toMatchObject({
      type: 'LINK',
      value: {
        src: plain('http://rocket.chat/test'),
        label: [plain('http://rocket.chat/test')],
      },
    });
  });

  it('should preserve the original protocol even if for custom protocols', () => {
    expect(link('custom://rocket.chat/test')).toMatchObject({
      type: 'LINK',
      value: {
        src: plain('custom://rocket.chat/test'),
        label: [plain('custom://rocket.chat/test')],
      },
    });
  });

  it('should return // as the protocol if // is the protocol specified', () => {
    expect(link('//rocket.chat/test')).toMatchObject({
      type: 'LINK',
      value: {
        src: plain('//rocket.chat/test'),
        label: [plain('//rocket.chat/test')],
      },
    });
  });
  it("should return an url concatenated '//' if the url has no protocol", () => {
    expect(link('rocket.chat/test')).toMatchObject({
      type: 'LINK',
      value: {
        src: plain('//rocket.chat/test'),
        label: [plain('rocket.chat/test')],
      },
    });
  });
  it("should return an url concatenated '//' if the url has no protocol and has sub-domain", () => {
    expect(link('spark-public.s3.amazonaws.com')).toMatchObject({
      type: 'LINK',
      value: {
        src: plain('//spark-public.s3.amazonaws.com'),
        label: [plain('spark-public.s3.amazonaws.com')],
      },
    });
  });
  it("should return an plain text url due to invalid TLD that's validate with the external library TLDTS", () => {
    expect(link('rocket.chattt/url_path')).toMatchObject({
      type: 'PLAIN_TEXT',
      value: 'rocket.chattt/url_path',
    });
  });
});
