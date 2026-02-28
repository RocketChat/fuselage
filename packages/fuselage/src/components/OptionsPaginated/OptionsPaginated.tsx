import {
  useStableCallback,
  useDebouncedState,
} from '@rocket.chat/fuselage-hooks';
import type {
  ComponentType,
  ElementType,
  MouseEvent,
  ReactNode,
  SyntheticEvent,
} from 'react';
import { forwardRef, memo } from 'react';
import { Virtuoso } from 'react-virtuoso';

import { prevent } from '../../helpers/prevent';
import { AnimatedVisibility } from '../AnimatedVisibility';
import { Box, type BoxProps } from '../Box';
import { CheckBox } from '../CheckBox';
import type { OptionProps } from '../Option';
import { Option } from '../Option';
import { Tile } from '../Tile';

export type OptionsPaginatedProps = Omit<BoxProps, 'onSelect'> & {
  multiple?: boolean;
  options: { value: string | number; label: string; selected?: boolean }[];
  cursor: number;
  withTitle?: boolean;
  renderItem?: ComponentType<{
    role?: string;
    label?: ReactNode;
    title?: string;
    selected?: boolean;
    index?: number;
    focus?: boolean;
    value?: string | number;
    onMouseDown?: (e: MouseEvent<HTMLElement>) => void;
  }>;
  renderEmpty?: ElementType<object>;
  onSelect: (option: [unknown, string]) => void;
  endReached?: (start?: number | undefined, end?: number | undefined) => void;
};

export const Empty = memo(() => <Option label='Empty' />);

type CheckOptionProps = OptionProps;

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

/**
 * An input for selection of options.
 */
export const OptionsPaginated = forwardRef<Element, OptionsPaginatedProps>(
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
    },
    ref,
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
          index={index}
          role='option'
          label={label}
          onMouseDown={(e: SyntheticEvent) => {
            prevent(e);
            onSelect([value, label]);
            return false;
          }}
          key={value}
          value={value}
          selected={selected ? true : undefined}
          focus={cursor === index ? true : undefined}
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
  },
);

export const useVisible = (initialVisibility = AnimatedVisibility.HIDDEN) => {
  const [visible, setVisible] = useDebouncedState(initialVisibility, 10);
  const hide = useStableCallback(() => setVisible(AnimatedVisibility.HIDDEN));
  const show = useStableCallback(() => setVisible(AnimatedVisibility.VISIBLE));

  return [visible, hide, show];
};
