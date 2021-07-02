import { createElement } from 'react';
import { render } from 'react-dom';

import styled from './styled';

it('should create a styled component', () => {
  const component = styled('div')`
    color: rebeccapurple;
  `;

  const container = document.createElement('div');
  render(createElement(component), container);

  const styleElement = document.getElementsByTagName('style')[0];
  expect(styleElement.textContent).toMatch(/\{color:rebeccapurple;\}/);
});

it('should create a styled component with props', () => {
  const component = styled(
    'div',
    ({ foo, ...props }: { foo: string }) => props
  )`
    color: ${(props) => props.foo};
  `;

  const container = document.createElement('div');
  render(
    createElement(component, { foo: 'rebeccapurple', lang: 'pt-BR' }),
    container
  );

  const styleElement = document.getElementsByTagName('style')[0];
  expect(styleElement.textContent).toMatch(/\{color:rebeccapurple;\}/);
  expect(container.firstElementChild?.getAttribute('lang')).toBe('pt-BR');
});
