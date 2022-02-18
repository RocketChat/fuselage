import { useEffect, useState } from '@storybook/client-api';
import { ComponentMeta } from '@storybook/react';
import React from 'react';

import { AutoComplete } from '../..';

export default {
  title: 'Inputs/AutoComplete',
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

  const [value, setValue] = useState<unknown[]>([]);

  useEffect(() => {
    (async () => {
      const result = await Promise.resolve([]);
      setOptions(result);
    })();
  }, [filter]);

  const handleValue = (value: unknown, action: 'remove' | undefined): void => {
    if (action) {
      return;
    }
    setValue([]);
  };

  return (
    <AutoComplete
      value={value}
      filter={filter}
      setFilter={setFilter}
      options={options}
      onChange={handleValue}
    />
  );
};
