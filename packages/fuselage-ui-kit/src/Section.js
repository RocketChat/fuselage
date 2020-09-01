import {
  Box,
  Flex,
  Grid,
} from '@rocket.chat/fuselage';
import {
  BLOCK_CONTEXT,
} from '@rocket.chat/ui-kit';
import React from 'react';

import { Block } from './Block';

const Accessory = ({ blockId, appId, element, parser }) =>
  parser.renderAccessories(
    { blockId, appId, ...element },
    BLOCK_CONTEXT.SECTION,
    parser,
  );

const breakpoints = {
  xs: 4,
  sm: 4,
  md: 4,
  lg: 6,
  xl: 6,
};

const Fields = ({ fields, parser }) => (
  <Grid>
    {fields.map((field, i) => (
      <Grid.Item {...breakpoints} key={i}>
        {parser.text(field)}
      </Grid.Item>
    ))}
  </Grid>
);

export const Section = ({ blockId, appId, text, fields, accessory, parser }) => <Block>
  <Grid>
    <Grid.Item>
      {text && <Box is='span' fontScale='p1' color='default'>{parser.text(text)}</Box>}
      {fields && <Fields fields={fields} parser={parser} />}
    </Grid.Item>
    {accessory && <Flex.Item grow={0}>
      <Grid.Item>
        <Accessory element={{ blockId, appId, ...accessory }} parser={parser} />
      </Grid.Item>
    </Flex.Item>}
  </Grid>
</Block>;
