import { css } from '@rocket.chat/css-in-js';
import sizes from '@rocket.chat/fuselage-tokens/sizes';
import PropTypes from 'prop-types';
import React from 'react';

import { PropsProvider } from '../PropsContext';
import { useCss } from '../useCss';

const mapSize = (size) => (Number.isFinite(size) && `${ size }px`) || sizes[size] || size;

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
    length && css`
      width: ${ mapSize(length) };
      height: ${ mapSize(length) };
    `,
    minLength && css`
      min-width: ${ mapSize(minLength) };
      min-height: ${ mapSize(minLength) };
    `,
    maxLength && css`
      max-width: ${ mapSize(maxLength) };
      max-height: ${ mapSize(maxLength) };
    `,
    width && css`width: ${ mapSize(width) };`,
    minWidth && css`min-width: ${ mapSize(minWidth) };`,
    maxWidth && css`max-width: ${ mapSize(maxWidth) };`,
    height && css`height: ${ mapSize(height) };`,
    minHeight && css`min-height: ${ mapSize(minHeight) };`,
    maxHeight && css`max-height: ${ mapSize(maxHeight) };`,
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
  length: PropTypes.oneOfType([
    PropTypes.oneOf([
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
    PropTypes.string,
    PropTypes.number,
  ]),
  minLength: PropTypes.oneOfType([
    PropTypes.oneOf([
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
    PropTypes.string,
    PropTypes.number,
  ]),
  maxLength: PropTypes.oneOfType([
    PropTypes.oneOf([
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
    PropTypes.string,
    PropTypes.number,
  ]),
  width: PropTypes.oneOfType([
    PropTypes.oneOf([
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
    PropTypes.string,
    PropTypes.number,
  ]),
  minWidth: PropTypes.oneOfType([
    PropTypes.oneOf([
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
    PropTypes.string,
    PropTypes.number,
  ]),
  maxWidth: PropTypes.oneOfType([
    PropTypes.oneOf([
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
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.oneOf([
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
    PropTypes.string,
    PropTypes.number,
  ]),
  minHeight: PropTypes.oneOfType([
    PropTypes.oneOf([
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
    PropTypes.string,
    PropTypes.number,
  ]),
  maxHeight: PropTypes.oneOfType([
    PropTypes.oneOf([
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
    PropTypes.string,
    PropTypes.number,
  ]),
};
