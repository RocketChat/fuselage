import type {
  queries,
  Queries,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import { render as renderOriginal } from '@testing-library/react';
import type React from 'react';
import type ReactDOMClient from 'react-dom';

type RendererableContainer = ReactDOMClient.Container;
type HydrateableContainer = Parameters<(typeof ReactDOMClient)['hydrate']>[0];

/**
 * Light wrapper around `react-testing-library` to provide a custom render function for transitioning to React 18
 */
export function render<
  Q extends Queries = typeof queries,
  Container extends RendererableContainer | HydrateableContainer = HTMLElement,
  BaseElement extends RendererableContainer | HydrateableContainer = Container
>(
  ui: React.ReactNode,
  options: RenderOptions<Q, Container, BaseElement>
): RenderResult<Q, Container, BaseElement>;
export function render(
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult;
export function render(ui: React.ReactNode, options?: any): any {
  return renderOriginal(ui, {
    legacyRoot: true,
    ...options,
  });
}
