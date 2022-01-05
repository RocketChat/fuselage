import {
  useMutableCallback,
  useDebouncedState,
} from '@rocket.chat/fuselage-hooks';
import React from 'react';
import { Virtuoso } from 'react-virtuoso';

import { AnimatedVisibility, Box } from '../Box';
import { CheckBox } from '../CheckBox';
import Option from '../Options/Option';
import Tile from '../Tile';

const prevent = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

export const Empty = React.memo(() => <Option color='hint' label='Empty' />);

export const CheckOption = React.memo(
  ({ selected, children: label, ...options }) => (
    <Option label={label} selected={selected} {...options}>
      <CheckBox checked={selected} />
    </Option>
  )
);

export const OptionsPaginated = React.forwardRef(
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
    const OptionsComponentWithData = ({ index, data }) => {
      const { value, label, selected } = data;
      return (
        <OptionComponent
          {...(title && { title: label })}
          role='option'
          label={label}
          onMouseDown={(e) => {
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

OptionsPaginated.AvatarSize = 'x20';
