import type { UsePositionOptions } from '@rocket.chat/fuselage-hooks';
import type { ComponentProps, ElementType, ReactNode } from 'react';
import React, { useRef, useCallback, useEffect } from 'react';

import { PositionAnimated, Options, useCursor } from '..';
import type Box from '../Box';
import { IconButton } from '../Button/IconButton';
import type { OptionType } from '../Options';

type MenuProps = Omit<ComponentProps<typeof IconButton>, 'icon'> & {
  options: {
    [id: string]: {
      type?: 'option' | 'heading' | 'divider';
      label?: ReactNode;
      action?: () => void;
      disabled?: boolean;
    };
  };
  optionWidth?: ComponentProps<typeof Box>['width'];
  placement?: UsePositionOptions['placement'];
  renderItem?: ElementType;
  icon?: ComponentProps<typeof IconButton>['icon'];
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
    ]
  );

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
