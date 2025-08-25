import type { Meta, StoryFn } from "@storybook/react"
import { AutoComplete } from "./AutoComplete"
import { useState } from "react"
import { XStack, YStack, Text } from 'tamagui'

const meta: Meta<typeof AutoComplete> = {
  title: "INPUTS/AutoComplete",
  component: AutoComplete,
  parameters:{
    layout:"centered",
  },
  tags: ["autodocs"],
};

export default meta;

const sampleOptions = [
  { value: 'test1', label: 'test1' },
  { value: 'test2', label: 'test2' },
  { value: 'test3', label: 'test3' },
  { value: 'test4', label: 'test4' },
  { value: 'test5', label: 'test5' },
];

export const Default: StoryFn<typeof AutoComplete> = () => {
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <YStack space="$4" width={400}>
      <AutoComplete
        value={selected}
        filter={filter}
        setFilter={setFilter}
        options={sampleOptions}
        placeholder="Search..."
        onChange={setSelected}
      />
    </YStack>
  );
};

export const CustomSelected: StoryFn<typeof AutoComplete> = () => {
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState<string[]>(['test1']);

  return (
    <YStack space="$4" width={400}>
      <AutoComplete
        value={selected}
        filter={filter}
        setFilter={setFilter}
        options={sampleOptions}
        placeholder="Search..."
        onChange={setSelected}
      />
    </YStack>
  );
};

export const Multiple: StoryFn<typeof AutoComplete> = () => {
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState<string[]>(['test1', 'test3']);

  return (
    <YStack space="$4" width={400}>
      <AutoComplete
        value={selected}
        filter={filter}
        setFilter={setFilter}
        options={sampleOptions}
        placeholder="Search..."
        onChange={setSelected}
        multiple={true}
      />
    </YStack>
  );
};

export const MultipleCustomSelected: StoryFn<typeof AutoComplete> = () => {
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState<string[]>(['test1', 'test3']);

  return (
    <YStack space="$4" width={400}>
      <AutoComplete
        value={selected}
        filter={filter}
        setFilter={setFilter}
        options={sampleOptions}
        placeholder="Search..."
        onChange={setSelected}
        multiple={true}
      />
    </YStack>
  );
};

export const CustomItem: StoryFn<typeof AutoComplete> = () => {
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <YStack space="$4" width={400}>
      <AutoComplete
        value={selected}
        filter={filter}
        setFilter={setFilter}
        options={sampleOptions}
        placeholder="Search..."
        onChange={setSelected}
      />
    </YStack>
  );
};

export const WithPlaceholder: StoryFn<typeof AutoComplete> = () => {
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <YStack space="$4" width={400}>
      <AutoComplete
        value={selected}
        filter={filter}
        setFilter={setFilter}
        options={sampleOptions}
        placeholder="Search..."
        onChange={setSelected}
      />
    </YStack>
  );
};

export const Disabled: StoryFn<typeof AutoComplete> = () => {
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState<string[]>(['test1']);

  return (
    <YStack space="$4" width={400}>
      <AutoComplete
        value={selected}
        filter={filter}
        setFilter={setFilter}
        options={sampleOptions}
        placeholder="Search..."
        onChange={setSelected}
        disabled={true}
      />
    </YStack>
  );
};
