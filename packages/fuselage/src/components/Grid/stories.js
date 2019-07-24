import { withKnobs, boolean, number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { verticallyCentered } from '../../helpers/storybook';
import { Grid } from './index';


const containerProps = ({
  direction = Grid.directions.row,
  justification = Grid.justifications.center,
  itemAlignment = Grid.itemAlignments.center,
  gutter = 3,
  outsideGutter = true,
} = {}) => ({
  direction: select('direction', Grid.directions, direction),
  justification: select('justification', Grid.justifications, justification),
  itemAlignment: select('itemAlignment', Grid.itemAlignments, itemAlignment),
  gutter: number('gutter', gutter),
  outsideGutter: boolean('outsideGutter', outsideGutter),
});

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
  .addParameters({ jest: ['spec'] })
  .add('default', () => (
    <Grid container {...containerProps()}>
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
    <Grid container {...containerProps({ direction: Grid.directions.rowReverse })}>
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
    <Grid container {...containerProps({ justification: Grid.justifications.spaceAround })}>
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
    <Grid container {...containerProps({ itemAlignment: Grid.itemAlignments.stretch })} style={{ height: '10rem' }}>
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
    <Grid container {...containerProps({ gutter: 1 })}>
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
    <Grid container {...containerProps({ outsideGutter: false })}>
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
    <Grid container {...containerProps()}>
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
        <Grid key={size} container {...containerProps()}>
          {new Array(16 / size).fill(null).map((_, key) => (
            <Grid key={key} item md={size}>
              <Card md={size} />
            </Grid>
          ))}
        </Grid>
      ))}
    </>
  ));
