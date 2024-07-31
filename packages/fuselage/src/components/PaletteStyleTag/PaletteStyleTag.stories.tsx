import {
  Title,
  Subtitle,
  Description,
  Primary as PrimaryStory,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  Box,
  Button,
  PaletteStyleTag,
  Card,
  CardHeader,
  FramedIcon,
  CardTitle,
  CardBody,
  CardControls,
  Divider,
  ProgressBar,
  CardCol,
} from '../..';

export default {
  title: 'Layout/PaletteStyleTag',
  component: PaletteStyleTag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          "Style tag to handle the theme of the application.  <br /> Import `PaletteStyleTag` and use it on the application informing the desired theme. <br /> Toggle the theme on Storybook's Control panel to see the color changes.",
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <PrimaryStory />
          <Stories title={''} />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      ),
    },
  },
} satisfies ComponentMeta<typeof PaletteStyleTag>;

export const _PaletteStyleTag: ComponentStory<typeof PaletteStyleTag> = (
  args
) => (
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

// export const _PaletteStyleTag: ComponentStory<typeof PaletteStyleTag> =
//   Template.bind({});

_PaletteStyleTag.parameters = {
  docs: {
    description: {
      story: 'Another description on the story, overriding the comments',
    },
  },
};
