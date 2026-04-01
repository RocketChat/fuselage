import {
  useMergedRefs,
  useStableCallback,
  useResizeObserver,
  useOutsideClick,
} from '@rocket.chat/fuselage-hooks';
import type { DependencyList, ElementType, ReactNode } from 'react';
import { useState, useRef, useEffect, forwardRef, useMemo } from 'react';

import { styled } from '@tamagui/core';

import { isForwardRefType } from '../../helpers/isForwardRefType';
import { RcxView, RcxText } from '../../primitives';
import { AnimatedVisibility } from '../AnimatedVisibility';
import type { BoxProps } from '../Box';
import { Icon, type IconProps } from '../Icon';
import type { OptionType } from '../Options';
import { Options, useCursor } from '../Options';
import { PositionAnimated } from '../PositionAnimated';

import SelectAddon from './SelectAddon';
import type { SelectAnchorParams } from './SelectAnchorParams';
import SelectFocus from './SelectFocus';

export type SelectOption = readonly [
  value: string,
  label: string,
  selected?: boolean,
];

// .rcx-select — extends %rcx-input-box which extends %input
// This is the outer container that provides border/bg/focus states
const SelectFrame = styled(RcxView, {
  name: 'SelectLegacy',

  position: 'relative',
  display: 'inline-flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  flexGrow: 1,

  minWidth: 144,
  minHeight: 40,

  paddingBlock: 8,
  paddingInline: 15, // 16 - 1px border

  // %input styles
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$strokeLight',
  borderRadius: '$x4',
  backgroundColor: '$surfaceLight',
  boxShadow: 'none',

  cursor: 'pointer',

  hoverStyle: {
    borderColor: '$strokeLight',
  },

  variants: {
    invalid: {
      true: {
        borderColor: '$strokeError',
        hoverStyle: {
          borderColor: '$strokeError',
        },
      },
    },
    focused: {
      true: {
        borderColor: '$strokeHighlight',
        boxShadow: '0 0 0 2px var(--shadowHighlight)',
      },
    },
  } as const,

  disabledStyle: {
    borderColor: '$strokeLight',
    backgroundColor: '$surfaceDisabled',
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
});

// .rcx-select__wrapper — inner flex row container
const SelectWrapperFrame = styled(RcxView, {
  name: 'SelectWrapper',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexGrow: 1,
  flexShrink: 1,

  minWidth: 0,

  userSelect: 'none',
  whiteSpace: 'nowrap',
  opacity: 1,

  variants: {
    hidden: {
      true: {},
    },
  } as const,
});

// .rcx-select__item — text display of selected value
const SelectItemText = styled(RcxText, {
  name: 'SelectItem',

  flexGrow: 1,
  marginInline: 4,

  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  letterSpacing: '$p2',

  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',
});

type WrapperProps = {
  hidden?: boolean;
  children?: ReactNode;
  display?: string;
  [key: string]: any;
};

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>((props, ref) => (
  <SelectWrapperFrame ref={ref} {...(props as any)} />
));

const useDidUpdate = (func: () => void, deps: DependencyList | undefined) => {
  const didMount = useRef(false);
  const fn = useStableCallback(func);

  useEffect(() => {
    if (didMount.current) {
      fn();
    }
    didMount.current = true;
  }, deps || []);
};

export type SelectProps = Omit<BoxProps, 'onChange'> & {
  anchor?: ElementType;
  error?: string;
  options: SelectOption[];
  onChange: (value: SelectOption[0]) => void;
  getLabel?: (params: SelectOption) => SelectOption[1];
  getValue?: (params: SelectOption) => SelectOption[0];
  filter?: string;
  renderOptions?: ElementType;
  renderItem?: ElementType;
  renderSelected?: ElementType;
  customEmpty?: string;
  addonIcon?: IconProps['name'];
};

const SelectLegacy = forwardRef<HTMLInputElement, SelectProps>(
  function SelectLegacy(
    {
      value,
      filter,
      error,
      disabled,
      options = [],
      anchor: Anchor = SelectFocus,
      onChange = () => {},
      getValue = ([value] = ['', '']) => value,
      getLabel = ([, label] = ['', '']) => label,
      placeholder = '',
      renderItem,
      renderSelected: RenderSelected,
      renderOptions: _Options = Options,
      addonIcon,
      customEmpty,
      ...props
    },
    ref,
  ) {
    const [internalValue, setInternalValue] = useState(value || '');

    const internalChangedByKeyboard = useStableCallback(
      ([value]: OptionType) => {
        setInternalValue(value);
        onChange(value as SelectOption[0]); // FIXME
      },
    );

    const option = options.find(
      (option) => getValue(option) === internalValue,
    ) as SelectOption;

    const index = options.indexOf(option);

    const filteredOptions = useMemo<OptionType[]>((): OptionType[] => {
      const mapOptions = ([value, label]: SelectOption): OptionType => {
        if (internalValue === value) {
          return [value, label, true];
        }
        return [value, label];
      };

      const applyFilter = ([, option]: SelectOption) =>
        !filter || ~option.toLowerCase().indexOf(filter.toLowerCase());

      return options.filter(applyFilter).map(mapOptions);
    }, [options, internalValue, filter]);

    const [cursor, handleKeyDown, handleKeyUp, reset, [visible, hide, show]] =
      useCursor(index, filteredOptions, internalChangedByKeyboard);

    const innerRef = useRef<HTMLInputElement | null>(null);
    const anchorRef = useMergedRefs(ref, innerRef);

    const removeFocusClass = () =>
      innerRef.current?.classList.remove('focus-visible');

    const internalChangedByClick = useStableCallback(([value]: OptionType) => {
      setInternalValue(value);
      onChange(value as SelectOption[0]); // FIXME
      removeFocusClass();
      hide();
    });

    const renderAnchor = (params: SelectAnchorParams) => {
      if (isForwardRefType(Anchor)) {
        return <Anchor {...params} />;
      }

      if (typeof Anchor === 'function') {
        return (Anchor as (params: SelectAnchorParams) => ReactNode)(params);
      }

      return null;
    };

    const { ref: containerRef, borderBoxSize } = useResizeObserver();

    useDidUpdate(reset, [filter, internalValue]);
    useOutsideClick([containerRef], removeFocusClass);

    const valueLabel = getLabel(option);

    const visibleText =
      (filter === undefined || visible === AnimatedVisibility.HIDDEN) &&
      (valueLabel || placeholder || typeof placeholder === 'string');

    const handleClick = useStableCallback(() => {
      if (innerRef.current?.classList.contains('focus-visible')) {
        removeFocusClass();
        return hide();
      }

      innerRef.current?.classList.add('focus-visible');
      innerRef.current?.focus();
      return show();
    });

    return (
      <SelectFrame
        disabled={disabled || undefined}
        ref={containerRef}
        onPress={handleClick}
        invalid={!!error || undefined}
        {...(props as any)}
      >
        <Wrapper
          display='flex'
          hidden={!!visibleText || undefined}
        >
          {visibleText &&
            (RenderSelected ? (
              <RenderSelected
                role='option'
                value={getValue(option)}
                label={valueLabel}
                key={getValue(option)}
                onClick={internalChangedByClick}
              />
            ) : (
              <SelectItemText
                color={valueLabel ? '$fontDefault' : '$fontHint'}
              >
                {visibleText}
              </SelectItemText>
            ))}
          {renderAnchor({
            ref: anchorRef,
            children: !value ? option || placeholder : null,
            disabled: disabled ?? false,
            onClick: show,
            onBlur: hide,
            onKeyDown: handleKeyDown,
            onKeyUp: handleKeyUp,
          })}
          <SelectAddon
            marginInline={4}
            children={
              <Icon
                name={
                  visible === AnimatedVisibility.VISIBLE
                    ? 'chevron-up'
                    : addonIcon || 'chevron-down'
                }
                size='x20'
              />
            }
          />
        </Wrapper>
        <PositionAnimated visible={visible} anchor={containerRef}>
          <_Options
            width={borderBoxSize.inlineSize}
            role='listbox'
            filter={filter}
            options={filteredOptions}
            onSelect={internalChangedByClick}
            renderItem={renderItem}
            cursor={cursor}
            customEmpty={customEmpty}
          />
        </PositionAnimated>
      </SelectFrame>
    );
  },
);

export default SelectLegacy;
