import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import { ComponentStory } from '@storybook/react';
import React from 'react';

import { CheckBox } from '../..';
import {
  Table,
  TableSelection,
  TableSelectionButton,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from './index';

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

export const Default = () => (
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
        <TableRow hasAction>
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

export const Selected: ComponentStory<typeof Table> = () => (
  <>
    <TableSelection text='5 Items selected'>
      <TableSelectionButton>Delete</TableSelectionButton>
    </TableSelection>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <CheckBox checked={false} />
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
            <CheckBox checked />
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
            <CheckBox checked />
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
            <CheckBox checked={false} />
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
            <CheckBox checked />
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
            <CheckBox checked />
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

export const Striped: ComponentStory<typeof Table> = () => (
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

export const Fixed: ComponentStory<typeof Table> = () => (
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
