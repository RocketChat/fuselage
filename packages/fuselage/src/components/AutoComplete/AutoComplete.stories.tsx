import { useEffect, useState } from '@storybook/client-api';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { AutoComplete } from '../..';

export default {
  title: 'FORMS/Inputs/AutoComplete_new',
  component: AutoComplete,
  parameters: {
    docs: {
      description: {
        component: 'An input for selection of options.',
      },
    },
  },
} as ComponentMeta<typeof AutoComplete>;

const Template: ComponentStory<typeof AutoComplete> = () => {
  const [options, setOptions] = useState([]);
  const [filter, setFilter] = useState('');
  const [value, setValue] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await Promise.resolve([]);
      setOptions(result);
    })();
  }, [filter]);
  return (
    <AutoComplete
      {...{ value, filter, setFilter, options, onChange: setValue }}
    />
  );
};

export const Example = Template.bind({});
