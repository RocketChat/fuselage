import * as UiKit from '@rocket.chat/ui-kit';
import React, { ComponentType, ReactElement } from 'react';

export const createSurfaceRenderer = <
  S extends UiKit.SurfaceRenderer<ReactElement>
>(
  SurfaceComponent: ComponentType,
  surfaceRenderer: S
) =>
  function Surface(
    blocks: UiKit.Block[],
    conditions: UiKit.Conditions = {}
  ): ReactElement {
    return (
      <SurfaceComponent>
        {surfaceRenderer.render(blocks, {
          engine: 'rocket.chat',
          ...conditions,
        })}
      </SurfaceComponent>
    );
  };
