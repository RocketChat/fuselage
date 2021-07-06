import { Box, Flex, Grid } from '@rocket.chat/fuselage';
import React, { memo, useMemo } from 'react';

import Accessory from './Accessory';
import Fields from './Fields';

const SectionBlock = ({ className, blockElement, parser }) => {
  const { blockId, appId, text, fields, accessory } = blockElement;

  const accessoryElement = useMemo(
    () => ({ appId, blockId, ...accessory }),
    [appId, blockId, accessory]
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
      {accessory && (
        <Flex.Item grow={0}>
          <Grid.Item>
            <Accessory element={accessoryElement} parser={parser} />
          </Grid.Item>
        </Flex.Item>
      )}
    </Grid>
  );
};

export default memo(SectionBlock);
