import { css } from '@rocket.chat/css-in-js';
import type { StoryFn, Meta } from '@storybook/react';

import { PropsVariationSection } from '../../../.storybook/helpers';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import Box from '../Box/Box';
import { ButtonGroup } from '../ButtonGroup';
import { avatarUrl } from '../Message/helpers';
import { IconButton } from './IconButton';

export default {
  title: 'Inputs/IconButton',
  component: IconButton,
} satisfies Meta<typeof IconButton>;

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

export const _IconButton: StoryFn<typeof IconButton> = () => (
  <IconButton icon='balloon' aria-label='balloon' />
);

export const States = () => (
  <>
    <PropsVariationSection
      component={IconButton}
      common={{
        'icon': 'doner',
        'medium': true,
        'aria-label': 'balloon',
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
        'icon': 'doner',
        'medium': true,
        'aria-label': 'balloon',
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
    <IconButton icon='balloon' aria-label='balloon' secondary />
    <IconButton icon='balloon' aria-label='balloon' secondary medium />
    <IconButton icon='balloon' aria-label='balloon' secondary small />
    <IconButton icon='balloon' aria-label='balloon' secondary tiny />
    <IconButton icon='balloon' aria-label='balloon' secondary mini />
  </ButtonGroup>
);
export const _IconButtonDisabled: StoryFn<typeof IconButton> = () => (
  <IconButton icon='balloon' aria-label='balloon' disabled />
);

export const _IconButtonWithEmoji: StoryFn<typeof IconButton> = () => (
  <IconButton icon={EmojiElement} aria-label='emoji' />
);

export const _IconButtonInfo: StoryFn<typeof IconButton> = () => (
  <IconButton icon='balloon' aria-label='balloon' info />
);

export const _IconButtonSecondaryInfo: StoryFn<typeof IconButton> = () => (
  <IconButton icon='balloon' aria-label='balloon' secondary info />
);

export const _IconButtonSuccess: StoryFn<typeof IconButton> = () => (
  <IconButton icon='balloon' aria-label='balloon' success />
);

export const _IconButtonSecondarySuccess: StoryFn<typeof IconButton> = () => (
  <IconButton icon='balloon' aria-label='balloon' secondary success />
);

export const _IconButtonWarning: StoryFn<typeof IconButton> = () => (
  <IconButton icon='balloon' aria-label='balloon' warning />
);

export const _IconButtonSecondaryWarning: StoryFn<typeof IconButton> = () => (
  <IconButton icon='balloon' aria-label='balloon' secondary warning />
);

export const _IconButtonDanger: StoryFn<typeof IconButton> = () => (
  <IconButton icon='balloon' aria-label='balloon' danger />
);

export const _IconButtonSecondaryDanger: StoryFn<typeof IconButton> = () => (
  <IconButton icon='balloon' aria-label='balloon' secondary danger />
);

export const _IconButtonWithBadge: StoryFn<typeof IconButton> = () => (
  <ButtonGroup>
    <IconButton icon='balloon' small position='relative' overflow='visible'>
      <Box
        position='absolute'
        role='status'
        className={css`
          top: 0;
          right: 0;
          transform: translate(30%, -30%);
        `}
      >
        <Badge variant='danger'>2</Badge>
      </Box>
    </IconButton>
  </ButtonGroup>
);

export const _IconButtonAvatarWithBadge: StoryFn<typeof IconButton> = () => (
  <ButtonGroup>
    <IconButton
      icon={<Avatar size='x28' url={avatarUrl} />}
      small
      position='relative'
      overflow='visible'
    >
      <Box
        position='absolute'
        role='status'
        className={css`
          top: 0;
          right: 0;
          transform: translate(30%, -30%);
        `}
      >
        <Badge variant='danger'>2</Badge>
      </Box>
    </IconButton>
  </ButtonGroup>
);
