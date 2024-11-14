import {
  queries,
  Queries,
  RenderHookOptions,
  RenderHookResult,
  renderHook as _renderHook,
} from '@testing-library/react';
import { createElement } from 'react';
import * as ReactDOMClient from 'react-dom';
import { renderToString } from 'react-dom/server';

type RendererableContainer = Element | Document | DocumentFragment;

export function renderHook<
  Result,
  Props,
  Q extends Queries = typeof queries,
  Container extends RendererableContainer = HTMLElement,
  BaseElement extends RendererableContainer = Container,
>(
  render: (initialProps: Props) => Result,
  options?: RenderHookOptions<Props, Q, Container, BaseElement> | undefined,
): RenderHookResult<Result, Props> {
  if (typeof document === 'undefined') {
    let current: Result;
    const TestComponent = () => {
      current = render(options?.initialProps as any);
      return null;
    };

    renderToString(createElement(TestComponent));

    return {
      result: { current: current! },
      rerender: () => undefined,
      unmount: () => undefined,
    };
  }

  if ('createRoot' in ReactDOMClient) return _renderHook(render, options);

  return _renderHook(render, { ...options, legacyRoot: true });
}

export { act } from '@testing-library/react';
