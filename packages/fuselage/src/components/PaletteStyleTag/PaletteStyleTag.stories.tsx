import type { StoryFn, Meta } from '@storybook/react';

import Box from '../Box';
import Button from '../Button';
import {
  Card,
  CardBody,
  CardCol,
  CardControls,
  CardHeader,
  CardTitle,
} from '../Card';
import { Divider } from '../Divider';
import { FramedIcon } from '../FramedIcon';
import { ProgressBar } from '../ProgressBar';
import PaletteStyleTag from './PaletteStyleTag';

export default {
  title: 'Layout/PaletteStyleTag',
  component: PaletteStyleTag,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PaletteStyleTag>;

export const _PaletteStyleTag: StoryFn<typeof PaletteStyleTag> = (args) => (
  <Box bg='neutral' p={24}>
    <PaletteStyleTag {...args} />
    <Card>
      <CardHeader>
        <FramedIcon icon='address-book' />
        <CardTitle variant='h3'>{args.theme} theme</CardTitle>
      </CardHeader>
      <CardBody>
        <CardCol>
          Toggle the theme on Control panel to see the color changes.
          <Divider />
          <ProgressBar percentage={10} variant='danger' />
          <ProgressBar percentage={30} variant='warning' />
          <ProgressBar percentage={75} />
          <ProgressBar percentage={100} variant='success' />
        </CardCol>
      </CardBody>
      <CardControls>
        <Button medium>Default</Button>
        <Button medium primary>
          Primary
        </Button>
        <Button medium danger>
          Danger
        </Button>
      </CardControls>
    </Card>
  </Box>
);
_PaletteStyleTag.parameters = {
  docs: {
    description: {
      story: 'Another description on the story, overriding the comments',
    },
  },
};
