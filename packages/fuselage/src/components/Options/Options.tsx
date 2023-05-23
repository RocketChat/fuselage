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

import { prevent } from '../../helpers/prevent';
import Box from '../Box';
import Option, { OptionHeader, OptionDivider } from '../Option';
import Scrollable from '../Scrollable';
import Tile from '../Tile';
import { useCursor } from './useCursor';

export { useCursor };

export type OptionType = [
  value: string | number,
  label: ReactNode,
  selected?: boolean,
  disabled?: boolean,
  type?: 'heading' | 'divider' | 'option',
  url?: string
];

type OptionsProps = Omit<ComponentProps<typeof Box>, 'onSelect'> & {
  multiple?: boolean;
  options: OptionType[];
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
                  onMouseDown={(e: SyntheticEvent) => {
                    if (disabled) {
                      return;
                    }
                    prevent(e);
                    onSelect([value, label, selected, disabled, type, url]);
                    return false;
                  }}
                  key={value}
                  value={value}
                  selected={selected || (multiple !== true && null)}
                  disabled={disabled}
                  focus={cursor === i || null}
                />
              );
          }
        }),
      [options, multiple, cursor, onSelect, OptionComponent]
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
              {!options.length && <EmptyComponent customEmpty={customEmpty} />}
              {optionsMemoized}
            </Tile>
          </Scrollable>
        </Tile>
      </Box>
    );
  }
);
export const OptionContainer = forwardRef<
  HTMLElement,
  ComponentProps<typeof Box>
>(({ children, ...props }, ref) => (
  <Box rcx-options>
    <Tile padding={0} paddingBlock={'x12'} paddingInline={0}>
      <Scrollable vertical smooth>
        <Tile
          ref={ref}
          elevation='0'
          padding='none'
          maxHeight='x240'
          // onMouseDown={prevent}
          // onClick={prevent}
          // is='ol'
          // aria-multiselectable={multiple || true}
          // role='listbox'
          {...props}
        >
          {children}
        </Tile>
      </Scrollable>
    </Tile>
  </Box>
));
