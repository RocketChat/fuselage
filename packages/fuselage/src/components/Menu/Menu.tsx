import type { UsePositionOptions } from '@rocket.chat/fuselage-hooks';
import type { Keys as IconName } from '@rocket.chat/icons';
import type { ComponentType, ReactNode } from 'react';
import { useRef, useCallback, useEffect } from 'react';

import type { BoxProps } from '../Box';
import { IconButton } from '../Button';
import type { IconButtonProps } from '../Button/IconButton';
import { Options, useCursor, type OptionType } from '../Options';
import PositionAnimated from '../PositionAnimated';

type MenuProps = Omit<IconButtonProps, 'icon'> & {
  options: {
    [id: string]: {
      type?: 'option' | 'heading' | 'divider';
      label?: ReactNode;
      action?: () => void;
      disabled?: boolean;
    };
  };
  optionWidth?: BoxProps['width'];
  placement?: UsePositionOptions['placement'];
  renderItem?: ComponentType<{
    role?: string;
    label: ReactNode;
    value: string | number;
    selected?: boolean;
    focus?: boolean;
  }>;
  icon?: IconName;
  maxHeight?: string | number;
};

const menuAction = ([selected]: OptionType, options: MenuProps['options']) => {
  options[selected].action?.();
};

const mapOptions = (options: MenuProps['options']): OptionType[] =>
  Object.entries(options).map(
    ([value, { type = 'option', label, disabled }]) => [
      value,
      label,
      undefined,
      disabled,
      type,
    ],
  );

/**
 * Kebab Menu
 */
export const Menu = ({
  tiny,
  mini,
  small = !(tiny || mini),
  options,
  optionWidth,
  placement = 'bottom-start',
  renderItem,
  maxHeight,
  icon = 'kebab',
  ...props
}: MenuProps) => {
  const mappedOptions = mapOptions(options);
  const [cursor, handleKeyDown, handleKeyUp, reset, [visible, hide, show]] =
    useCursor(-1, mappedOptions, (args, [, hide]) => {
      menuAction(args, options);
      reset();
      hide();
    });

  const ref = useRef<HTMLElement>(null);
  const onClick = useCallback(() => {
    if (ref.current?.classList.contains('focus-visible')) {
      ref.current.classList.remove('focus-visible');
      hide();
      return;
    }
    if (ref.current) {
      ref.current.focus();
      show();
      ref.current.classList.add('focus-visible');
    }
  }, [hide, show]);

  const handleSelection = useCallback(
    (args: OptionType) => {
      menuAction(args, options);
      reset();
      hide();
    },
    [hide, reset, options],
  );

  useEffect(() => {
    if (visible === 'hidden') {
      ref.current?.classList.remove('focus-visible');
    }
  }, [visible]);

  return (
    <>
      <IconButton
        data-testid='menu'
        ref={ref}
        small={small}
        tiny={tiny}
        mini={mini}
        onClick={onClick}
        onBlur={hide}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        icon={icon}
        {...props}
      />
      <PositionAnimated
        width='auto'
        visible={visible}
        anchor={ref}
        placement={placement}
      >
        <Options
          maxHeight={maxHeight}
          renderItem={renderItem}
          width={optionWidth}
          onSelect={handleSelection}
          options={mappedOptions}
          cursor={cursor}
          ref={ref}
        />
      </PositionAnimated>
    </>
  );
};
