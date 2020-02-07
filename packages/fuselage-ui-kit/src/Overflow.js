import React, { useRef } from 'react';
import {
  AnimatedVisibility,
  Button,
  PositionAnimated,
  Options,
  Icon,
  useCursor,
} from '@rocket.chat/fuselage';

import { useBlockContext } from './hooks';

const convertOptions = (options, parser) => options.map(({ text, value }) => [value, parser(text)]);

export const Overflow = ({ context, options, parser, ...element }) => {
  const [{ loading }, action] = useBlockContext(element, context);

  const handleSelection = ([value]) => action({ target: { value } });
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
        mod-loading={loading}
      >
        <Icon name='menu' size={20} />
      </Button>
      <PositionAnimated
        width='auto'
        visible={visible ? AnimatedVisibility.VISIBLE : AnimatedVisibility.HIDDEN}
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
