import { Box, Button } from '@rocket.chat/fuselage';
import * as UiKit from '@rocket.chat/ui-kit';
import React, {
  ComponentProps,
  memo,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { useSurfaceType } from '../surfaces/SurfaceContext';
import Action from './ActionsBlock.Action';

type ActionsBlockProps = {
  className?: ComponentProps<typeof Box>['className'];
  blockElement: UiKit.ActionsBlock;
  parser: UiKit.SurfaceRenderer<ReactElement>;
};

const ActionsBlock = ({
  className,
  blockElement,
  parser,
}: ActionsBlockProps): ReactElement => {
  const surfaceType = useSurfaceType();

  const [showMoreVisible, setShowMoreVisible] = useState(
    () => blockElement.elements.length > 5 && surfaceType !== 'banner'
  );

  const handleShowMoreClick = useCallback(() => {
    setShowMoreVisible(false);
  }, []);

  const actionElements = useMemo(
    () =>
      (showMoreVisible
        ? blockElement.elements.slice(0, 5)
        : blockElement.elements
      ).map((element) => ({
        ...element,
        appId: element.appId ?? blockElement.appId,
        blockId: element.blockId ?? blockElement.blockId,
      })),
    [
      blockElement.appId,
      blockElement.blockId,
      blockElement.elements,
      showMoreVisible,
    ]
  );

  return (
    <Box className={className} display='flex' flexWrap='wrap' margin={-4}>
      {actionElements.map((element, i) => (
        <Action key={i} element={element} parser={parser} index={i} />
      ))}
      {showMoreVisible && (
        <Box display='flex' margin={4}>
          <Button small onClick={handleShowMoreClick}>
            {parser.renderTextObject(
              { type: 'plain_text', text: 'Show more...' },
              0,
              UiKit.BlockContext.ACTION
            )}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default memo(ActionsBlock);
