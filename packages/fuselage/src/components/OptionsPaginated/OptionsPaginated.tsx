import type { ComponentProps, ElementType, Ref, SyntheticEvent } from 'react';
import React, { forwardRef } from 'react';
import { Virtuoso } from 'react-virtuoso';

import { prevent } from '../../helpers/prevent';
import Box from '../Box';
import Option from '../Option';
import Tile from '../Tile';
import Empty from './Empty';

type OptionsPaginatedProps = Omit<ComponentProps<typeof Box>, 'onSelect'> & {
  multiple?: boolean;
  options: { value: unknown; label: string; selected?: boolean }[];
  cursor: number;
  renderItem?: ElementType;
  renderEmpty?: ElementType;
  onSelect: (option: [unknown, string]) => void;
  endReached?: (index: number) => void;
};

const OptionsPaginated = forwardRef(function OptionsPaginated(
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
  }: OptionsPaginatedProps,
  ref: Ref<Element>
) {
  return (
    <Box rcx-options {...props} ref={ref}>
      <Tile padding={0} paddingBlock='x12' paddingInline={0} elevation='2'>
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
            itemContent={(index, { value, label, selected }) => (
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
            )}
          />
        )}
      </Tile>
    </Box>
  );
});

export default OptionsPaginated;
