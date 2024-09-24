import type { Meta, StoryFn } from '@storybook/react';

import { PropsVariationSection } from '../../../.storybook/helpers';
import { Icon } from '../Icon';
import UrlInput from './UrlInput';

export default {
  title: 'Inputs/UrlInput',
  component: UrlInput,
} satisfies Meta<typeof UrlInput>;

export const Default: StoryFn<typeof UrlInput> = () => (
  <UrlInput aria-label='url' />
);

export const WithIconAddon = () => (
  <UrlInput aria-label='url' addon={<Icon name='send' size='x20' />} />
);

export const Invalid = () => <UrlInput aria-label='url' error='Error' />;

export const Disabled = () => <UrlInput aria-label='url' disabled />;

export const WithPlaceholder = () => (
  <UrlInput aria-label='url' placeholder='Placeholder' />
);

export const WithValue = () => (
  <UrlInput aria-label='url' defaultValue='https://rocket.chat' />
);

export const States = () => (
  <>
    <PropsVariationSection
      component={UrlInput}
      common={{ 'onChange': () => undefined, 'aria-label': 'url' }}
      xAxis={{
        'default': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 'https://rocket.chat' },
        'with icon': {
          addon: <Icon name='discover' size='x20' />,
          value: 'https://rocket.chat',
        },
      }}
      yAxis={{
        'default': {},
        'hover': { className: 'hover' },
        'active': { className: 'active' },
        'focus': { className: 'focus' },
        'disabled': { disabled: true },
        'errored': { error: 'Error' },
        'errored + hover': { className: 'hover', error: 'Error' },
        'errored + active': { className: 'active', error: 'Error' },
        'errored + focus': { className: 'focus', error: 'Error' },
      }}
    />
    <PropsVariationSection
      component={UrlInput}
      common={{
        'onChange': () => undefined,
        'small': true,
        'aria-label': 'url',
      }}
      xAxis={{
        'small': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 'https://rocket.chat' },
        'with icon': {
          addon: <Icon name='discover' size='x20' />,
          value: 'https://rocket.chat',
        },
      }}
      yAxis={{
        'small': {},
        'hover': { className: 'hover' },
        'active': { className: 'active' },
        'focus': { className: 'focus' },
        'disabled': { disabled: true },
        'errored': { error: 'Error' },
        'errored + hover': { className: 'hover', error: 'Error' },
        'errored + active': { className: 'active', error: 'Error' },
        'errored + focus': { className: 'focus', error: 'Error' },
      }}
    />
  </>
);
