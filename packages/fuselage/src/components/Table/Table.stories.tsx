import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Table, CheckBox } from '../..';

export default {
  title: 'Data Display/Table_new',
  component: Table,
  parameters: {
    docs: {
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
} as ComponentMeta<typeof Table>;

export const Default: ComponentStory<typeof Table> = () => (
  <>
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Dessert (100g serving)</Table.Cell>
          <Table.Cell align='end'>Calories</Table.Cell>
          <Table.Cell align='end'>Fat&nbsp;(g)</Table.Cell>
          <Table.Cell align='end'>Carbs&nbsp;(g)</Table.Cell>
          <Table.Cell align='end'>Protein&nbsp;(g)</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row hasAction>
          <Table.Cell is='th' scope='row'>
            Frozen yoghurt
          </Table.Cell>
          <Table.Cell align='end'>159</Table.Cell>
          <Table.Cell align='end'>6</Table.Cell>
          <Table.Cell align='end'>24</Table.Cell>
          <Table.Cell align='end'>4</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell is='th' scope='row'>
            Ice cream sandwich
          </Table.Cell>
          <Table.Cell align='end'>237</Table.Cell>
          <Table.Cell align='end'>9</Table.Cell>
          <Table.Cell align='end'>37</Table.Cell>
          <Table.Cell align='end'>4.3</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </>
);

export const Selected: ComponentStory<typeof Table> = () => (
  <>
    <Table.Selection text='5 Items selected'>
      <Table.Selection.Button>Delete</Table.Selection.Button>
    </Table.Selection>
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell>
            <CheckBox checked={false} />
          </Table.Cell>
          <Table.Cell>Dessert (100g serving)</Table.Cell>
          <Table.Cell align='end'>Calories</Table.Cell>
          <Table.Cell align='end'>Fat&nbsp;(g)</Table.Cell>
          <Table.Cell align='end'>Carbs&nbsp;(g)</Table.Cell>
          <Table.Cell align='end'>Protein&nbsp;(g)</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row selected>
          <Table.Cell>
            <CheckBox checked />
          </Table.Cell>
          <Table.Cell is='th' scope='row'>
            Frozen yoghurt
          </Table.Cell>
          <Table.Cell align='end'>159</Table.Cell>
          <Table.Cell align='end'>6</Table.Cell>
          <Table.Cell align='end'>24</Table.Cell>
          <Table.Cell align='end'>4</Table.Cell>
        </Table.Row>
        <Table.Row selected>
          <Table.Cell>
            <CheckBox checked />
          </Table.Cell>
          <Table.Cell is='th' scope='row'>
            Frozen yoghurt
          </Table.Cell>
          <Table.Cell align='end'>159</Table.Cell>
          <Table.Cell align='end'>6</Table.Cell>
          <Table.Cell align='end'>24</Table.Cell>
          <Table.Cell align='end'>4</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <CheckBox checked={false} />
          </Table.Cell>
          <Table.Cell is='th' scope='row'>
            Frozen yoghurt
          </Table.Cell>
          <Table.Cell align='end'>159</Table.Cell>
          <Table.Cell align='end'>6</Table.Cell>
          <Table.Cell align='end'>24</Table.Cell>
          <Table.Cell align='end'>4</Table.Cell>
        </Table.Row>
        <Table.Row selected>
          <Table.Cell>
            <CheckBox checked />
          </Table.Cell>
          <Table.Cell is='th' scope='row'>
            Frozen yoghurt
          </Table.Cell>
          <Table.Cell align='end'>159</Table.Cell>
          <Table.Cell align='end'>6</Table.Cell>
          <Table.Cell align='end'>24</Table.Cell>
          <Table.Cell align='end'>4</Table.Cell>
        </Table.Row>
        <Table.Row selected>
          <Table.Cell>
            <CheckBox checked />
          </Table.Cell>
          <Table.Cell is='th' scope='row'>
            Frozen yoghurt
          </Table.Cell>
          <Table.Cell align='end'>159</Table.Cell>
          <Table.Cell align='end'>6</Table.Cell>
          <Table.Cell align='end'>24</Table.Cell>
          <Table.Cell align='end'>4</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </>
);

export const Striped: ComponentStory<typeof Table> = () => (
  <Table fixed striped sticky>
    <Table.Head>
      <Table.Row>
        <Table.Cell>Dessert (100g serving)</Table.Cell>
        <Table.Cell align='end'>Calories</Table.Cell>
        <Table.Cell align='end'>Fat&nbsp;(g)</Table.Cell>
        <Table.Cell align='end'>Carbs&nbsp;(g)</Table.Cell>
        <Table.Cell align='end'>Protein&nbsp;(g)</Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell is='th' scope='row'>
          Frozen yoghurt
        </Table.Cell>
        <Table.Cell align='end'>159</Table.Cell>
        <Table.Cell align='end'>6</Table.Cell>
        <Table.Cell align='end'>24</Table.Cell>
        <Table.Cell align='end'>4</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell is='th' scope='row'>
          Frozen yoghurt
        </Table.Cell>
        <Table.Cell align='end'>159</Table.Cell>
        <Table.Cell align='end'>6</Table.Cell>
        <Table.Cell align='end'>24</Table.Cell>
        <Table.Cell align='end'>4</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell is='th' scope='row'>
          Frozen yoghurt
        </Table.Cell>
        <Table.Cell align='end'>159</Table.Cell>
        <Table.Cell align='end'>6</Table.Cell>
        <Table.Cell align='end'>24</Table.Cell>
        <Table.Cell align='end'>4</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell is='th' scope='row'>
          Frozen yoghurt
        </Table.Cell>
        <Table.Cell align='end'>159</Table.Cell>
        <Table.Cell align='end'>6</Table.Cell>
        <Table.Cell align='end'>24</Table.Cell>
        <Table.Cell align='end'>4</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell is='th' scope='row'>
          Ice cream sandwich
        </Table.Cell>
        <Table.Cell align='end'>237</Table.Cell>
        <Table.Cell align='end'>9</Table.Cell>
        <Table.Cell align='end'>37</Table.Cell>
        <Table.Cell align='end'>4.3</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export const Fixed: ComponentStory<typeof Table> = () => (
  <Table fixed>
    <Table.Head>
      <Table.Row>
        <Table.Cell>Dessert (100g serving)</Table.Cell>
        <Table.Cell align='end'>Calories</Table.Cell>
        <Table.Cell align='end'>Fat&nbsp;(g)</Table.Cell>
        <Table.Cell align='end'>Carbs&nbsp;(g)</Table.Cell>
        <Table.Cell align='end'>Protein&nbsp;(g)</Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell is='th' scope='row'>
          Frozen yoghurt
        </Table.Cell>
        <Table.Cell align='end'>159</Table.Cell>
        <Table.Cell align='end'>6</Table.Cell>
        <Table.Cell align='end'>24</Table.Cell>
        <Table.Cell align='end'>4</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell is='th' scope='row'>
          Ice cream sandwich
        </Table.Cell>
        <Table.Cell align='end'>237</Table.Cell>
        <Table.Cell align='end'>9</Table.Cell>
        <Table.Cell align='end'>37</Table.Cell>
        <Table.Cell align='end'>4.3</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);
