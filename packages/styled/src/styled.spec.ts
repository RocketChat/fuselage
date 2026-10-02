import { render } from '@testing-library/react';
import { createElement } from 'react';

import { OwnerDocument } from './OwnerDocument';
import styled from './styled';

it('should create a styled component', () => {
  const component = styled('div')`
    color: rebeccapurple;
  `;

  render(createElement(component));

  const styleElement = document.getElementsByTagName('style')[0];
  expect(styleElement.textContent).toMatch(/\{color:rebeccapurple;\}/);
});

it('attaches styles to the document supplied by the provider', () => {
  const ownerDocument = document.implementation.createHTMLDocument();
  const Component = styled('div')`
    color: tomato;
  `;

  render(
    createElement(
      OwnerDocument.Provider,
      { value: { document: ownerDocument } },
      createElement(Component),
    ),
  );

  expect(ownerDocument.head.textContent).toContain('color:tomato;');
});

it('should create a styled component with props', () => {
  const component = styled(
    'div',
    ({ foo: _foo, ...props }: { foo: string }) => props,
  )`
    color: ${(props) => props.foo};
  `;

  const { container } = render(
    createElement(component, { foo: 'rebeccapurple', lang: 'pt-BR' }),
  );

  const styleElement = document.getElementsByTagName('style')[0];
  expect(styleElement.textContent).toMatch(/\{color:rebeccapurple;\}/);
  expect(container.firstElementChild?.getAttribute('lang')).toBe('pt-BR');
});
