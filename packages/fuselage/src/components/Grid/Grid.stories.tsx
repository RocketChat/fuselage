import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Table, TableBody, TableCell, TableHead, TableRow } from '..';
import { Grid, Tile } from '../..';

export default {
  title: 'Containers/Grid',
  component: Grid,
  parameters: {
    docs: {
      description: {
        component:
          'A container for grouping fields that semantically share a common data context.',
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <ArgsTable />
          <Stories title={''} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = () => (
  <Grid>
    <Grid.Item>
      <Tile />
    </Grid.Item>
    <Grid.Item>
      <Tile />
    </Grid.Item>
    <Grid.Item>
      <Tile />
    </Grid.Item>
  </Grid>
);

export const Default: ComponentStory<typeof Grid> = Template.bind({});

export const Breakpoints = () => (
  <Table fixed striped sticky>
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        <TableCell>extra-small</TableCell>
        <TableCell>small</TableCell>
        <TableCell>medium</TableCell>
        <TableCell>large</TableCell>
        <TableCell>extra-large</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell is='th' scope='row'>
          Alias
        </TableCell>
        <TableCell>xs</TableCell>
        <TableCell>sm</TableCell>
        <TableCell>md</TableCell>
        <TableCell>lg</TableCell>
        <TableCell>xl</TableCell>
      </TableRow>
      <TableRow>
        <TableCell is='th' scope='row'>
          Minimun width
        </TableCell>
        <TableCell>320px</TableCell>
        <TableCell>600px</TableCell>
        <TableCell>768px</TableCell>
        <TableCell>1024px</TableCell>
        <TableCell>1440px</TableCell>
      </TableRow>
      <TableRow>
        <TableCell is='th' scope='row'>
          Columns
        </TableCell>
        <TableCell>4</TableCell>
        <TableCell>8</TableCell>
        <TableCell>8</TableCell>
        <TableCell>12</TableCell>
        <TableCell>12</TableCell>
      </TableRow>
      <TableRow>
        <TableCell is='th' scope='row'>
          Margins / Gutters
        </TableCell>
        <TableCell>16px</TableCell>
        <TableCell>16px</TableCell>
        <TableCell>24px</TableCell>
        <TableCell>24px</TableCell>
        <TableCell>24px</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const ExtraSmall: ComponentStory<typeof Grid> = () => {
  type ColumnsType = 1 | 2 | 3 | 4;
  return (
    <Grid>
      {Array.from({ length: 4 })
        .map((_, i) => (i + 1) as ColumnsType)
        .map((columns) => (
          <React.Fragment key={columns}>
            <Grid.Item xs={columns}>
              <Tile>xs={columns}</Tile>
            </Grid.Item>
            {4 - columns > 0 && (
              <Grid.Item xs={(4 - columns) as ColumnsType}>
                <Tile>xs={4 - columns}</Tile>
              </Grid.Item>
            )}
          </React.Fragment>
        ))}
    </Grid>
  );
};
ExtraSmall.storyName = 'Extra Small (xs)';

export const Small: ComponentStory<typeof Grid> = () => {
  type ColumnsType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  return (
    <Grid>
      {Array.from({ length: 8 })
        .map((_, i) => (i + 1) as ColumnsType)
        .map((columns) => (
          <React.Fragment key={columns}>
            <Grid.Item sm={columns}>
              <Tile>sm={columns}</Tile>
            </Grid.Item>
            {8 - columns > 0 && (
              <Grid.Item sm={(8 - columns) as ColumnsType}>
                <Tile>sm={8 - columns}</Tile>
              </Grid.Item>
            )}
          </React.Fragment>
        ))}
    </Grid>
  );
};
Small.storyName = 'Small (sm)';

export const Medium: ComponentStory<typeof Grid> = () => {
  type ColumnsType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  return (
    <Grid>
      {Array.from({ length: 8 })
        .map((_, i) => (i + 1) as ColumnsType)
        .map((columns) => (
          <React.Fragment key={columns}>
            <Grid.Item md={columns}>
              <Tile>md={columns}</Tile>
            </Grid.Item>
            {8 - columns > 0 && (
              <Grid.Item md={(8 - columns) as ColumnsType}>
                <Tile>md={8 - columns}</Tile>
              </Grid.Item>
            )}
          </React.Fragment>
        ))}
    </Grid>
  );
};
Medium.storyName = 'Medium (md)';

export const Large: ComponentStory<typeof Grid> = () => {
  type ColumnsType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  return (
    <Grid>
      {Array.from({ length: 12 })
        .map((_, i) => (i + 1) as ColumnsType)
        .map((columns) => (
          <React.Fragment key={columns}>
            <Grid.Item lg={columns}>
              <Tile>lg={columns}</Tile>
            </Grid.Item>
            {12 - columns > 0 && (
              <Grid.Item lg={(12 - columns) as ColumnsType}>
                <Tile>lg={12 - columns}</Tile>
              </Grid.Item>
            )}
          </React.Fragment>
        ))}
    </Grid>
  );
};
Large.storyName = 'Large (lg)';

export const ExtraLarge: ComponentStory<typeof Grid> = () => {
  type ColumnsType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  return (
    <Grid>
      {Array.from({ length: 12 })
        .map((_, i) => (i + 1) as ColumnsType)
        .map((columns) => (
          <React.Fragment key={columns}>
            <Grid.Item xl={columns}>
              <Tile>xl={columns}</Tile>
            </Grid.Item>
            {12 - columns > 0 && (
              <Grid.Item xl={(12 - columns) as ColumnsType}>
                <Tile>xl={12 - columns}</Tile>
              </Grid.Item>
            )}
          </React.Fragment>
        ))}
    </Grid>
  );
};
ExtraLarge.storyName = 'Extra Large (xl)';
