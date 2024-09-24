import type { Meta, StoryFn } from '@storybook/react';

import { CheckBox } from '../CheckBox';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';
import {
  TableSelection,
  TableSelectionButton,
  TableSelectionButtonGroup,
} from './TableSelection';

export default {
  title: 'Data Display/Table',
  component: Table,
  subcomponents: {
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableSelection,
    TableSelectionButton,
    TableSelectionButtonGroup,
  },
} satisfies Meta<typeof Table>;

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

export const WithSelection: StoryFn<typeof Table> = () => (
  <>
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
    <TableSelection text='5 Items selected'>
      <TableSelectionButtonGroup>
        <TableSelectionButton>Delete</TableSelectionButton>
        <TableSelectionButton>Cancel</TableSelectionButton>
      </TableSelectionButtonGroup>
    </TableSelection>
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
