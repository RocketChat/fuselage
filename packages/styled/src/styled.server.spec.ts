/** @jest-environment node */
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import styled from './index';

it('renders a styled component without a browser document', () => {
  const Component = styled('div')`
    color: rebeccapurple;
  `;
  const html = renderToStaticMarkup(
    createElement(Component, { children: 'Hello' }),
  );

  expect(html).toContain('<style>');
  expect(html).toContain('color:rebeccapurple;');
  expect(html).toMatch(/<div class="[^"]+">Hello<\/div>/);
});

it('filters style props and preserves user class names during server rendering', () => {
  const Component = styled(
    'span',
    ({ color: _color, ...props }: { color: string }) => props,
  )`
    color: ${(props) => props.color};
  `;
  const html = renderToStaticMarkup(
    createElement(Component, {
      color: 'red',
      className: 'custom',
      children: 'Text',
    }),
  );

  expect(html).toContain('color:red;');
  expect(html).toMatch(/class="custom [^"]+"/);
  expect(html).not.toContain('color="red"');
});
