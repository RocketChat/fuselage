import React, { useRef, useCallback } from 'react';

import {
  Button,
  PositionAnimated,
  Options,
  Icon,
  useCursor,
} from '..';

const menuAction = ([selected], options) => {
  options[selected].action();
};

const mapOptions = (options) => Object.entries(options).map(([value, { label }]) => [value, label]);

export const Menu = ({
  options,
  optionWidth,
  placement = 'bottom-start',
  renderItem,
  ...props }) => {
  const mappedOptions = mapOptions(options);
  const [cursor, handleKeyDown, handleKeyUp, reset, [visible, hide, show]] = useCursor(-1, mappedOptions, (args, [, hide]) => {
    menuAction(args, options);
    reset();
    hide();
  });

  const ref = useRef();
  const onClick = useCallback(() => {
    ref.current.focus() & show();
    ref.current.classList.add('focus-visible');
  }, [show]);

  const handleSelection = useCallback((args) => {
    menuAction(args, options);
    reset();
    hide();
  }, [hide, reset, options]);

  return (
    <>
      <Button
        ref={ref}
        small
        ghost
        onClick={onClick}
        onBlur={hide}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <Icon name='kebab' size={20} />
      </Button>
      <PositionAnimated
        width='auto'
        visible={visible}
        anchor={ref}
        placement={placement}
      >
        <Options
          renderItem={renderItem}
          width={optionWidth}
          onSelect={handleSelection}
          options={mappedOptions}
          cursor={cursor}
        />
      </PositionAnimated>
    </>
  );
};
