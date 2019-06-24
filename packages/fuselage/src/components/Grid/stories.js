import React from 'react';
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { verticallyCentered } from '../../helpers/storybook';

import {
  Grid,
  GRID_DIRECTIONS,
  GRID_JUSTIFICATIONS,
  GRID_ITEM_ALIGNMENTS,
  GRID_DEFAULT_DIRECTION,
  GRID_DEFAULT_JUSTIFICATION,
  GRID_DEFAULT_ITEM_ALIGNMENT,
  GRID_DEFAULT_GUTTER,
} from './index';


const Card = (props) => (
  <div style={{
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    padding: '1rem',
    border: '1px solid lightgray',
    borderRadius: '0.5rem',
    color: 'gray',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    lineHeight: 1,
  }}>
    {props.children || Object.entries(props).map(([key, value]) => (value === true ? key : `${ key }=${ value }`)).join(' ')}
  </div>
);

storiesOf('Collections|Grid', module)
  .addDecorator(withKnobs)
  .addDecorator(verticallyCentered)
  .addParameters({ jest: ['Grid'] })
  .add('default', () => (
    <Grid
      container
      direction={select('direction', GRID_DIRECTIONS, GRID_DEFAULT_DIRECTION)}
      justification={select('justification', GRID_JUSTIFICATIONS, GRID_DEFAULT_JUSTIFICATION)}
      itemAlignment={select('itemAlignment', GRID_ITEM_ALIGNMENTS, GRID_DEFAULT_ITEM_ALIGNMENT)}
      gutter={number('gutter', GRID_DEFAULT_GUTTER)}
      outsideGutter={boolean('outsideGutter', true)}
    >
      <Grid item>
        <Card>1</Card>
      </Grid>
      <Grid item>
        <Card>2</Card>
      </Grid>
      <Grid item>
        <Card>3</Card>
      </Grid>
    </Grid>
  ))
  .add('with direction set', () => (
    <Grid
      container
      direction={select('direction', GRID_DIRECTIONS, 'row-reverse')}
      justification={select('justification', GRID_JUSTIFICATIONS, GRID_DEFAULT_JUSTIFICATION)}
      itemAlignment={select('itemAlignment', GRID_ITEM_ALIGNMENTS, GRID_DEFAULT_ITEM_ALIGNMENT)}
      gutter={number('gutter', GRID_DEFAULT_GUTTER)}
      outsideGutter={boolean('outsideGutter', true)}
    >
      <Grid item>
        <Card>1</Card>
      </Grid>
      <Grid item>
        <Card>2</Card>
      </Grid>
      <Grid item>
        <Card>3</Card>
      </Grid>
    </Grid>
  ))
  .add('with justification set', () => (
    <Grid
      container
      direction={select('direction', GRID_DIRECTIONS, GRID_DEFAULT_DIRECTION)}
      justification={select('justification', GRID_JUSTIFICATIONS, 'space-around')}
      itemAlignment={select('itemAlignment', GRID_ITEM_ALIGNMENTS, GRID_DEFAULT_ITEM_ALIGNMENT)}
      gutter={number('gutter', GRID_DEFAULT_GUTTER)}
      outsideGutter={boolean('outsideGutter', true)}
    >
      <Grid item>
        <Card>1</Card>
      </Grid>
      <Grid item>
        <Card>2</Card>
      </Grid>
      <Grid item>
        <Card>3</Card>
      </Grid>
    </Grid>
  ))
  .add('with item alignment set', () => (
    <Grid
      container
      direction={select('direction', GRID_DIRECTIONS, GRID_DEFAULT_DIRECTION)}
      justification={select('justification', GRID_JUSTIFICATIONS, GRID_DEFAULT_JUSTIFICATION)}
      itemAlignment={select('itemAlignment', GRID_ITEM_ALIGNMENTS, 'stretch')}
      gutter={number('gutter', GRID_DEFAULT_GUTTER)}
      outsideGutter={boolean('outsideGutter', true)}
      style={{ height: '10rem' }}
    >
      <Grid item>
        <Card>1</Card>
      </Grid>
      <Grid item>
        <Card>2</Card>
      </Grid>
      <Grid item>
        <Card>3</Card>
      </Grid>
    </Grid>
  ))
  .add('with gutter set', () => (
    <Grid
      container
      direction={select('direction', GRID_DIRECTIONS, GRID_DEFAULT_DIRECTION)}
      justification={select('justification', GRID_JUSTIFICATIONS, GRID_DEFAULT_JUSTIFICATION)}
      itemAlignment={select('itemAlignment', GRID_ITEM_ALIGNMENTS, GRID_DEFAULT_ITEM_ALIGNMENT)}
      gutter={number('gutter', 1)}
      outsideGutter={boolean('outsideGutter', true)}
    >
      <Grid item>
        <Card>1</Card>
      </Grid>
      <Grid item>
        <Card>2</Card>
      </Grid>
      <Grid item>
        <Card>3</Card>
      </Grid>
    </Grid>
  ))
  .add('without outside gutter', () => (
    <Grid
      container
      direction={select('direction', GRID_DIRECTIONS, GRID_DEFAULT_DIRECTION)}
      justification={select('justification', GRID_JUSTIFICATIONS, GRID_DEFAULT_JUSTIFICATION)}
      itemAlignment={select('itemAlignment', GRID_ITEM_ALIGNMENTS, GRID_DEFAULT_ITEM_ALIGNMENT)}
      gutter={number('gutter', GRID_DEFAULT_GUTTER)}
      outsideGutter={boolean('outsideGutter', false)}
    >
      <Grid item>
        <Card>1</Card>
      </Grid>
      <Grid item>
        <Card>2</Card>
      </Grid>
      <Grid item>
        <Card>3</Card>
      </Grid>
      <Grid item>
        <Card>4</Card>
      </Grid>
      <Grid item>
        <Card>5</Card>
      </Grid>
      <Grid item>
        <Card>6</Card>
      </Grid>
      <Grid item>
        <Card>7</Card>
      </Grid>
      <Grid item>
        <Card>8</Card>
      </Grid>
      <Grid item>
        <Card>9</Card>
      </Grid>
      <Grid item>
        <Card>10</Card>
      </Grid>
      <Grid item>
        <Card>11</Card>
      </Grid>
      <Grid item>
        <Card>12</Card>
      </Grid>
      <Grid item>
        <Card>13</Card>
      </Grid>
      <Grid item>
        <Card>14</Card>
      </Grid>
      <Grid item>
        <Card>15</Card>
      </Grid>
      <Grid item>
        <Card>16</Card>
      </Grid>
    </Grid>
  ))
  .add('with auto-layout', () => (
    <Grid
      container
      direction={select('direction', GRID_DIRECTIONS, GRID_DEFAULT_DIRECTION)}
      justification={select('justification', GRID_JUSTIFICATIONS, GRID_DEFAULT_JUSTIFICATION)}
      itemAlignment={select('itemAlignment', GRID_ITEM_ALIGNMENTS, GRID_DEFAULT_ITEM_ALIGNMENT)}
      gutter={number('gutter', GRID_DEFAULT_GUTTER)}
      outsideGutter={boolean('outsideGutter', true)}
    >
      <Grid item md>
        <Card md />
      </Grid>
      <Grid item md={4}>
        <Card md={4} />
      </Grid>
      <Grid item md>
        <Card md />
      </Grid>
    </Grid>
  ))
  .add('breakpoints', () => (
    <>
      {[1, 2, 4, 8, 16].map((size) => (
        <Grid
          key={size}
          container
          direction={select('direction', GRID_DIRECTIONS, GRID_DEFAULT_DIRECTION)}
          justification={select('justification', GRID_JUSTIFICATIONS, GRID_DEFAULT_JUSTIFICATION)}
          itemAlignment={select('itemAlignment', GRID_ITEM_ALIGNMENTS, GRID_DEFAULT_ITEM_ALIGNMENT)}
          gutter={number('gutter', GRID_DEFAULT_GUTTER)}
        >
          {new Array(16 / size).fill(null).map((_, key) => (
            <Grid key={key} item md={size}>
              <Card md={size} />
            </Grid>
          ))}
        </Grid>
      ))}
    </>
  ));
