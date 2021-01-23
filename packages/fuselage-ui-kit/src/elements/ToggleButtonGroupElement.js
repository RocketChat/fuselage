import { Box, Button, ButtonGroup, Throbber } from '@rocket.chat/fuselage';
import React, { memo } from 'react';

import { useUiKitState } from '../hooks';

const ToggleButtonGroupElement = ({ className, element, context, parser }) => {
  const [{ loading, value, error }, action] = useUiKitState(element, context);

  return (
    <Box
      display='flex'
      flexDirection='row'
      flexWrap='nowrap'
      alignItems='center'
    >
      {element.preLabel && (
        <Box fontScale='c2' paddingInlineEnd={4} textAlign='start'>
          {parser.plainText(element.preLabel)}
        </Box>
      )}
      <Box>
        <ButtonGroup
          className={className}
          align='center'
          margin={-4}
          minWidth={0}
        >
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
              flexShrink={1}
              onClick={action}
            >
              {loading ? <Throbber /> : parser.plainText(option.text)}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      {element.postLabel && (
        <Box fontScale='c2' paddingInlineStart={4} textAlign='end'>
          {parser.plainText(element.postLabel)}
        </Box>
      )}
    </Box>
  );
};

export default memo(ToggleButtonGroupElement);
