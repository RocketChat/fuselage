import type { ElementType, ForwardedRef, SyntheticEvent } from 'react';
import { forwardRef, useLayoutEffect, useMemo, useRef } from 'react';

import { prevent } from '../../helpers/prevent';
import type { BoxProps } from '../Box';
import Box from '../Box';
import Option, { OptionHeader, OptionDivider } from '../Option';
import Scrollable from '../Scrollable';
import Tile from '../Tile';
import Empty from './Empty';
import type { OptionType } from './OptionType';

/** @public */
export type OptionsProps = Omit<BoxProps, 'onSelect'> & {
  multiple?: boolean;
  options: OptionType[];
  cursor: number;
  renderItem?: ElementType;
  renderEmpty?: ElementType;
  onSelect: (option: OptionType) => void;
  customEmpty?: string;
};

const Options = forwardRef(function Options(
  {
    maxHeight = 'x144',
    multiple,
    renderEmpty: EmptyComponent = Empty,
    options,
    cursor,
    renderItem: OptionComponent = Option,
    onSelect,
    customEmpty,
    ...props
  }: OptionsProps,
  ref: ForwardedRef<HTMLElement>
) {
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
});

export default Options;
