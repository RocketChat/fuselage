import React from 'react';

import { Button, ButtonGroup } from '../..';

export default {
  title: 'Collections|ButtonGroup',
  component: ButtonGroup,
  parameters: {
    jest: ['ButtonGroup/spec'],
  },
};

export const _default = () =>
  <ButtonGroup>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>;

export const wrap = () =>
  <ButtonGroup wrap>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
    <Button>Button 4</Button>
    <Button>Button 5</Button>
    <Button>Button 6</Button>
    <Button>Button 7</Button>
    <Button>Button 8</Button>
    <Button>Button 9</Button>
    <Button>Button 10</Button>
    <Button>Button 11</Button>
    <Button>Button 12</Button>
    <Button>Button 13</Button>
    <Button>Button 14</Button>
    <Button>Button 15</Button>
    <Button>Button 16</Button>
    <Button>Button 17</Button>
    <Button>Button 18</Button>
    <Button>Button 19</Button>
    <Button>Button 20</Button>
  </ButtonGroup>;

export const stretch = () =>
  <ButtonGroup stretch>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>;

export const vertical = () =>
  <ButtonGroup vertical>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>;

export const verticalWithStretch = () =>
  <ButtonGroup vertical stretch>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>;

export const alignedAtStart = () =>
  <ButtonGroup align='start'>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>;

export const alignedAtEnd = () =>
  <ButtonGroup align='end'>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>;
