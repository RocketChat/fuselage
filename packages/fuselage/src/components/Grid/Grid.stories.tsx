import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Table } from '..';
import { Grid, Tile } from '../..';

export default {
  title: 'Containers/Grid_new',
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
    <Table.Head>
      <Table.Row>
        <Table.Cell></Table.Cell>
        <Table.Cell>extra-small</Table.Cell>
        <Table.Cell>small</Table.Cell>
        <Table.Cell>medium</Table.Cell>
        <Table.Cell>large</Table.Cell>
        <Table.Cell>extra-large</Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell is='th' scope='row'>
          Alias
        </Table.Cell>
        <Table.Cell>xs</Table.Cell>
        <Table.Cell>sm</Table.Cell>
        <Table.Cell>md</Table.Cell>
        <Table.Cell>lg</Table.Cell>
        <Table.Cell>xl</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell is='th' scope='row'>
          Minimun width
        </Table.Cell>
        <Table.Cell>320px</Table.Cell>
        <Table.Cell>600px</Table.Cell>
        <Table.Cell>768px</Table.Cell>
        <Table.Cell>1024px</Table.Cell>
        <Table.Cell>1440px</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell is='th' scope='row'>
          Columns
        </Table.Cell>
        <Table.Cell>4</Table.Cell>
        <Table.Cell>8</Table.Cell>
        <Table.Cell>8</Table.Cell>
        <Table.Cell>12</Table.Cell>
        <Table.Cell>12</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell is='th' scope='row'>
          Margins / Gutters
        </Table.Cell>
        <Table.Cell>16px</Table.Cell>
        <Table.Cell>16px</Table.Cell>
        <Table.Cell>24px</Table.Cell>
        <Table.Cell>24px</Table.Cell>
        <Table.Cell>24px</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export const ExtraSmall: ComponentStory<typeof Grid> = () => (
  <Grid>
    {Array.from({ length: 4 })
      .map((_, i) => (i + 1) as 1 | 2 | 3 | 4)
      .map((columns) => (
        <React.Fragment key={columns}>
          <Grid.Item xs={columns}>
            <Tile>xs={columns}</Tile>
          </Grid.Item>
          {4 - columns > 0 && (
            <Grid.Item xs={4 - columns}>
              <Tile>xs={4 - columns}</Tile>
            </Grid.Item>
          )}
        </React.Fragment>
      ))}
  </Grid>
);
ExtraSmall.storyName = 'Extra Small (xs)';

export const Small: ComponentStory<typeof Grid> = () => (
  <Grid>
    {Array.from({ length: 8 })
      .map((_, i) => (i + 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8)
      .map((columns) => (
        <React.Fragment key={columns}>
          <Grid.Item sm={columns}>
            <Tile>sm={columns}</Tile>
          </Grid.Item>
          {8 - columns > 0 && (
            <Grid.Item sm={8 - columns}>
              <Tile>sm={8 - columns}</Tile>
            </Grid.Item>
          )}
        </React.Fragment>
      ))}
  </Grid>
);
Small.storyName = 'Small (sm)';

export const Medium: ComponentStory<typeof Grid> = () => (
  <Grid>
    {Array.from({ length: 8 })
      .map((_, i) => (i + 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8)
      .map((columns) => (
        <React.Fragment key={columns}>
          <Grid.Item md={columns}>
            <Tile>md={columns}</Tile>
          </Grid.Item>
          {8 - columns > 0 && (
            <Grid.Item md={8 - columns}>
              <Tile>md={8 - columns}</Tile>
            </Grid.Item>
          )}
        </React.Fragment>
      ))}
  </Grid>
);
Medium.storyName = 'Medium (md)';

export const Large: ComponentStory<typeof Grid> = () => (
  <Grid>
    {Array.from({ length: 12 })
      .map(
        (_, i) => (i + 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
      )
      .map((columns) => (
        <React.Fragment key={columns}>
          <Grid.Item lg={columns}>
            <Tile>lg={columns}</Tile>
          </Grid.Item>
          {12 - columns > 0 && (
            <Grid.Item lg={12 - columns}>
              <Tile>lg={12 - columns}</Tile>
            </Grid.Item>
          )}
        </React.Fragment>
      ))}
  </Grid>
);
Large.storyName = 'Large (lg)';

export const ExtraLarge: ComponentStory<typeof Grid> = () => (
  <Grid>
    {Array.from({ length: 12 })
      .map(
        (_, i) => (i + 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
      )
      .map((columns) => (
        <React.Fragment key={columns}>
          <Grid.Item xl={columns}>
            <Tile>xl={columns}</Tile>
          </Grid.Item>
          {12 - columns > 0 && (
            <Grid.Item xl={12 - columns}>
              <Tile>xl={12 - columns}</Tile>
            </Grid.Item>
          )}
        </React.Fragment>
      ))}
  </Grid>
);
ExtraLarge.storyName = 'Extra Large (xl)';
