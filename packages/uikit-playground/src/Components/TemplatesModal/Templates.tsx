import { css } from '@rocket.chat/css-in-js';
import { Box, Button, Icon } from '@rocket.chat/fuselage';
import type { FC } from 'react';
import React, { useContext } from 'react';

import { context, templatesToggleAction } from '../../Context';

const Templates: FC = () => {
  const {
    state: { templatesToggle },
    dispatch,
  } = useContext(context);
  return (
    <>
      {templatesToggle && (
        <Box
          position="absolute"
          width={'100%'}
          height={'100%'}
          bg="var(--primaryBackgroundColor)"
          zIndex={100}
          overflow="auto"
          className={css`
            top: 0;
            left: 0;
          `}
        >
          <Button
            position="absolute"
            className={css`
              top: 40px;
              right: 40px;
            `}
            onClick={() => dispatch(templatesToggleAction(false))}
          >
            <Icon name="cross" size="x15" />
          </Button>
        </Box>
      )}
    </>
  );
};

export default Templates;
