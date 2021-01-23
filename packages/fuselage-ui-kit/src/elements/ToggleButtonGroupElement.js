import { Button, ButtonGroup, Throbber } from '@rocket.chat/fuselage';
import React, { memo } from 'react';

import { useUiKitState } from '../hooks';

const ToggleButtonGroupElement = ({ className, element, context, parser }) => {
  const [{ loading, value, error }, action] = useUiKitState(element, context);

  return (
    <ButtonGroup className={className} margin={-4}>
      {element.options.map((option, i) => (
        <Button
          key={i}
          className={option.value === value ? 'active' : undefined}
          disabled={loading}
          danger={!!error}
          minWidth='4ch'
          small
          value={option.value}
          margin={4}
          onClick={action}
        >
          {loading ? <Throbber /> : parser.plainText(option.text)}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default memo(ToggleButtonGroupElement);
