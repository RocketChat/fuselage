import type {
  ComponentProps,
  ElementType,
  ReactNode,
  Ref,
  SyntheticEvent,
} from 'react';
import React, {
  forwardRef,
  memo,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';

import { Box } from '../Box';
import Scrollable from '../Scrollable';
import Tile from '../Tile';
import Option from './Option';
import { useCursor } from './useCursor';

export { useCursor };

const prevent = (e: SyntheticEvent) => {
  e.preventDefault();
  e.stopPropagation();
};

export type OptionType = [string | number, ReactNode, boolean?];

type OptionsProps = Omit<ComponentProps<typeof Box>, 'onSelect'> & {
  multiple?: boolean;
  options: Array<OptionType>;
  cursor: number;
  renderItem?: ElementType;
  renderEmpty?: ElementType;
  onSelect: (option: OptionType) => void;
  customEmpty?: string;
};

export const Empty = memo(({ customEmpty }: { customEmpty: string }) => (
  <Option label={customEmpty || 'Empty'} />
));

export const Options = forwardRef(
  (
    {
      maxHeight = '144px',
      multiple,
      renderEmpty: EmptyComponent = Empty,
      options,
      cursor,
      renderItem: OptionComponent = Option,
      onSelect,
      customEmpty,
      children,
      ...props
    }: OptionsProps,
    ref: Ref<HTMLElement>
  ) => {
    const liRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
      if (!liRef.current) {
        return;
      }
      const { current } = liRef;
      const li = current?.querySelector<HTMLLIElement>('.rcx-option--focus');
      if (!li) {
        return;
      }
      if (
        li.offsetTop + li.clientHeight >
          current.scrollTop + current.clientHeight ||
        li.offsetTop - li.clientHeight < current.scrollTop
      ) {
        current.scrollTop = li.offsetTop;
      }
    }, [cursor]);

    const optionsMemoized = useMemo(
      () =>
        options?.map(([value, label, selected], i) => (
          <OptionComponent
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
            focus={cursor === i || null}
          />
        )),
      [options, multiple, cursor, onSelect]
    );

    return (
      <Box rcx-options {...props} ref={ref}>
        <Tile padding={0} paddingBlock={'x12'} paddingInline={0} elevation='2'>
          <Scrollable vertical smooth>
            <Tile
              ref={liRef}
              elevation='0'
              padding='none'
              maxHeight={maxHeight}
              onMouseDown={prevent}
              onClick={prevent}
              is='ol'
              aria-multiselectable={multiple || true}
              role='listbox'
              aria-activedescendant={
                options?.[cursor]?.[0]
                  ? String(options?.[cursor]?.[0])
                  : undefined
              }
            >
              {options?.length ? optionsMemoized : children}
              {!options?.length && !children && (
                <EmptyComponent customEmpty={customEmpty} />
              )}
            </Tile>
          </Scrollable>
        </Tile>
      </Box>
    );
  }
);
