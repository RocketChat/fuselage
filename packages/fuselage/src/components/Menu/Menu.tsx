import type { Placements } from '@rocket.chat/fuselage-hooks';
import type { ComponentProps, ElementType, ReactNode } from 'react';
import React, { useRef, useCallback } from 'react';

import { ActionButton, PositionAnimated, Options, useCursor } from '..';
import type Box from '../Box';
import type { OptionType } from '../Options';

type MenuProps = Omit<ComponentProps<typeof ActionButton>, 'icon'> & {
  options: {
    [id: string]: {
      type?: 'option' | 'heading' | 'divider';
      label?: ReactNode;
      action?: () => void;
    };
  };
  optionWidth?: ComponentProps<typeof Box>['width'];
  placement?: Placements;
  renderItem?: ElementType;
  icon?: ComponentProps<typeof ActionButton>['icon'];
};

const menuAction = ([selected]: OptionType, options: MenuProps['options']) => {
  options[selected].action?.();
};

const mapOptions = (options: MenuProps['options']): OptionType[] =>
  Object.entries(options).map(([value, { type = 'option', label }]) => [
    value,
    label,
    undefined,
    type,
  ]);

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
      return hide();
    }
    if (ref.current) {
      ref.current.focus();
      show();
      ref.current.classList.add('focus-visible');
    }
  }, [hide, show]);

  const handleSelection = useCallback(
    (args) => {
      menuAction(args, options);
      reset();
      hide();
    },
    [hide, reset, options]
  );

  return (
    <>
      <ActionButton
        ref={ref}
        ghost
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
