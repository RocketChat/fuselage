import {
  useMutableCallback,
  useDebouncedState,
} from '@rocket.chat/fuselage-hooks';
import React, {
  ComponentProps,
  ElementType,
  forwardRef,
  ForwardRefExoticComponent,
  memo,
  Ref,
  SyntheticEvent,
} from 'react';
import { Virtuoso } from 'react-virtuoso';

import { AnimatedVisibility, Box } from '../Box';
import { CheckBox } from '../CheckBox';
import Option from '../Options/Option';
import Tile from '../Tile';

const prevent = (e: SyntheticEvent) => {
  e.preventDefault();
  e.stopPropagation();
};

type OptionsPaginatedProps = Omit<ComponentProps<typeof Box>, 'onSelect'> & {
  multiple?: boolean;
  options: { value: unknown; label: string; selected?: boolean }[];
  cursor: number;
  renderItem?: ElementType;
  renderEmpty?: ElementType;
  onSelect: (option: [unknown, string]) => void;
};

export const Empty = memo(() => <Option label='Empty' />);

export const CheckOption: ForwardRefExoticComponent<OptionsPaginatedProps> =
  memo(function CheckOption({ selected, children: label, ...options }) {
    return (
      <Option label={label as string} selected={selected} {...options}>
        <CheckBox checked={selected} />
      </Option>
    );
  });

export const OptionsPaginated = forwardRef<Ref<Element>, OptionsPaginatedProps>(
  (
    {
      title,
      multiple,
      renderEmpty: EmptyComponent = Empty,
      options,
      cursor,
      renderItem: OptionComponent = Option,
      onSelect,
      endReached,
      ...props
    },
    ref
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
          {...(title && { title: label })}
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
  const hide = useMutableCallback(() => setVisible(AnimatedVisibility.HIDDEN));
  const show = useMutableCallback(() => setVisible(AnimatedVisibility.VISIBLE));

  return [visible, hide, show];
};
