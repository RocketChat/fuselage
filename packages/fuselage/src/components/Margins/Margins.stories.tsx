import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Box, Button, ButtonGroup, Margins, Tile } from '../..';

export default {
  title: 'Layout/Margins_new',
  component: Margins,
} as ComponentMeta<typeof Margins>;

const Template: ComponentStory<typeof Margins> = (args) => (
  <ButtonGroup>
    <Button>Without margins</Button>
    <Margins {...args}>
      <Button>With margins</Button>
    </Margins>
    <Button>Without margins</Button>
    <Button>Without margins</Button>
  </ButtonGroup>
);

export const Example: ComponentStory<typeof Margins> = Template.bind({});
Example.args = {
  all: 'x32',
};

export const AllProp = () => (
  <Box display='flex' alignItems='center'>
    <Margins all='x8'>
      <Tile display='flex' padding='none'>
        <Margins all='x4'>
          <Tile>x4</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins all='x8'>
          <Tile>x8</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins all='x16'>
          <Tile>x16</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins all='x24'>
          <Tile>x24</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins all='x32'>
          <Tile>x32</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins all='x40'>
          <Tile>x40</Tile>
        </Margins>
      </Tile>
    </Margins>
  </Box>
);
AllProp.storyName = 'all prop';

export const BlockProp = () => (
  <Box display='flex' alignItems='center'>
    <Margins all='x8'>
      <Tile display='flex' padding='none'>
        <Margins block='x4'>
          <Tile>x4</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins block='x8'>
          <Tile>x8</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins block='x16'>
          <Tile>x16</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins block='x24'>
          <Tile>x24</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins block='x32'>
          <Tile>x32</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins block='x40'>
          <Tile>x40</Tile>
        </Margins>
      </Tile>
    </Margins>
  </Box>
);
BlockProp.storyName = 'block prop';

export const BlockStartProp = () => (
  <Box display='flex' alignItems='center'>
    <Margins all='x8'>
      <Tile display='flex' padding='none'>
        <Margins blockStart='x4'>
          <Tile>x4</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins blockStart='x8'>
          <Tile>x8</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins blockStart='x16'>
          <Tile>x16</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins blockStart='x24'>
          <Tile>x24</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins blockStart='x32'>
          <Tile>x32</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins blockStart='x40'>
          <Tile>x40</Tile>
        </Margins>
      </Tile>
    </Margins>
  </Box>
);
BlockStartProp.storyName = 'blockStart prop';

export const BlockEndProp = () => (
  <Box display='flex' alignItems='center'>
    <Margins all='x8'>
      <Tile display='flex' padding='none'>
        <Margins blockEnd='x4'>
          <Tile>x4</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins blockEnd='x8'>
          <Tile>x8</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins blockEnd='x16'>
          <Tile>x16</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins blockEnd='x24'>
          <Tile>x24</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins blockEnd='x32'>
          <Tile>x32</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins blockEnd='x40'>
          <Tile>x40</Tile>
        </Margins>
      </Tile>
    </Margins>
  </Box>
);
BlockEndProp.storyName = 'blockEnd prop';

export const InlineProp = () => (
  <Box display='flex' alignItems='center'>
    <Margins all='x8'>
      <Tile display='flex' padding='none'>
        <Margins inline='x4'>
          <Tile>x4</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins inline='x8'>
          <Tile>x8</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins inline='x16'>
          <Tile>x16</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins inline='x24'>
          <Tile>x24</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins inline='x32'>
          <Tile>x32</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins inline='x40'>
          <Tile>x40</Tile>
        </Margins>
      </Tile>
    </Margins>
  </Box>
);
InlineProp.storyName = 'inline prop';

export const InlineStartProp = () => (
  <Box display='flex' alignItems='center'>
    <Margins all='x8'>
      <Tile display='flex' padding='none'>
        <Margins inlineStart='x4'>
          <Tile>x4</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins inlineStart='x8'>
          <Tile>x8</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins inlineStart='x16'>
          <Tile>x16</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins inlineStart='x24'>
          <Tile>x24</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins inlineStart='x32'>
          <Tile>x32</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins inlineStart='x40'>
          <Tile>x40</Tile>
        </Margins>
      </Tile>
    </Margins>
  </Box>
);
InlineStartProp.storyName = 'inlineStart prop';

export const InlineEndProp = () => (
  <Box display='flex' alignItems='center'>
    <Margins all='x8'>
      <Tile display='flex' padding='none'>
        <Margins inlineEnd='x4'>
          <Tile>x4</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins inlineEnd='x8'>
          <Tile>x8</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins inlineEnd='x16'>
          <Tile>x16</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins inlineEnd='x24'>
          <Tile>x24</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins inlineEnd='x32'>
          <Tile>x32</Tile>
        </Margins>
      </Tile>
      <Tile display='flex' padding='none'>
        <Margins inlineEnd='x40'>
          <Tile>x40</Tile>
        </Margins>
      </Tile>
    </Margins>
  </Box>
);
InlineEndProp.storyName = 'inlineEnd prop';

export const WithNegativeValues = () => (
  <Box display='flex' flexDirection='column' alignItems='center'>
    <Margins all='x20'>
      <Tile>
        <Margins inline='-x40'>
          <Tile display='flex' padding='none'>
            <Margins inline='x40'>
              <Tile padding='x40' />
              <Tile padding='x40' />
              <Tile padding='x40' />
              <Tile padding='x40' />
            </Margins>
          </Tile>
        </Margins>
      </Tile>
      <Tile>
        <Margins block='-x40'>
          <Tile display='flex' padding='none'>
            <Margins block='x40'>
              <Tile padding='x40' />
              <Tile padding='x40' />
              <Tile padding='x40' />
              <Tile padding='x40' />
            </Margins>
          </Tile>
        </Margins>
      </Tile>
    </Margins>
  </Box>
);
WithNegativeValues.storyName = 'With negative values';

export const WithAutoValue = () => (
  <Tile display='flex'>
    <Tile padding='x40' />
    <Margins inline='auto'>
      <Tile padding='x40' />
    </Margins>
    <Tile padding='x40' />
  </Tile>
);
WithAutoValue.storyName = 'With auto value';

export const WithNoneValue = () => (
  <Tile display='flex'>
    <Margins inline='x16'>
      <Tile padding='x40' />
    </Margins>
    <Margins inline='none'>
      <Tile padding='x40' />
      <Tile padding='x40' />
    </Margins>
    <Margins inline='x16'>
      <Tile padding='x40' />
    </Margins>
  </Tile>
);
WithNoneValue.storyName = 'With none value';

export const WithNonBoxChildren = () => (
  <div style={{ border: '1px solid red' }}>
    <Margins block='x16' inline='x32'>
      <div style={{ border: '1px solid green' }} />
      <div style={{ border: '1px solid blue' }} />
    </Margins>
  </div>
);
WithNonBoxChildren.storyName = 'With non-Box children';
