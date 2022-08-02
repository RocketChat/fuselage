import type { Placements } from '@rocket.chat/fuselage-hooks';
import type { ComponentProps, ElementType, ReactNode } from 'react';
import React, { useRef, useCallback } from 'react';

import { Dropdown, Options, useCursor } from '..';
import type Box from '../Box';
import { IconButton } from '../Button/IconButton';
import type { OptionType } from '../Options';

type MenuProps = Omit<ComponentProps<typeof IconButton>, 'icon'> & {
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
  icon?: ComponentProps<typeof IconButton>['icon'];
  maxHeight?: string | number;
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

  const reference = useRef<HTMLElement>(null);
  const target = useRef<HTMLElement>(null);

  const onClick = useCallback(() => {
    visible === 'hidden' ? show() : hide();
  }, [hide, show, visible]);

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
      <IconButton
        data-testid='menu'
        ref={reference}
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
      <Dropdown
        reference={reference}
        ref={target}
        placement={placement}
        visible={true}
        // visible={visible === 'visible'}
        onShow={() => show()}
        onClose={() => hide()}
      >
        <Options
          maxHeight={maxHeight}
          renderItem={renderItem}
          width={optionWidth}
          onSelect={handleSelection}
          options={mappedOptions}
          cursor={cursor}
          ref={target}
        />
      </Dropdown>
    </>
  );
};
