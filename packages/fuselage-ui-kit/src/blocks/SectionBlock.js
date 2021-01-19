import { Box, Flex, Grid, Margins } from '@rocket.chat/fuselage';
import { BlockContext } from '@rocket.chat/ui-kit';
import React from 'react';

const Accessory = ({ blockId, appId, element, parser }) =>
  parser.renderAccessories(
    { blockId, appId, ...element },
    BlockContext.SECTION,
    parser
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

const SectionBlock = ({ blockId, appId, text, fields, accessory, parser }) => (
  <Margins blockEnd='x16'>
    <Grid>
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
            <Accessory
              element={{ blockId, appId, ...accessory }}
              parser={parser}
            />
          </Grid.Item>
        </Flex.Item>
      )}
    </Grid>
  </Margins>
);

export default SectionBlock;
