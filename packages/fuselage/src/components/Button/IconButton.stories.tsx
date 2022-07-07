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
import React from 'react';

import type { ButtonGroup } from '../ButtonGroup';
import { IconButton } from './IconButton';

export default {
  title: 'Inputs/IconButton',
  component: IconButton,
  parameters: {
    docs: {
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
} as ComponentMeta<typeof ButtonGroup>;

export const _IconButton: ComponentStory<typeof IconButton> = () => (
  <IconButton icon='balloon' />
);
export const _IconButtonDisabled: ComponentStory<typeof IconButton> = () => (
  <IconButton icon='balloon' disabled />
);

export const _IconButtonMini: ComponentStory<typeof IconButton> = () => (
  <IconButton icon='balloon' mini />
);

export const _IconButtonInfo: ComponentStory<typeof IconButton> = () => (
  <IconButton icon='balloon' info />
);
export const _IconButtonInfoDisabled: ComponentStory<
  typeof IconButton
> = () => <IconButton icon='balloon' info disabled />;

export const _IconButtonSecondaryInfo: ComponentStory<
  typeof IconButton
> = () => <IconButton icon='balloon' secondary info />;
export const _IconButtonSecondaryInfoDisabled: ComponentStory<
  typeof IconButton
> = () => <IconButton icon='balloon' secondary info disabled />;

export const _IconButtonSuccess: ComponentStory<typeof IconButton> = () => (
  <IconButton icon='balloon' success />
);
export const _IconButtonSuccessDisabled: ComponentStory<
  typeof IconButton
> = () => <IconButton icon='balloon' success disabled />;

export const _IconButtonSecondarySuccess: ComponentStory<
  typeof IconButton
> = () => <IconButton icon='balloon' secondary success />;
export const _IconButtonSecondarySuccessDisabled: ComponentStory<
  typeof IconButton
> = () => <IconButton icon='balloon' secondary success disabled />;

export const _IconButtonWarning: ComponentStory<typeof IconButton> = () => (
  <IconButton icon='balloon' warning />
);
export const _IconButtonWarningDisabled: ComponentStory<
  typeof IconButton
> = () => <IconButton icon='balloon' warning disabled />;

export const _IconButtonSecondaryWarning: ComponentStory<
  typeof IconButton
> = () => <IconButton icon='balloon' secondary warning />;
export const _IconButtonSecondaryWarningDisabled: ComponentStory<
  typeof IconButton
> = () => <IconButton icon='balloon' secondary warning disabled />;

export const _IconButtonDanger: ComponentStory<typeof IconButton> = () => (
  <IconButton icon='balloon' danger />
);
export const _IconButtonDangerDisabled: ComponentStory<
  typeof IconButton
> = () => <IconButton icon='balloon' danger disabled />;

export const _IconButtonSecondaryDanger: ComponentStory<
  typeof IconButton
> = () => <IconButton icon='balloon' secondary danger />;
export const _IconButtonSecondaryDangerDisabled: ComponentStory<
  typeof IconButton
> = () => <IconButton icon='balloon' secondary danger disabled />;
