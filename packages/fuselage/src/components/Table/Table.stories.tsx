import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import type { StoryFn } from '@storybook/react';
import React from 'react';

import {
  Table,
  TableSelection,
  TableSelectionButton,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from './index';
import { CheckBox } from '../..';

export default {
  title: 'Data Display/Table',
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
};

export const Default: StoryFn<typeof Table> = () => (
  <>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align='end'>Calories</TableCell>
          <TableCell align='end'>Fat&nbsp;(g)</TableCell>
          <TableCell align='end'>Carbs&nbsp;(g)</TableCell>
          <TableCell align='end'>Protein&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow action>
          <TableCell is='th' scope='row'>
            Frozen yoghurt
          </TableCell>
          <TableCell align='end'>159</TableCell>
          <TableCell align='end'>6</TableCell>
          <TableCell align='end'>24</TableCell>
          <TableCell align='end'>4</TableCell>
        </TableRow>
        <TableRow>
          <TableCell is='th' scope='row'>
            Ice cream sandwich
          </TableCell>
          <TableCell align='end'>237</TableCell>
          <TableCell align='end'>9</TableCell>
          <TableCell align='end'>37</TableCell>
          <TableCell align='end'>4.3</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </>
);

export const Selected: StoryFn<typeof Table> = () => (
  <>
    <TableSelection text='5 Items selected'>
      <TableSelectionButton>Delete</TableSelectionButton>
    </TableSelection>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <CheckBox aria-label='select all' checked={false} />
          </TableCell>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align='end'>Calories</TableCell>
          <TableCell align='end'>Fat&nbsp;(g)</TableCell>
          <TableCell align='end'>Carbs&nbsp;(g)</TableCell>
          <TableCell align='end'>Protein&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow selected>
          <TableCell>
            <CheckBox aria-label='select frozen yoghurt' checked />
          </TableCell>
          <TableCell is='th' scope='row'>
            Frozen yoghurt
          </TableCell>
          <TableCell align='end'>159</TableCell>
          <TableCell align='end'>6</TableCell>
          <TableCell align='end'>24</TableCell>
          <TableCell align='end'>4</TableCell>
        </TableRow>
        <TableRow selected>
          <TableCell>
            <CheckBox aria-label='select frozen yoghurt' checked />
          </TableCell>
          <TableCell is='th' scope='row'>
            Frozen yoghurt
          </TableCell>
          <TableCell align='end'>159</TableCell>
          <TableCell align='end'>6</TableCell>
          <TableCell align='end'>24</TableCell>
          <TableCell align='end'>4</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <CheckBox aria-label='select frozen yoghurt' checked={false} />
          </TableCell>
          <TableCell is='th' scope='row'>
            Frozen yoghurt
          </TableCell>
          <TableCell align='end'>159</TableCell>
          <TableCell align='end'>6</TableCell>
          <TableCell align='end'>24</TableCell>
          <TableCell align='end'>4</TableCell>
        </TableRow>
        <TableRow selected>
          <TableCell>
            <CheckBox aria-label='select frozen yoghurt' checked />
          </TableCell>
          <TableCell is='th' scope='row'>
            Frozen yoghurt
          </TableCell>
          <TableCell align='end'>159</TableCell>
          <TableCell align='end'>6</TableCell>
          <TableCell align='end'>24</TableCell>
          <TableCell align='end'>4</TableCell>
        </TableRow>
        <TableRow selected>
          <TableCell>
            <CheckBox aria-label='select frozen yoghurt' checked />
          </TableCell>
          <TableCell is='th' scope='row'>
            Frozen yoghurt
          </TableCell>
          <TableCell align='end'>159</TableCell>
          <TableCell align='end'>6</TableCell>
          <TableCell align='end'>24</TableCell>
          <TableCell align='end'>4</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </>
);

export const Striped: StoryFn<typeof Table> = () => (
  <Table fixed striped sticky>
    <TableHead>
      <TableRow>
        <TableCell>Dessert (100g serving)</TableCell>
        <TableCell align='end'>Calories</TableCell>
        <TableCell align='end'>Fat&nbsp;(g)</TableCell>
        <TableCell align='end'>Carbs&nbsp;(g)</TableCell>
        <TableCell align='end'>Protein&nbsp;(g)</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell is='th' scope='row'>
          Frozen yoghurt
        </TableCell>
        <TableCell align='end'>159</TableCell>
        <TableCell align='end'>6</TableCell>
        <TableCell align='end'>24</TableCell>
        <TableCell align='end'>4</TableCell>
      </TableRow>
      <TableRow>
        <TableCell is='th' scope='row'>
          Frozen yoghurt
        </TableCell>
        <TableCell align='end'>159</TableCell>
        <TableCell align='end'>6</TableCell>
        <TableCell align='end'>24</TableCell>
        <TableCell align='end'>4</TableCell>
      </TableRow>
      <TableRow>
        <TableCell is='th' scope='row'>
          Frozen yoghurt
        </TableCell>
        <TableCell align='end'>159</TableCell>
        <TableCell align='end'>6</TableCell>
        <TableCell align='end'>24</TableCell>
        <TableCell align='end'>4</TableCell>
      </TableRow>
      <TableRow>
        <TableCell is='th' scope='row'>
          Frozen yoghurt
        </TableCell>
        <TableCell align='end'>159</TableCell>
        <TableCell align='end'>6</TableCell>
        <TableCell align='end'>24</TableCell>
        <TableCell align='end'>4</TableCell>
      </TableRow>
      <TableRow>
        <TableCell is='th' scope='row'>
          Ice cream sandwich
        </TableCell>
        <TableCell align='end'>237</TableCell>
        <TableCell align='end'>9</TableCell>
        <TableCell align='end'>37</TableCell>
        <TableCell align='end'>4.3</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const Fixed: StoryFn<typeof Table> = () => (
  <Table fixed>
    <TableHead>
      <TableRow>
        <TableCell>Dessert (100g serving)</TableCell>
        <TableCell align='end'>Calories</TableCell>
        <TableCell align='end'>Fat&nbsp;(g)</TableCell>
        <TableCell align='end'>Carbs&nbsp;(g)</TableCell>
        <TableCell align='end'>Protein&nbsp;(g)</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell is='th' scope='row'>
          Frozen yoghurt
        </TableCell>
        <TableCell align='end'>159</TableCell>
        <TableCell align='end'>6</TableCell>
        <TableCell align='end'>24</TableCell>
        <TableCell align='end'>4</TableCell>
      </TableRow>
      <TableRow>
        <TableCell is='th' scope='row'>
          Ice cream sandwich
        </TableCell>
        <TableCell align='end'>237</TableCell>
        <TableCell align='end'>9</TableCell>
        <TableCell align='end'>37</TableCell>
        <TableCell align='end'>4.3</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
