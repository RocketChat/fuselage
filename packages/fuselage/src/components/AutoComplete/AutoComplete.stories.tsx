import { useEffect, useState } from '@storybook/client-api';
import { ComponentMeta } from '@storybook/react';
import React from 'react';

import { AutoComplete } from '../..';

export default {
  title: 'Forms/Inputs/AutoComplete',
  component: AutoComplete,
  parameters: {
    docs: {
      description: {
        component: 'An input for selection of options.',
      },
    },
  },
} as ComponentMeta<typeof AutoComplete>;

export const Example = () => {
  const [options, setOptions] = useState([]);
  const [filter, setFilter] = useState('');
  const [value, setValue] = useState<string | number>('');

  useEffect(() => {
    (async () => {
      const result = await Promise.resolve([]);
      setOptions(result);
    })();
  }, [filter]);
  return (
    <AutoComplete
      value={value}
      filter={filter}
      setFilter={setFilter}
      options={options}
      onChange={setValue}
    />
  );
};
