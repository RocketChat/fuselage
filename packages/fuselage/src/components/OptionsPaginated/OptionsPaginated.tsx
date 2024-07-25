import { useEffectEvent, useDebouncedState } from '@rocket.chat/fuselage-hooks';
import type { ComponentProps, ElementType, Ref, SyntheticEvent } from 'react';
import React, { forwardRef, memo } from 'react';
import { Virtuoso } from 'react-virtuoso';

import { prevent } from '../../helpers/prevent';
import AnimatedVisibility from '../AnimatedVisibility';
import type { BoxProps } from '../Box';
import Box from '../Box';
import { CheckBox } from '../CheckBox';
import Option from '../Option';
import Tile from '../Tile';

type OptionsPaginatedProps = Omit<BoxProps, 'onSelect'> & {
  multiple?: boolean;
  options: { value: unknown; label: string; selected?: boolean }[];
  cursor: number;
  withTitle?: boolean;
  renderItem?: ElementType;
  renderEmpty?: ElementType;
  onSelect: (option: [unknown, string]) => void;
  endReached?: (index: number) => void;
};

export const Empty = memo(() => <Option label='Empty' />);

type CheckOptionProps = ComponentProps<typeof Option>;

export const CheckOption = memo(function CheckOption({
  selected,
  children: label,
  ...options
}: CheckOptionProps) {
  return (
    <Option label={label as string} selected={selected} {...options}>
      <CheckBox checked={selected} />
    </Option>
  );
});

export const OptionsPaginated = forwardRef(
  (
    {
      withTitle,
      multiple,
      renderEmpty: EmptyComponent = Empty,
      options,
      cursor,
      renderItem: OptionComponent = Option,
      onSelect,
      endReached,
      ...props
    }: OptionsPaginatedProps,
    ref: Ref<Element>
  ) => {
    const OptionsComponentWithData = ({
      index,
      data,
    }: {
      index: number;
      data: OptionsPaginatedProps['options'][0];
    }) => {
      const { value, label, selected } = data;
      return (
        <OptionComponent
          {...(withTitle && { title: label })}
          role='option'
          label={label}
          onMouseDown={(e: SyntheticEvent) => {
            prevent(e);
            onSelect([value, label]);
            return false;
          }}
          key={value}
          value={value}
          selected={selected || (multiple !== true && null)}
          focus={cursor === index || null}
        />
      );
    };

    return (
      <Box rcx-options {...props} ref={ref}>
        <Tile padding={0} paddingBlock={'x12'} paddingInline={0} elevation='2'>
          {!options.length ? (
            <EmptyComponent />
          ) : (
            <Virtuoso
              endReached={endReached}
              style={{ height: '144px' }}
              totalCount={options.length}
              data={options}
              // TODO Add a scroller element
              // components={{ Scroller: ScrollableContentWrapper }}
              itemContent={(index, data) => (
                <OptionsComponentWithData index={index} data={data} />
              )}
            />
          )}
        </Tile>
      </Box>
    );
  }
);

export const useVisible = (initialVisibility = AnimatedVisibility.HIDDEN) => {
  const [visible, setVisible] = useDebouncedState(initialVisibility, 10);
  const hide = useEffectEvent(() => setVisible(AnimatedVisibility.HIDDEN));
  const show = useEffectEvent(() => setVisible(AnimatedVisibility.VISIBLE));

  return [visible, hide, show];
};
