import sizes from '@rocket.chat/fuselage-tokens/sizes';
import PropTypes from 'prop-types';
import React from 'react';

import { PropsProvider } from '../PropsContext';
import { useCss, css } from '../useCss';

export function Size({
  children,
  length,
  minLength,
  maxLength,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
}) {
  const sizeClassName = useCss([
    sizes[length] && css`
      width: ${ sizes[length] };
      height: ${ sizes[length] };
    `,
    sizes[minLength] && css`
      min-width: ${ sizes[minLength] };
      min-height: ${ sizes[minLength] };
    `,
    sizes[maxLength] && css`
      max-width: ${ sizes[maxLength] };
      max-height: ${ sizes[maxLength] };
    `,
    sizes[width] && css`width: ${ sizes[width] };`,
    sizes[minWidth] && css`min-width: ${ sizes[minWidth] };`,
    sizes[maxWidth] && css`max-width: ${ sizes[maxWidth] };`,
    sizes[height] && css`height: ${ sizes[height] };`,
    sizes[minHeight] && css`min-height: ${ sizes[minHeight] };`,
    sizes[maxHeight] && css`max-height: ${ sizes[maxHeight] };`,
  ], [
    length,
    minLength,
    maxLength,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
  ]);

  return <PropsProvider children={children} fn={({ className, ...props }) => ({
    className: [className, sizeClassName].filter(Boolean).join(' '),
    ...props,
  })} memoized />;
}

Size.propTypes = {
  length: PropTypes.oneOf([
    'none', 'full', 'sw', 'sh',
    'x2', 'x4', 'x8', 'x12', 'x16', 'x20', 'x24', 'x28', 'x32', 'x36',
    'x40', 'x80', 'x120', 'x160', 'x200',
    'x240', 'x280', 'x320', 'x360', 'x400',
    'x440', 'x480', 'x520', 'x560', 'x600',
    'x640', 'x680', 'x720', 'x760', 'x800',
    'x840', 'x880', 'x920', 'x960', 'x1000',
    'x1040', 'x1080', 'x120', 'x1160', 'x1200',
    'x1240', 'x1280', 'x1320', 'x1360', 'x1400',
    'x1440', 'x1480', 'x1520', 'x1560', 'x1600',
  ]),
  minLength: PropTypes.oneOf([
    'none', 'full', 'sw', 'sh',
    'x2', 'x4', 'x8', 'x12', 'x16', 'x20', 'x24', 'x28', 'x32', 'x36',
    'x40', 'x80', 'x120', 'x160', 'x200',
    'x240', 'x280', 'x320', 'x360', 'x400',
    'x440', 'x480', 'x520', 'x560', 'x600',
    'x640', 'x680', 'x720', 'x760', 'x800',
    'x840', 'x880', 'x920', 'x960', 'x1000',
    'x1040', 'x1080', 'x120', 'x1160', 'x1200',
    'x1240', 'x1280', 'x1320', 'x1360', 'x1400',
    'x1440', 'x1480', 'x1520', 'x1560', 'x1600',
  ]),
  maxLength: PropTypes.oneOf([
    'none', 'full', 'sw', 'sh',
    'x2', 'x4', 'x8', 'x12', 'x16', 'x20', 'x24', 'x28', 'x32', 'x36',
    'x40', 'x80', 'x120', 'x160', 'x200',
    'x240', 'x280', 'x320', 'x360', 'x400',
    'x440', 'x480', 'x520', 'x560', 'x600',
    'x640', 'x680', 'x720', 'x760', 'x800',
    'x840', 'x880', 'x920', 'x960', 'x1000',
    'x1040', 'x1080', 'x120', 'x1160', 'x1200',
    'x1240', 'x1280', 'x1320', 'x1360', 'x1400',
    'x1440', 'x1480', 'x1520', 'x1560', 'x1600',
  ]),
  width: PropTypes.oneOf([
    'none', 'full', 'sw', 'sh',
    'x2', 'x4', 'x8', 'x12', 'x16', 'x20', 'x24', 'x28', 'x32', 'x36',
    'x40', 'x80', 'x120', 'x160', 'x200',
    'x240', 'x280', 'x320', 'x360', 'x400',
    'x440', 'x480', 'x520', 'x560', 'x600',
    'x640', 'x680', 'x720', 'x760', 'x800',
    'x840', 'x880', 'x920', 'x960', 'x1000',
    'x1040', 'x1080', 'x120', 'x1160', 'x1200',
    'x1240', 'x1280', 'x1320', 'x1360', 'x1400',
    'x1440', 'x1480', 'x1520', 'x1560', 'x1600',
  ]),
  minWidth: PropTypes.oneOf([
    'none', 'full', 'sw', 'sh',
    'x2', 'x4', 'x8', 'x12', 'x16', 'x20', 'x24', 'x28', 'x32', 'x36',
    'x40', 'x80', 'x120', 'x160', 'x200',
    'x240', 'x280', 'x320', 'x360', 'x400',
    'x440', 'x480', 'x520', 'x560', 'x600',
    'x640', 'x680', 'x720', 'x760', 'x800',
    'x840', 'x880', 'x920', 'x960', 'x1000',
    'x1040', 'x1080', 'x120', 'x1160', 'x1200',
    'x1240', 'x1280', 'x1320', 'x1360', 'x1400',
    'x1440', 'x1480', 'x1520', 'x1560', 'x1600',
  ]),
  maxWidth: PropTypes.oneOf([
    'none', 'full', 'sw', 'sh',
    'x2', 'x4', 'x8', 'x12', 'x16', 'x20', 'x24', 'x28', 'x32', 'x36',
    'x40', 'x80', 'x120', 'x160', 'x200',
    'x240', 'x280', 'x320', 'x360', 'x400',
    'x440', 'x480', 'x520', 'x560', 'x600',
    'x640', 'x680', 'x720', 'x760', 'x800',
    'x840', 'x880', 'x920', 'x960', 'x1000',
    'x1040', 'x1080', 'x120', 'x1160', 'x1200',
    'x1240', 'x1280', 'x1320', 'x1360', 'x1400',
    'x1440', 'x1480', 'x1520', 'x1560', 'x1600',
  ]),
  height: PropTypes.oneOf([
    'none', 'full', 'sw', 'sh',
    'x2', 'x4', 'x8', 'x12', 'x16', 'x20', 'x24', 'x28', 'x32', 'x36',
    'x40', 'x80', 'x120', 'x160', 'x200',
    'x240', 'x280', 'x320', 'x360', 'x400',
    'x440', 'x480', 'x520', 'x560', 'x600',
    'x640', 'x680', 'x720', 'x760', 'x800',
    'x840', 'x880', 'x920', 'x960', 'x1000',
    'x1040', 'x1080', 'x120', 'x1160', 'x1200',
    'x1240', 'x1280', 'x1320', 'x1360', 'x1400',
    'x1440', 'x1480', 'x1520', 'x1560', 'x1600',
  ]),
  minHeight: PropTypes.oneOf([
    'none', 'full', 'sw', 'sh',
    'x2', 'x4', 'x8', 'x12', 'x16', 'x20', 'x24', 'x28', 'x32', 'x36',
    'x40', 'x80', 'x120', 'x160', 'x200',
    'x240', 'x280', 'x320', 'x360', 'x400',
    'x440', 'x480', 'x520', 'x560', 'x600',
    'x640', 'x680', 'x720', 'x760', 'x800',
    'x840', 'x880', 'x920', 'x960', 'x1000',
    'x1040', 'x1080', 'x120', 'x1160', 'x1200',
    'x1240', 'x1280', 'x1320', 'x1360', 'x1400',
    'x1440', 'x1480', 'x1520', 'x1560', 'x1600',
  ]),
  maxHeight: PropTypes.oneOf([
    'none', 'full', 'sw', 'sh',
    'x2', 'x4', 'x8', 'x12', 'x16', 'x20', 'x24', 'x28', 'x32', 'x36',
    'x40', 'x80', 'x120', 'x160', 'x200',
    'x240', 'x280', 'x320', 'x360', 'x400',
    'x440', 'x480', 'x520', 'x560', 'x600',
    'x640', 'x680', 'x720', 'x760', 'x800',
    'x840', 'x880', 'x920', 'x960', 'x1000',
    'x1040', 'x1080', 'x120', 'x1160', 'x1200',
    'x1240', 'x1280', 'x1320', 'x1360', 'x1400',
    'x1440', 'x1480', 'x1520', 'x1560', 'x1600',
  ]),
};
