import { Box, Flex, Grid } from '@rocket.chat/fuselage';
import * as UiKit from '@rocket.chat/ui-kit';
import React, { ComponentProps, memo, ReactElement, useMemo } from 'react';

import Fields from './SectionBlock.Fields';

type SectionBlockProps = {
  className?: ComponentProps<typeof Box>['className'];
  blockElement: UiKit.SectionBlock;
  parser: UiKit.SurfaceRenderer<ReactElement>;
};

const SectionBlock = ({
  className,
  blockElement,
  parser,
}: SectionBlockProps): ReactElement => {
  const { text, fields } = blockElement;

  const accessoryElement = useMemo(
    () =>
      blockElement.accessory
        ? {
            appId: blockElement.appId,
            blockId: blockElement.blockId,
            ...blockElement.accessory,
          }
        : undefined,
    [blockElement.appId, blockElement.blockId, blockElement.accessory]
  );

  return (
    <Grid className={className}>
      <Grid.Item>
        {text && (
          <Box is='span' fontScale='p1' color='default'>
            {parser.text(text)}
          </Box>
        )}
        {fields && <Fields fields={fields} parser={parser} />}
      </Grid.Item>
      {blockElement.accessory && (
        <Flex.Item grow={0}>
          <Grid.Item>
            {accessoryElement
              ? parser.renderSectionAccessoryBlockElement(accessoryElement, 0)
              : null}
          </Grid.Item>
        </Flex.Item>
      )}
    </Grid>
  );
};

export default memo(SectionBlock);
