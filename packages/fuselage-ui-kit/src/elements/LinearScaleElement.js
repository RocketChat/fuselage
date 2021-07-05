import { Box, Button, ButtonGroup } from '@rocket.chat/fuselage';
import React, { memo, useMemo } from 'react';

import { useUiKitState } from '../hooks/useUiKitState';

const LinearScaleElement = ({ className, element, context, parser }) => {
  const {
    minValue = 0,
    maxValue = 10,
    initialValue,
    preLabel,
    postLabel,
  } = element;

  const [{ loading, value = initialValue, error }, action] = useUiKitState(
    element,
    context
  );

  const points = useMemo(
    () =>
      Array.from({ length: Math.max(maxValue - minValue + 1, 1) }, (_, i) =>
        String(minValue + i)
      ),
    [maxValue, minValue]
  );

  return (
    <Box
      display='flex'
      flexDirection='row'
      flexWrap='nowrap'
      alignItems='center'
    >
      {preLabel && (
        <Box fontScale='c2' paddingInlineEnd={8} textAlign='start'>
          {parser.plainText(preLabel)}
        </Box>
      )}
      <Box>
        <ButtonGroup
          className={className}
          align='center'
          marginInline={-2}
          minWidth={0}
        >
          {points.map((point, i) => (
            <Button
              key={i}
              className={point === value ? 'active' : undefined}
              disabled={loading}
              danger={!!error}
              minWidth='4ch'
              small
              value={point}
              marginInline={2}
              flexShrink={1}
              onClick={action}
            >
              {parser.plainText({
                type: 'plain_text',
                text: String(i + minValue),
              })}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      {postLabel && (
        <Box fontScale='c2' paddingInlineStart={8} textAlign='end'>
          {parser.plainText(postLabel)}
        </Box>
      )}
    </Box>
  );
};

export default memo(LinearScaleElement);
