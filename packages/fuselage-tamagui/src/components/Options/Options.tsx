import type {
  ComponentProps,
  ElementType,
  ReactNode,
  Ref,
  SyntheticEvent,
} from 'react';
import {
  forwardRef,
  memo,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { YStack, ScrollView, Text } from 'tamagui';

import { Option, OptionHeader, OptionDivider } from '../Option';

export type OptionType = [
  value: string | number,
  label: ReactNode,
  selected?: boolean,
  disabled?: boolean,
  type?: 'heading' | 'divider' | 'option',
  url?: string
];

type OptionsProps = Omit<ComponentProps<typeof YStack>, 'onSelect'> & {
  multiple?: boolean;
  options: OptionType[];
  cursor: number;
  renderItem?: ElementType;
  renderEmpty?: ElementType;
  onSelect: (option: OptionType) => void;
  customEmpty?: string;
};

export const Empty = memo(({ customEmpty }: { customEmpty: string }) => (
  <Text padding='$2' color='$color'>
    {customEmpty || 'Empty'}
  </Text>
));

export const Options = forwardRef(
  (
    {
      maxHeight = 144,
      multiple,
      renderEmpty: EmptyComponent = Empty,
      options,
      cursor,
      renderItem: OptionComponent = Option,
      onSelect,
      customEmpty,
      ...props
    }: OptionsProps,
    ref: Ref<YStack>
  ) => {
    const liRef = useRef<ScrollView>(null);

    useLayoutEffect(() => {
      if (!liRef.current) {
        return;
      }
      // Tamagui doesn't have a direct equivalent of querySelector, so we'll need to handle this differently.
      // For now, we'll just scroll to the top.
      liRef.current.scrollTo({ y: 0, animated: true });
    }, [cursor]);

    const optionsMemoized = useMemo(
      () =>
        options?.map(([value, label, selected, disabled, type, url], i) => {
          switch (type) {
            case 'heading':
              return <OptionHeader key={value}>{label}</OptionHeader>;
            case 'divider':
              return <OptionDivider key={value} />;
            default:
              return (
                <OptionComponent
                  role='option'
                  label={label}
                  onPress={(e: SyntheticEvent) => {
                    if (disabled) {
                      return;
                    }
                    e.preventDefault();
                    onSelect([value, label, selected, disabled, type, url]);
                    return false;
                  }}
                  key={value}
                  value={value}
                  selected={selected || (multiple !== true && null)}
                  disabled={disabled}
                  // focus={cursor === i || null}
                />
              );
          }
        }),
      [options, multiple, cursor, onSelect, OptionComponent]
    );

    return (
      <YStack {...props} ref={ref}>
        <ScrollView
          ref={liRef}
          maxHeight={maxHeight}
          showsVerticalScrollIndicator
        >
          {!options.length && <EmptyComponent customEmpty={customEmpty} />}
          {optionsMemoized}
        </ScrollView>
      </YStack>
    );
  }
);
