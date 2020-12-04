import { createElement, FC } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import styled from './styled';

it('injects a className', () => {
  let props: Record<string, unknown> = {};

  const Component: FC = (_props) => {
    props = _props;

    return null;
  };

  const StyledComponent = styled(Component)`
    color: red;
  `;

  act(() => {
    render(createElement(StyledComponent), document.createElement('div'));
  });

  expect(props.className).not.toBeUndefined();
});

it('merges a className', () => {
  let props: Record<string, unknown> = {};

  const Component: FC<{ className?: string }> = (_props) => {
    props = _props;

    return null;
  };

  const StyledComponent = styled(Component)`
    color: red;
  `;

  act(() => {
    render(
      createElement(StyledComponent, {
        className: 'block__element--modifier',
      }),
      document.createElement('div')
    );
  });

  expect(props.className).toMatch(/^block__element--modifier [^\s]+$/);
});
