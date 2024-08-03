import { useEffectEvent, useResizeObserver } from '@rocket.chat/fuselage-hooks';
import {
  type ComponentProps,
  type ReactElement,
  useState,
  useRef,
} from 'react';

import { prevent } from '../../helpers/prevent';
import AnimatedVisibility from '../AnimatedVisibility';
import Box from '../Box';
import Chip from '../Chip';
import Flex from '../Flex';
import { Icon } from '../Icon';
import Margins from '../Margins';
import Option from '../Option';
import { useVisible } from '../Options/useVisible';
import { OptionsPaginated } from '../OptionsPaginated';
import Position from '../Position';
import SelectAddon from '../Select/SelectAddon';
import SelectFocus from '../Select/SelectFocus';

export type PaginatedMultiSelectOption = {
  value: string | number;
  label: string;
};

type PaginatedMultiSelectProps = Omit<
  ComponentProps<typeof Box>,
  'onChange' | 'value'
> & {
  error?: boolean;
  options: PaginatedMultiSelectOption[];
  withTitle?: boolean;
  placeholder?: string;
  endReached?: (start?: number, end?: number) => void;
  value?: PaginatedMultiSelectOption[];
  onChange: (values: PaginatedMultiSelectOption[]) => void;
  renderOptions?: (
    props: ComponentProps<typeof OptionsPaginated>
  ) => ReactElement | null;
  renderItem?: (props: ComponentProps<typeof Option>) => ReactElement | null;
  anchor?: any;
};

const PaginatedMultiSelect = ({
  withTitle,
  value,
  filter,
  options = [],
  error,
  disabled,
  anchor: Anchor = SelectFocus,
  onChange = () => {},
  placeholder,
  renderOptions: OptionsComponent = OptionsPaginated,
  renderItem = Option,
  endReached,
  ...props
}: PaginatedMultiSelectProps) => {
  const [internalValue, setInternalValue] = useState(value || []);

  const currentValue = value !== undefined ? value : internalValue;

  const selectedOptions = options.filter((option) =>
    currentValue.some((opt) => opt.value === option.value)
  );

  const [visible, hide, show] = useVisible();

  const ref = useRef<HTMLInputElement>(null);
  const { ref: containerRef, borderBoxSize } = useResizeObserver();

  const handleClick = useEffectEvent(() => {
    if (visible === AnimatedVisibility.VISIBLE) {
      return hide();
    }
    if (ref && ref.current) {
      ref.current.focus();
      return show();
    }
  });

  const addOption = (value: unknown) => {
    const option = options.find((opt) => opt.value === value);
    if (!option) {
      return;
    }

    const newValue = [...currentValue, option];
    setInternalValue(newValue);
    onChange(newValue);
  };

  const removeOption = (value: unknown) => {
    const newValue = currentValue.filter((opt) => opt.value !== value);

    setInternalValue(newValue);
    onChange(newValue);
  };

  const toggleOption = (value: unknown) => {
    if (currentValue.some((opt) => opt.value === value)) {
      removeOption(value);
      return;
    }

    addOption(value);
  };

  return (
    <Box
      is='div'
      rcx-select
      className={[error && 'invalid', disabled && 'disabled']}
      ref={containerRef}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      <Flex.Item grow={1}>
        <Margins inline='x4'>
          <Flex.Container>
            <Box is='div'>
              <Box
                is='div'
                display='flex'
                alignItems='center'
                flexWrap='wrap'
                margin='-x8'
                role='listbox'
              >
                <Margins all='x4'>
                  <Anchor
                    disabled={disabled}
                    ref={ref}
                    aria-haspopup='listbox'
                    onClick={show}
                    onBlur={hide}
                    order={1}
                    rcx-input-box--undecorated
                    children={placeholder ?? null}
                  />

                  {selectedOptions.map(({ value, label }, index) => (
                    <Chip
                      key={value ?? index}
                      maxWidth='x150'
                      withTruncatedText
                      title={withTitle ? label : undefined}
                      tabIndex={-1}
                      role='option'
                      onClick={(e) => {
                        prevent(e);
                        removeOption(value);
                      }}
                    >
                      {label}
                    </Chip>
                  ))}
                </Margins>
              </Box>
            </Box>
          </Flex.Container>
        </Margins>
      </Flex.Item>
      <Flex.Item grow={0} shrink={0}>
        <Margins inline='x4'>
          <SelectAddon
            children={
              <Icon
                name={
                  visible === AnimatedVisibility.VISIBLE
                    ? 'cross'
                    : 'chevron-down'
                }
                size='x20'
              />
            }
          />
        </Margins>
      </Flex.Item>
      <AnimatedVisibility visibility={visible}>
        <Position anchor={containerRef}>
          <OptionsComponent
            width={borderBoxSize.inlineSize}
            onMouseDown={prevent}
            multiple
            filter={filter}
            role='listbox'
            options={options}
            cursor={-1}
            endReached={endReached}
            renderItem={renderItem}
            onSelect={([value]) => {
              toggleOption(value);
            }}
          />
        </Position>
      </AnimatedVisibility>
    </Box>
  );
};

export default PaginatedMultiSelect;
