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

import { PropsVariationSection } from '../../../.storybook/helpers';
import { ButtonGroup } from '../ButtonGroup';
import { IconButton } from './IconButton';

const EmojiElement = (
  <div className='rcx-box rcx-box--full'>
    <span
      className='emojione emojione-diversity _1f918-1f3fe'
      title=':metal_tone4:'
    >
      🤘🏾
    </span>
  </div>
);

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

export const States = () => (
  <>
    <PropsVariationSection
      component={IconButton}
      common={{
        icon: 'doner',
        medium: true,
      }}
      xAxis={{
        default: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus focus-visible' },
        pressed: { pressed: true },
        disabled: { disabled: true },
      }}
      yAxis={{
        default: {},
        info: {
          info: true,
        },
        danger: {
          danger: true,
        },
        emoji: {
          icon: EmojiElement,
        },
      }}
    />
    {/* <Divider />
    <PropsVariationSection
      component={IconButton}
      common={{
        icon: 'doner',
        large: true,
      }}
      xAxis={{
        large: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus focus-visible' },
        pressed: { pressed: true },
        disabled: { disabled: true },
      }}
      yAxis={{
        default: {
        },
        info: {
          info: true,
        },
        danger: {
          danger: true,
        },
        emoji: {
          icon: EmojiElement,
        },
      }}
    /> */}
  </>
);

export const Variants = () => (
  <>
    <PropsVariationSection
      component={IconButton}
      common={{
        icon: 'doner',
        medium: true,
      }}
      xAxis={{
        default: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus focus-visible' },
        disabled: { disabled: true },
      }}
      yAxis={{
        'default': {},
        'info': {
          info: true,
        },
        'danger': {
          danger: true,
        },
        'success': {
          success: true,
        },
        'warning': {
          warning: true,
        },
        'secondary': {
          secondary: true,
        },
        'secondary-info | primary': {
          info: true,
          secondary: true,
        },
        'secondary-danger': {
          danger: true,
          secondary: true,
        },
        'secondary-success': {
          success: true,
          secondary: true,
        },
        'secondary-warning': {
          warning: true,
          secondary: true,
        },
      }}
    />
  </>
);

export const Sizes = () => (
  <ButtonGroup>
    <IconButton icon='balloon' secondary />
    <IconButton icon='balloon' secondary medium />
    <IconButton icon='balloon' secondary small />
    <IconButton icon='balloon' secondary tiny />
    <IconButton icon='balloon' secondary mini />
  </ButtonGroup>
);
export const _IconButtonDisabled: ComponentStory<typeof IconButton> = () => (
  <IconButton icon='balloon' disabled />
);

export const _IconButtonWithEmoji: ComponentStory<typeof IconButton> = () => (
  <IconButton icon={EmojiElement} />
);

export const _IconButtonInfo: ComponentStory<typeof IconButton> = () => (
  <IconButton icon='balloon' info />
);

export const _IconButtonSecondaryInfo: ComponentStory<
  typeof IconButton
> = () => <IconButton icon='balloon' secondary info />;

export const _IconButtonSuccess: ComponentStory<typeof IconButton> = () => (
  <IconButton icon='balloon' success />
);

export const _IconButtonSecondarySuccess: ComponentStory<
  typeof IconButton
> = () => <IconButton icon='balloon' secondary success />;

export const _IconButtonWarning: ComponentStory<typeof IconButton> = () => (
  <IconButton icon='balloon' warning />
);

export const _IconButtonSecondaryWarning: ComponentStory<
  typeof IconButton
> = () => <IconButton icon='balloon' secondary warning />;

export const _IconButtonDanger: ComponentStory<typeof IconButton> = () => (
  <IconButton icon='balloon' danger />
);

export const _IconButtonSecondaryDanger: ComponentStory<
  typeof IconButton
> = () => <IconButton icon='balloon' secondary danger />;
