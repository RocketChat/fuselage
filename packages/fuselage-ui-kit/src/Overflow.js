import React, { useRef } from 'react';
import {
  Button,
  PositionAnimated,
  Options,
  Icon,
  useCursor,
} from '@rocket.chat/fuselage';

const convertOptions = (options, parser) => options.map(({ text, value }) => [value, parser(text)]);
export const Overflow = ({ options, parser, onChange = console.log }) => {
  const handleSelection = ([value]) => onChange({ target: { value } });
  const convertedOptions = convertOptions(options, parser.text);
  const [cursor, handleKeyDown, handleKeyUp, , [visible, hide, show]] = useCursor(-1, convertedOptions, (args, [, hide]) => {
    handleSelection(args);
    hide();
  });
  const ref = useRef();
  return (
    <>
      <Button
        ref={ref}
        small
        ghost onClick={show}
        onBlur={hide}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
      >
        <Icon name='menu' size={20} />
      </Button>
      <PositionAnimated
        width='auto'
        visible={visible ? 1 : 0}
        anchor={ref}
        placement='bottom right'
      >
        <Options
          onSelect={handleSelection}
          options={convertOptions(options, parser.text)}
          cursor={cursor}
        />
      </PositionAnimated>
    </>
  );
};
