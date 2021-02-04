const parseDocument = (input: string): string => input;

it.skip('tabs', () => {
  expect(parseDocument('\tfoo\tbaz\t\tbim')).toBe(
    '<pre><code>foo\tbaz\t\tbim\n</code></pre>'
  );
  expect(parseDocument('  \tfoo\tbaz\t\tbim')).toBe(
    '<pre><code>foo\tbaz\t\tbim\n</code></pre>'
  );
  expect(parseDocument('    a\ta\n    ὐ\ta')).toBe(
    '<pre><code>a\ta\nὐ\ta\n</code></pre>'
  );
  expect(parseDocument('  - foo\n\n\tbar')).toBe(
    '<ul>\n<li>\n<p>foo</p>\n<p>  bar</p>\n</li>\n</ul>'
  );
  expect(parseDocument('>\t\tfoo')).toBe(
    '<blockquote>\n<pre><code>  foo\n</code></pre>\n</blockquote>'
  );
  expect(parseDocument('-\t\tfoo')).toBe(
    '<ul>\n<li>\n<pre><code>  foo\n</code></pre>\n</li>\n</ul>'
  );
  expect(parseDocument('    foo\n\tbar')).toBe(
    '<pre><code>foo\nbar\n</code></pre>'
  );
  expect(parseDocument(' - foo\n   - bar\n\t - baz')).toBe(
    '<ul>\n<li>foo\n<ul>\n<li>bar\n<ul>\n<li>baz</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>'
  );
  expect(parseDocument('#\tFoo')).toBe('<h1>Foo</h1>');
  expect(parseDocument('*\t*\t*\t')).toBe('<hr />');
});
