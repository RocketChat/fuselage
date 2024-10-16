import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

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

export const WithSelection: StoryFn<typeof Table> = () => {
  const [checkedAll, setCheckedAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
  });

  const handleCheckBoxChange = (item: string) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const handleAllCheckBoxChange = () => {
    const newCheckedAll = !checkedAll;
    setCheckedAll(newCheckedAll);
    setCheckedItems({
      item1: newCheckedAll,
      item2: newCheckedAll,
      item3: newCheckedAll,
      item4: newCheckedAll,
      item5: newCheckedAll,
    });
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <CheckBox
                aria-label='select all'
                checked={checkedAll}
                onChange={handleAllCheckBoxChange}
              />
            </TableCell>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align='end'>Calories</TableCell>
            <TableCell align='end'>Fat&nbsp;(g)</TableCell>
            <TableCell align='end'>Carbs&nbsp;(g)</TableCell>
            <TableCell align='end'>Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow selected={checkedItems.item1}>
            <TableCell>
              <CheckBox
                aria-label='select item1'
                checked={checkedItems.item1}
                onChange={() => handleCheckBoxChange('item1')}
              />
            </TableCell>
            <TableCell is='th' scope='row'>
              Frozen yoghurt
            </TableCell>
            <TableCell align='end'>159</TableCell>
            <TableCell align='end'>6</TableCell>
            <TableCell align='end'>24</TableCell>
            <TableCell align='end'>4</TableCell>
          </TableRow>
          <TableRow selected={checkedItems.item2}>
            <TableCell>
              <CheckBox
                aria-label='select item2'
                checked={checkedItems.item2}
                onChange={() => handleCheckBoxChange('item2')}
              />
            </TableCell>
            <TableCell is='th' scope='row'>
              Frozen yoghurt
            </TableCell>
            <TableCell align='end'>159</TableCell>
            <TableCell align='end'>6</TableCell>
            <TableCell align='end'>24</TableCell>
            <TableCell align='end'>4</TableCell>
          </TableRow>
          <TableRow selected={checkedItems.item3}>
            <TableCell>
              <CheckBox
                aria-label='select item3'
                checked={checkedItems.item3}
                onChange={() => handleCheckBoxChange('item3')}
              />
            </TableCell>
            <TableCell is='th' scope='row'>
              Frozen yoghurt
            </TableCell>
            <TableCell align='end'>159</TableCell>
            <TableCell align='end'>6</TableCell>
            <TableCell align='end'>24</TableCell>
            <TableCell align='end'>4</TableCell>
          </TableRow>
          <TableRow selected={checkedItems.item4}>
            <TableCell>
              <CheckBox
                aria-label='select item4'
                checked={checkedItems.item4}
                onChange={() => handleCheckBoxChange('item4')}
              />
            </TableCell>
            <TableCell is='th' scope='row'>
              Frozen yoghurt
            </TableCell>
            <TableCell align='end'>159</TableCell>
            <TableCell align='end'>6</TableCell>
            <TableCell align='end'>24</TableCell>
            <TableCell align='end'>4</TableCell>
          </TableRow>
          <TableRow selected={checkedItems.item5}>
            <TableCell>
              <CheckBox
                aria-label='select item5'
                checked={checkedItems.item5}
                onChange={() => handleCheckBoxChange('item5')}
              />
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
};
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
