import { Box } from '@rocket.chat/fuselage';
import * as UiKit from '@rocket.chat/ui-kit';
import React, { ComponentProps, memo, ReactElement, useMemo } from 'react';

import Item from './ContextBlock.Item';

type ContextBlockProps = {
  className?: ComponentProps<typeof Box>['className'];
  blockElement: UiKit.ContextBlock;
  parser: UiKit.SurfaceRenderer<ReactElement>;
};

const ContextBlock = ({
  className,
  blockElement,
  parser,
}: ContextBlockProps): ReactElement => {
  const itemElements = useMemo(
    () =>
      blockElement.elements.map((element) => ({
        ...element,
        appId: blockElement.appId,
        blockId: blockElement.blockId,
      })),
    [blockElement.appId, blockElement.blockId, blockElement.elements]
  );

  return (
    <Box className={className} display='flex' alignItems='center' margin={-4}>
      {itemElements.map((element, i) => (
        <Item key={i} element={element} parser={parser} index={i} />
      ))}
    </Box>
  );
};

export default memo(ContextBlock);
