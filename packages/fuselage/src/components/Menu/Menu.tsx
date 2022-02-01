import { Placements } from '@rocket.chat/fuselage-hooks';
import React, {
  useRef,
  useCallback,
  ComponentProps,
  ReactElement,
  ReactNode,
  FC,
} from 'react';

import {
  ActionButton,
  PositionAnimated,
  Options,
  useCursor,
  Box,
  Option,
} from '..';
import type { Option as OptionType } from '../Options/useCursor';

type MenuProps = Omit<ComponentProps<typeof ActionButton>, 'icon'> & {
  icon?: string;
  options: {
    [id: string]: {
      label: ReactElement | string;
      action: () => void;
    };
  };
  optionWidth?: ComponentProps<typeof Box>['width'];
  placement?: Placements;
  renderItem?: (props: ComponentProps<typeof Option>) => ReactNode;
};

const menuAction = ([selected]: OptionType, options: MenuProps['options']) => {
  options[selected].action();
};

const mapOptions = (options: MenuProps['options']) =>
  Object.entries(options).map(([value, { label }]) => [value, label]);

export const Menu: FC<MenuProps> = ({
  tiny,
  mini,
  small = tiny || mini ? null : true,
  options,
  optionWidth,
  placement = 'bottom-start',
  renderItem,
  maxHeight,
  ...props
}) => {
  const mappedOptions = mapOptions(options);
  const [cursor, handleKeyDown, handleKeyUp, reset, [visible, hide, show]] =
    useCursor(-1, mappedOptions as OptionType[], (args, [, hide]) => {
      console.log(args);
      menuAction(args as OptionType, options);
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
  }, [show]);

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
        icon='kebab'
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
