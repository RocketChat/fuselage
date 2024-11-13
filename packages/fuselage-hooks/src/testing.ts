import {
  queries,
  Queries,
  RenderHookOptions,
  RenderHookResult,
  renderHook as _renderHook,
} from '@testing-library/react';
import { createElement } from 'react';
// eslint-disable-next-line import/no-unresolved
import * as ReactDOMClient from 'react-dom/client';
import * as ReactDOMServer from 'react-dom/server';

type RendererableContainer = ReactDOMClient.Container;
type HydrateableContainer = Parameters<
  (typeof ReactDOMClient)['hydrateRoot']
>[0];

export function renderHook<
  Result,
  Props,
  Q extends Queries = typeof queries,
  Container extends RendererableContainer | HydrateableContainer = HTMLElement,
  BaseElement extends RendererableContainer | HydrateableContainer = Container,
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

    ReactDOMServer.renderToString(createElement(TestComponent));

    return {
      result: { current: current! },
      rerender: () => undefined,
      unmount: () => undefined,
    };
  }

  if (typeof ReactDOMClient.createRoot === 'undefined')
    return _renderHook(render, { ...options, legacyRoot: true });
  return _renderHook(render, options);
}

export function renderHookOnServer<
  Result,
  Props,
  Q extends Queries = typeof queries,
  Container extends RendererableContainer | HydrateableContainer = HTMLElement,
  BaseElement extends RendererableContainer | HydrateableContainer = Container,
>(
  render: (initialProps: Props) => Result,
  options?: RenderHookOptions<Props, Q, Container, BaseElement> | undefined,
) {
  let current: Result;
  const TestComponent = () => {
    current = render(options?.initialProps as any);
    return null;
  };

  ReactDOMServer.renderToString(createElement(TestComponent));

  return { result: { current: current! } };
}

export { act } from '@testing-library/react';
